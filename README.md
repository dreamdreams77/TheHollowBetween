# The Hollow Between

A single-file browser RPG / roguelite. Everything - game, story, art, save
system - lives in one `index.html`. No install, no build step, no internet
connection needed. Open the file in a browser and play.

## Running it

Double-click `index.html`, or drag it into a browser tab. That's it. It
works fully offline and saves to your browser's local storage, so it
remembers your progress between sessions on the same device.

To move a save to a different device or browser: open the in-game menu (or
"Restore a Save Code" on the title screen) and use Export/Import. It turns
your save into a text code you can copy, send yourself, and paste back in
anywhere.

## Controls

- **Move**: WASD or arrow keys
- **Attack**: Space (hold to charge a stronger hit)
- **Dodge**: X
- **Interact**: E
- **Companion ability**: Q
- **Journal**: I
- Touch controls (movement stick, Attack/Dodge buttons) appear
  automatically on phones and tablets once you're in a game.

## The core loop

You're stationed on **The Lantern**, a ship serving as your home base. From
there you build up your character, then launch **expeditions** into one of
several dying alien biomes. Each expedition spends energy, generates a
run's worth of rooms, fights, and discoveries, and ends either when you
choose to extract or when you die (death sends you home with roughly a
third of your HP and half your run's loot - it's a setback, not a full
reset).

Back at the ship you spend what you found: gear at the Forge, resources at
the Quartermaster, resting at the Med Bay, and story/relationship time with
your crew and companions. Then you launch again.

## What's actually going on under the hood

This game layers a lot of systems on top of that simple loop:

- **RPG progression** - attributes, XP, leveling, equipment with affixes,
  a card/ability hand you draw from in combat.
- **Roguelite structure** - each expedition is its own run with its own
  risk; relics, boons, and difficulty scale with an Ascension level you
  choose, similar to New Game+.
- **Companions and factions** - three alien factions (the Choir of Glass,
  the Marrow Courts, the Drift) and a handful of named companions and crew
  members, each with their own trust, quests, and consequences that
  persist across the whole save.
- **A living campaign** - settlements, territories, and NPCs keep changing
  state even while you're not looking at them; side quests grow out of
  that simulation rather than being handed to you from a fixed list.
- **The Convergence** - the game's ending system. Multiple distinct
  endings (Seal, Destroy, Walk Away, and several earned "alternate" routes
  like Reunion and Steward) become reachable depending on the alien
  relationships and campaign choices you've made. There's a "Calculate
  Trajectory" screen in the Command Deck that predicts where you're
  headed.

## The Drowned Observatory (and the rest of the "Guardian Acts")

This is the thing you asked about, and it deserves its own section because
it's genuinely a separate mini-game bolted onto the side of the main one,
not part of the main story or the Convergence.

Tap **STORY / QUESTS** (available from the title screen or in-game) and
you'll open the **Story Codex** - a five-act boss-rush mode called the
Astral Descent. Each act is a distinct "cosmic" location with its own
theme, its own house rule, and its own boss:

| Act | Location | Rule | Boss |
|---|---|---|---|
| I | **The Drowned Observatory** | *Tides of Memory* - healing restores less at the end of a fight, but Memory Fragments restore more | The Drowned Astronomer |
| II | The Bone Moon | *Gravitational Hunger* - repeated attacks hit harder, but movement gets riskier | The Pale Colossus |
| III | The Infinite Garden | *Living Paths* - cleared rooms can mutate and return changed | The Gardener Without a Face |
| IV | The Choir of Dead Stars | *Resonant Silence* - long combo chains get stronger, but breaking one empowers enemies | The Conductor |
| V | The Place Outside the Map | *Reality Fracture* - events can rewrite rewards and rules mid-run | The Thing That Was Waiting |

For each act, the Story Codex shows two small side quests (progress them
with "Simulate Progress," then claim gold/essence once complete) and a
**"Face the Guardian"** button that starts that act's boss fight - a
simplified turn-based encounter (Strike / Resonance / Dodge) rather than
the real-time combat used everywhere else in the game. Beating a Guardian
grants a themed relic and advances you to the next act; beating all five
unlocks a short "true ending" scene for this side mode specifically.

**Why it's confusing:** there's also a separate **Astral Map** button that
shows a room-by-room dungeon crawl for the same five acts, and a third,
unrelated **Astral Route** overlay that quietly runs boon/card choices
during your *normal* expeditions and happens to use similar "cosmic" art
and language. These are three different systems from different points in
the project's history that never got merged or visually distinguished from
each other. None of it touches the main Convergence ending. If it feels
disconnected from the main story, that's accurate - it is.

## Known quirks / notes for future changes

- This is one HTML file containing dozens of historically-added script
  blocks (labeled things like `hb10`, `v21`, `hb29` in the source) rather
  than one clean codebase. Later blocks sometimes patch or wrap functions
  defined in earlier ones. When editing, search for *all* definitions of a
  function name before assuming there's only one.
- Floating buttons and panels that depend on an active character (shop,
  crafting, the Command Deck, combat controls) are hidden until a game is
  actually running, via a `pregame` class on `<body>`. Astral Map and
  Story/Quests are the exception - they're self-contained and safe to use
  from the title screen, so they're docked into the title screen's own
  layout instead of hidden.
- Alien-relationship faction standing (`hb21.factions`, small numbers,
  drives which Convergence endings you can reach) and campaign-consequence
  faction standing (`hb29`/`v25.factions`, -100 to 100, drives the
  trajectory preview) are two different scales tracking the same three
  factions. They're kept *coherent* with each other (either can unlock the
  same ending) rather than merged into one number, since merging them
  outright would break both systems' pacing.

## Recent fixes

- Fixed a crash that occurred on every fresh page load, before the title
  screen even finished loading.
- Added save export/import (text-code based, works on mobile) plus a
  "Restore a Save Code" option on the title screen.
- Expedition summary now shows biome, depth, relics gained, companion, and
  an accurate cause of death (previously only kills/XP/gold/discoveries).
- Added a short, skippable, milestone-based tutorial for first-time
  characters; it never appears for saves that predate this feature.
- Fixed the Story/Quests panel not closing once you'd started a Guardian
  boss fight, and fixed "Face the Guardian" crashing outright.
- Fixed several floating buttons (Astral Map, Story/Quests, Command Deck,
  the shop/forge toolbar, on-screen combat controls) rendering on top of
  the title screen before a game had started.
- Fixed the Command Deck opening a blank panel when clicked with no
  character yet created.
