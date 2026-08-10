// Service worker for The Hollow Between.
// Scope: caching this app's own static files for offline "installed app"
// play. Deliberately does not and cannot touch game state - GameState
// lives entirely in localStorage inside index.html, which this worker
// never reads, writes, or intercepts. If anything here ever misbehaves,
// the game still works identically with the service worker disabled or
// unregistered - see the try/catch-wrapped registration in index.html.

const CACHE_NAME = "hollow-between-v1";
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

// Cache-first for this app's own files, network fallback for everything
// else (including the Google Fonts request, which should always go to
// the network/browser cache, not this worker - fonts already degrade
// gracefully via CSS fallback stacks if that request fails).
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // let font/CDN requests pass through untouched

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => cached);
    })
  );
});
