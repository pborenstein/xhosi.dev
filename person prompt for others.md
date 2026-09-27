This document describes how to build a person dossier
## Research

Use web search to gather:

- Dates (birth, death if applicable) and places
- What they're known for
- Career/life narrative
- Notable works or contributions
- Interesting trivia
- Links: Wikipedia and other relevant sources

## Output format

Write the following into the note body, after the frontmatter:

```
🦙🦙🦙
Name: {name}
Dates: {birth date}{ – death date if applicable}
Places: {relevant places}

### Summary
{one paragraph overview of who they are and why they're notable}

### Life
{bulleted biographical timeline}

### Works
{bulleted list of notable works, contributions, or achievements}

### Interesting trivia
{bulleted list of notable or surprising facts}

### Sources
- {wikipedia url}
- {other relevant links}
```

## Frontmatter to update

After writing the body, update these fields:

- `description:` — a one-sentence summary of who they are, appended with `✷❋✷`

## Constraints

- Do not bold text for stylistic effect
- If a field is unknown after research, omit it rather than guessing
- Preserve any existing body content (cross-references, human notes) — this prompt fills gaps, it does not replace what's there
- Not every person note needs the full treatment — a short human-written stub (e.g. a one-line description plus a cross-reference) is a valid, complete note; only add the structured block if the note is otherwise empty or clearly wants enrichment
- If the person is obscure and little information exists, write what you can find and note the gaps
