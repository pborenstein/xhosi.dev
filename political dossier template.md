This document describes how to build a political candidate dossier for a Plymouth, NH voter.

## Research

Use local sources first (plymouthnh.gov, frontrowseatnh.substack.com, indepthnh.org, local papers), then state sources (sos.nh.gov/elections, NHPR, NH Bulletin), then national sources.

Gather:

- Office sought, election date, district, and opponent(s)
- Whether the district covers Plymouth (Plymouth is in Grafton House District 8, Senate District 5, Executive Council District 2, and CD-2)
- Biography and career timeline
- Committees and caucuses, if the candidate is an incumbent
- Stated positions on key issues
- Notable votes, with dates
- Endorsements
- Fundraising (from the FEC for federal races, from NH campaign finance for state races), with coverage dates
- Polls, with pollster, dates, and sponsor
- Criticism from the left and from the right
- Free State Project, MAGA, or Trump ties, endorsements, or alignment, if any

## Output format

Write the file as `{Candidate Name}.md`. Frontmatter:

```
---
type: person
author: "🦙🦙🦙 Perplexity + Sonnet 5"
description: {one-sentence summary of office held/sought and party} ✷❋✷
---
```

Body:

```
# {Name} — Candidate Dossier

Compiled {date}. On the Plymouth, NH ballot: {office, election, date}.

## Snapshot
| Field | Detail |
|---|---|
| Full name | |
| Born | |
| Party | |
| Current office | |
| Seeking | |
| Opponent | |
| Education | |
| Personal | |
| Campaign site | |

## Career Timeline
| Years | Role |
|---|---|

## Committees and Caucuses
- Committees:
- Caucuses:

## Positions
| Issue | Stated position |
|---|---|
(cost of living, health care, abortion, LGBTQ rights, education/school funding, housing, immigration, democracy/voting, environment/energy, foreign policy, and any local NH issues such as EFA vouchers, the property tax, or the Northern Pass/energy siting)

## Notable Votes
| Vote | Position | Source |
|---|---|---|

## Free State / MAGA Ties
{Endorsements, memberships, pledges, or alignment. Write "None found" if you searched and found nothing.}

## Criticism From the Left
- 

## Criticism From the Right
- 

## Endorsements (Selected)
- 

## Money
| Item | Amount |
|---|---|
(state the coverage dates and the source)

## Polls
| Pollster | Dates | Result |
|---|---|---|

## Gaps
- {what could not be found; note if no local coverage was found}
```

## Constraints

- Cite a source URL inline in every table row or bullet that contains a researched fact.
- Do not bold text for stylistic effect.
- Do not editorialize. Report positions, votes, and criticism with attribution.
- If a field is unknown after research, omit it or list it under Gaps. Do not guess.
- Omit sections that don't apply (for example, Committees for a first-time candidate, or Polls for down-ballot races).
- For obscure local candidates, write what you can find and note the gaps. A short dossier is fine.
- Preserve any existing body content in an existing note.
