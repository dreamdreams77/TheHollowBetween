// Service worker for The Hollow Between.
// Scope: caching this app's own static files for offline "installed app"
// play. Deliberately does not and cannot touch game state - GameState
// lives entirely in localStorage inside index.html, which this worker
// never reads, writes, or intercepts. If anything here ever misbehaves,
// the game still works identically with the service worker disabled or
// unregistered - see the try/catch-wrapped registration in index.html.

const CACHE_NAME = "hollow-between-v2"; // bump this on every deploy so old caches get cleared out
const CORE_ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => {}) // offline-first is a bonus, never block install on it
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// index.html is the one file that changes on every deploy, so it gets
// network-first: always try to fetch the latest build, and only fall
// back to the cached copy if the network request fails (i.e. actually
// offline). Cache-first here was the reason updates never showed up -
// once a phone had a copy cached, it would keep serving that copy
// forever and never know a new version existed.
//
// Everything else in CORE_ASSETS (manifest, icons) changes rarely if
// ever, so those stay cache-first for speed. Non-origin requests
// (Google Fonts, CDNs) are left untouched either way.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // let font/CDN requests pass through untouched

  const isAppShell = url.pathname.endsWith("/") || url.pathname.endsWith("/index.html");

  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => cached);
    })
  );
});
