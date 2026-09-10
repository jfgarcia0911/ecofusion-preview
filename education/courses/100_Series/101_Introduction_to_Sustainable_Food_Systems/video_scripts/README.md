# EDU-101 Video Scripts

Ten short videos that turn *Introduction to Sustainable Food Systems* into a taught course. One instructor introduces each module, walks through the ideas that matter, and sends the learner on to the lesson and quiz.

Each script teaches **everything its quiz tests**. That was checked question by question, and every script ends with its checklist.

> **Not for learners.** Those checklists name the quiz answers. The platform's importer does not read this folder, and it must stay that way: never add `video_scripts/` to the folders imported as course resources.

---

## Running order

| # | Video | Plays | Length |
| --- | --- | --- | --- |
| 0 | [Welcome](00_welcome.md) | Start of the course | ~2 min |
| 1 | [The Global Food System](01_global_food_system.md) | Before Module 1 → Quiz 1 | ~4 min |
| 2 | [Challenges in Conventional Agriculture](02_conventional_agriculture.md) | Before Module 2 → Quiz 2 | ~4 min |
| 3 | [Principles of Sustainability](03_principles_of_sustainability.md) | Before Module 3 → Quiz 3 | ~4 min |
| 4 | [Alternative Food Systems](04_alternative_food_systems.md) | Before Module 4 → Quiz 4 | ~4 min |
| 5 | [Urban Agriculture & Food Security](05_urban_agriculture.md) | Before Module 5 → Quiz 5 | ~4 min |
| 6 | [Controlled Environment Agriculture](06_controlled_environment_agriculture.md) | Before Module 6 → Quiz 6 | ~3.5 min |
| 7 | [Aquaponics, Hydroponics & Aquaculture](07_aquaponics_hydroponics_aquaculture.md) | Before Module 7 → Quiz 7 | ~3.5 min |
| 8 | [Getting Started](08_getting_started.md) | Before Module 8 → Quiz 8 | ~4 min |
| 9 | [Closing](09_closing.md) | Before the final exam | ~2 min |
| | **Total** | | **~35 min** |

About 4,750 spoken words. The lengths allow for an avatar's slightly slower delivery and the marked pauses.

---

## How to read a script

- Plain paragraphs are **spoken**, word for word.
- `[ON SCREEN: ...]` is what the viewer **sees**: a slide, an image or a caption beside the instructor. It is never spoken. In HeyGen or Synthesia these become slides or background scenes; for a person on camera, they're cut-aways added in editing.
- `[PAUSE 2 seconds]` is a deliberate beat, usually after a question to the viewer.
- **Bold** marks the words to lean on. They're also the words the quiz asks about.

## Making the videos

The scripts work the same whichever route you take. Pick by budget and by how you feel about an AI presenter.

### Free, and usable in a course you sell

1. **A real person on camera.** Film with a phone or webcam against a plain background, read from the script (a free teleprompter app helps), and edit in a free editor such as DaVinci Resolve or CapCut, adding the `[ON SCREEN]` slides as cut-aways. It costs nothing but time, and a real teacher usually holds attention better than an avatar.
2. **Narrated slides, no face.** Build the `[ON SCREEN]` slides in Google Slides or Canva and add narration: either your own voice, or a text-to-speech voice whose licence allows commercial use. Open-source voices such as *Kokoro* are released for commercial use. Many free online text-to-speech services are not, so read the terms.

### Free for testing only

3. **The free plans of HeyGen, Synthesia and similar avatar tools.** Good for rendering the Welcome video to see what an avatar looks like. They're typically a few minutes a month, watermarked, and usually **not licensed for commercial use**, so their output shouldn't go into a course EcoFusion sells. Check each vendor's current terms, since plans change often.

### Paid

4. **An avatar tool on a paid plan**, optionally with ElevenLabs for the voice. At about 35 minutes for the whole course, this is a much smaller job than the full-narration estimate suggested. Price it on the vendor's current plans before committing.

Open-source *avatar* generators exist too, but they need a capable graphics card and technical setup, and many of their models are licensed for non-commercial use only. Not recommended here.

### Whichever route

- **One instructor for all ten videos**: same face, same voice, a name. `[Instructor name]` in the Welcome script is a placeholder.
- A **real person as the avatar or voice** must record their own consent; the avatar and voice services require it before they'll clone anyone.
- **Render Video 0 first** as the pilot. Watch it with two or three people who'd actually take the course before producing the rest.

---

## Before rendering: figures to check

An avatar says every number with complete confidence, and fixing one means rendering the video again. Each script lists its own figures; the ones that matter most:

| Video | Figure | Status |
| --- | --- | --- |
| 1 | 1,500 food miles | Decades-old US estimate. Scripted as "an often-quoted estimate"; keep that framing. |
| 1 | Beef 27 kg CO2e/kg | From the course's older source; newer studies are higher. Scripted as "by the figures we use in this course". |
| 2 | 10 fossil calories per food calorie | Contested. Scripted as "one widely cited estimate". |
| 2 | 26% of emissions; 265x for nitrous oxide | Defensible; the newest IPCC figure for nitrous oxide is 273. |
| 5 | Havana 50-70% of produce; Paris 100 ha "achieved" | Hard to source or doubtful, so **left out** of the script. |

These appear in the **lessons** but are **deliberately not spoken**, because they look out of date or wrong:

- Module 1's US food-spending split (54% grocery, 37% restaurants). USDA data shows Americans now spend more eating out than at home.
- Module 1's "0.5 kg CO2 per tomato", which is high for a single tomato.

---

## For the course author: gaps the videos currently cover

Matching every quiz question against the lessons turned up places where **learners are tested on things the lesson never teaches**. The videos teach them, so nobody is tested cold, but the lessons should be fixed too:

| Quiz | Tested but not in that module's lesson |
| --- | --- |
| Quiz 1 | 70% of freshwater used by agriculture; beef's water footprint; 60% of calories from wheat, rice and corn. All three appear in **Module 2**, which learners haven't reached yet. |
| Quiz 1 | The lesson table ranks **fruits** lowest for carbon; the quiz says **vegetables**. One of them should change. |
| Quiz 4 | **Agroforestry** and **Slow Food** aren't taught in any lesson. Farmers markets, farm-to-table and co-ops are covered only back in Modules 1 and 3. |
| Quiz 5 | **68% urban by 2050**, and the fact that urban farming has *higher* labour costs. |
| Quiz 8 | **Pilot projects**; zoning appears only as "licensing/permits". |
| Final exam | The source has 50 items. The platform holds the 35 that mark automatically; the matching and 5 short-answer questions have nowhere to be marked yet. |

---

## Getting the videos into the platform

The course player shows text lessons and quizzes today, and **has no video support yet**. Adding it is a separate code change: a video on each lesson, captions generated from these scripts, and a note when a script changes after its video was rendered.

Until then, the pilot can be reviewed as plain video files. Nothing here depends on the platform being ready first.
