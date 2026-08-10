# The Hollow Between

*An atmospheric expedition RPG/roguelite about a dying alien ecosystem, a missing person, and the walls between worlds.*

The Lantern's crew is running expeditions into a cluster of collapsing biomes, mapping what's left, fighting what's guarding it, and slowly working out that none of it is natural. Something is pulling the worlds together. Someone already went through. You're the one who has to decide what to do about it.

**[Play it in your browser](#running-locally)** — single file, no install, no build step.

---

## What This Is

The Hollow Between is a real-time exploration and combat RPG with roguelite expedition structure: you launch runs from a home base, explore procedurally-arranged biomes, fight and negotiate with an ecosystem that reacts to what you do to it, and carry permanent progress back with you between runs. It is a complete, playable, narratively-resolved game with six distinct endings, New Game+, and dozens of interlocking systems — not a tech demo and not a systems prototype.

**Setting:** the crew of a ship called the Lantern is investigating a "convergence" — a slow collision between separate worlds (a dying forest, alien ruins, crystal caverns, a haunted mansion, the void itself, and eventually a string of locations across the system) that is destroying all of them at once. A crew member, Wren, went missing through it before the game begins. What you find, who you trust, and what you're willing to trade shapes how — and whether — you get her back.

## Gameplay Concept

Each expedition is a self-contained run: pick a biome, explore it in real time, fight or avoid what lives there, and return to the Lantern before you run out of energy or HP. What you bring back — resources, cards, discoveries, quest progress — persists. What happens to you *during* a run (your position, your immediate danger) does not. Dying in the field costs you materials and gold and sends you home hurt, never permanently ends a run outright.

The further and deeper you push into a biome, the more dangerous and rewarding it gets. Depth persists per biome across visits. Some content — bosses, rare encounters, entire biomes — is gated behind real prerequisites (a building constructed, a boss defeated, a level reached), not arbitrary unlock timers.

## Major Systems

**Exploration.** Real-time movement through procedurally-arranged tile-based biomes: the Dying Forest, Alien Ruins, Crystal Caverns, Haunted Mansion, and the Void Between on the ground, plus a full space program (Orbital Station, the Moon, Mars, the Asteroid Belt, Jupiter, and finally the Void Gate) once you've earned access to it. Weather, day/night, and season all shift the field visually and mechanically. Fog of war, hidden passages, and a minimap round it out.

**Combat.** Real-time, not turn-based. Basic attacks, a dodge, and up to nine unlockable hotkey abilities (Whirlwind, Piercing Shot, Rally, Execute, Berserk Stance, Echo Ping, Void Step, Time Dilation, Calm Creature) layered on top of seven damage types (physical, fire, cold, shock, poison, void, spirit) with real counters. Creatures aren't reskins of each other — eleven distinct behavioral archetypes (ambusher, swarm, tank, sniper, pack hunter, and more) each demand a different approach, and major bosses run genuine multi-phase fights with telegraphed attacks and a changing weakness per phase.

**Cards.** A supplementary combat layer: thirteen cards across four rarities, each resolved with a rarity-appropriate die roll (a fumble on a 1, a critical on the max roll, a "strong" band in between) rather than a flat guaranteed effect. Cards come from kills, chests, quest rewards, and leveling up.

**Equipment.** Twenty-one craftable items across three slots (weapon, armor, trinket), built from resources you gather in the field. Effects range from flat stat bonuses to conditional ones — a weapon that borrows its damage type from your last card played, armor that only kicks in below half HP, a trinket that makes crafting cheaper. Two late-game abilities (Salvage, Infusion) let you break gear down for materials or permanently upgrade it with essence.

**Discoveries.** Two linked systems: standalone field discoveries with their own short narrative text, and ten larger mysteries that need multiple related clues before they reveal a full page of story — the game doesn't explain itself up front, it lets you piece it together. A separate ecology-notes system rewards you for actually *witnessing* predator/prey relationships play out in the field, not just reading about them.

**Encounters.** Beyond normal creature spawns: sixteen-plus rare encounters gated by minimum depth, mid-run route events that change the rules for the rest of that expedition, environmental hazards (fire spreads across grass, water amplifies shock damage), traps, and biome-specific landmarks — some tied directly to quests.

**Progression.** Leveling, an ability tree spent with earned ability points across four categories (combat, exploration, creature, crafting), crew trust with three named NPCs (Pip, Rook, Sable) that unlocks real dialogue and permanent bonuses, faction standing with two factions that moves shop prices and enemy difficulty, and a base you build out room by room (Workshop, Laboratory, Habitat Bay, Greenhouse, Quartermaster, Equipment Forge, Med Bay, Training Room, Observatory, Portal Chamber) — several of which are required to unlock entire new biomes.

**Endings.** Six of them, not two. Two are always available once you've earned the right to end the story at all; the other four are genuinely earned — by how far you've explored, who you've built trust with, and what you've actually understood about the people around you — not picked from a menu. New Game+ carries your perks, deck, and discoveries into a harder loop afterward, if you want to go back in.

## How to Play

1. Open `index.html` in a modern browser (or visit the GitHub Pages link above).
2. From the title screen, choose a build and begin.
3. From the Lantern, launch an expedition into whichever biome is available to you.
4. Explore, fight, collect, and return before you run out of energy or HP.
5. Spend what you brought back at base: craft equipment, complete crew tasks, build new rooms, spend ability points.
6. Repeat, pushing deeper and further out, until you've earned your way to the Bridge and made your choice.

Progress saves automatically to your browser's local storage — nothing leaves your machine, and there's no account or login.

### Controls

| Key | Action |
|---|---|
| `WASD` / Arrow keys | Move |
| `Space` | Attack (double-tap for a heavy attack) |
| `Q` | Companion ability |
| `E` | Interact / examine |
| `X` | Return to base |
| `1`–`5` | Play a card |
| `C` | Whirlwind *(once unlocked)* |
| `Z` | Piercing Shot *(once unlocked)* |
| `R` | Rally *(once unlocked)* |
| `T` | Execute *(once unlocked)* |
| `B` | Berserk Stance *(once unlocked)* |
| `V` | Echo Ping *(once unlocked)* |
| `F` | Void Step *(once unlocked)* |
| `G` | Time Dilation *(once unlocked)* |
| `H` | Calm Creature *(once unlocked)* |

Touch controls (movement stick, tap-to-interact, contextual action buttons) are built in for phones and tablets — nothing above requires a keyboard or a mouse hover to reach.

## Running Locally

No build step, no dependencies, no server required.

```bash
git clone https://github.com/<your-username>/the-hollow-between.git
cd the-hollow-between
```

Then either:
- Double-click `index.html` to open it directly in a browser, **or**
- Serve it locally if your browser is picky about local file access:
  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

That's it — everything the game needs (styling, logic, and even its sound effects, which are synthesized in-browser rather than loaded from audio files) lives in the one HTML file.

## Project Structure

```
the-hollow-between/
├── index.html          # the entire game — markup, styling, and logic in one file
├── README.md            # this file
├── LICENSE
├── RELEASE_NOTES.md      # current version notes
└── .gitignore
```

There is no separate `assets/`, `data/`, or `audio/` directory because none is needed: the game has no external images, fonts loaded from a CDN are used only as a progressive enhancement with full local fallbacks, and every sound effect is generated at runtime rather than played from a file. This is a deliberate, working design choice carried through the whole project, not an oversight.

## Development Status

This is a substantially complete, tested, playable release, not a prototype or a systems demo. All major systems listed above are implemented, connected to each other, and exercised by an automated regression pass covering the full loop — title through expedition, combat, cards, equipment, discoveries, quest completion, death and recovery, the full space program, all six endings, and New Game+ — before each release.

See `RELEASE_NOTES.md` for what changed in the current version.

## Known Limitations

- Custom fonts are loaded from Google Fonts over HTTPS; the game is fully playable without internet access, but will render with system font fallbacks instead of its intended typefaces if the font request can't complete.
- Content is deep but not infinite: creature, quest, and encounter variety is large but finite, as in any handcrafted game of this scope — repeated New Game+ cycles will surface familiar content with tougher numbers rather than endlessly new material.
- Single save slot, stored in browser local storage — clearing site data for this page will clear your save. There's no cloud sync or export/import yet.

## License

See `LICENSE`. See `RELEASE_NOTES.md` for versioning and credit.
