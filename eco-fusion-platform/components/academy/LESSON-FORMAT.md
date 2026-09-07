# Lesson authoring format

Lesson `content` is markdown, rendered by `LessonContent.tsx`. This is the
template to write against.

## Heading levels

The course player already prints the lesson title above the content, so **start
at H2**. A content-level `# H1` renders as a second title and reads as a
duplicate.

| Level | Use for | Renders as |
|---|---|---|
| `##` | Major sections | Hairline rule + accent tick + 22px bold |
| `###` | Sub-points within a section | 17px semibold |
| `####` | Labels above a list or table | Small uppercase accent eyebrow |

Keep to two levels where you can. `### 1. Electrocution` style numbering is
fine — write the number into the text, don't rely on an ordered list.

## Callouts

Safety content lives or dies on the reader noticing the dangerous part. Use
GitHub-style alerts — they're plain blockquotes, so the markdown stays readable
in any editor:

```markdown
> [!DANGER]
> Never open an energised panel with wet hands. Low voltage kills in wet
> conditions.
```

| Marker | Renders | Use for |
|---|---|---|
| `> [!DANGER]` | Red, shield icon | Can injure or kill someone |
| `> [!WARNING]` or `> [!CAUTION]` | Amber, triangle | Can damage equipment or stock |
| `> [!IMPORTANT]` | Green, check | Compliance requirement, must-do step |
| `> [!TIP]` | Green, bulb | Advice that improves outcomes |
| `> [!NOTE]` | Blue, info | Context, background, cross-reference |

Callouts support multiple paragraphs and nested lists. A blockquote with no
marker still renders as a normal quote.

Reserve `DANGER` for genuine risk to life. If everything is DANGER, nothing is.

## The rest

- **Lists** — `-` for unordered, `1.` for ordered. Accent-coloured markers.
- **Bold** — `**term**` for the first use of a key term. Don't bold sentences.
- **Code** — backticks for parameter names and values (`` `pH 6.8` ``), fenced
  blocks for procedures or config.
- **Links** — external links open in a new tab automatically.
- **Images** — `![alt text](url)`. The alt text renders as a visible caption, so
  write it as one.
- **Rules** — `---` between major topic shifts. The section rule on `##` usually
  makes this unnecessary.

## Tables

Table renderers exist but **markdown tables need `remark-gfm`**, which is not
installed yet. Until it is, `| a | b |` renders as literal text. Same for task
lists and strikethrough. To enable:

```
npm install remark-gfm
```

then pass `remarkPlugins={[remarkGfm]}` in `LessonContent.tsx`.

## Worked example

```markdown
## Why Electrical Safety is Critical

Aquaponics facilities combine two dangerous elements:

- **Water** — an excellent conductor of electricity
- **Electrical equipment** — pumps, lights, heaters, controls

> [!DANGER]
> This combination is the leading cause of serious injury in indoor grow
> facilities. Treat every circuit as live until you have personally locked it out.

## Types of Electrical Hazards

### 1. Electrocution

Fatal shock from contact with electrical current. Even low voltage can be deadly
in wet conditions.

### 2. Arc Flash

Explosive release of energy during a fault. Causes severe burns, hearing damage,
and physical trauma.

> [!IMPORTANT]
> Arc-rated PPE is required for any work on panels above 240 V.
```
