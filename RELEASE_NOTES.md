# Release Notes

## v1.0.0 — Ship-Ready Release

This is the first release of *The Hollow Between* prepared for public distribution: a complete, tested build of the full game in a single `index.html` file, with no external dependencies required to run it.

### What's in this build

- The full core loop: base management, expedition exploration, real-time combat, cards, equipment, discoveries, quests, and progression, all connected to each other rather than existing as separate demos.
- The complete Space Program arc (Orbital Station through the Void Gate) and its tie-in to the main story.
- **Six endings**, each with its own real unlock condition tied to how you actually played, not a simple binary choice.
- New Game+.
- A from-scratch pass on mobile and touch support: redesigned touch controls, responsive modal and card layouts, and enforced minimum touch-target sizing throughout.

### Notable fixes in this build

- Both original endings were reachable but had no way to close the ending screen or start New Game+ afterward — a genuine dead end at the very end of the game. Fixed; the ending screen now offers New Game+ or a return to the ship.
- Several boss-fight narrative payoffs existed fully written in the game's data but were never actually shown to the player due to a mismatched property check. Restored — defeating the game's major bosses now delivers the reveal that was always meant to be there.
- Three unlockable combat/utility abilities could be purchased with earned ability points but had no effect when used. Fixed, along with several other ability-tree entries that were purchasable but mechanically inert.
- A Rule Book documentation gap (a missing control) was found and corrected during final release QA.

### Verification

Before this build was tagged, the full player-facing loop was exercised end-to-end: game load, expedition launch, exploration, combat, every unlockable ability, cards, equipment (including crafting, salvage, and infusion), discoveries, quest completion, death and recovery, the complete space program, all six endings (each confirmed reachable *and* dismissible), New Game+, and save/load integrity. No console errors, no missing assets, and no JavaScript syntax errors were found in this build.

### Known limitations

See the "Known Limitations" section of `README.md`.

---

*Version notes prepared by Laura Johnston.*
