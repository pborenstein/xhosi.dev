---
title: About
---

# About

This site collects research dossiers on the candidates who appear on the Plymouth, New Hampshire ballot for the general election on November 3, 2026. It covers federal, state and Grafton County races, from U.S. Senate down to Register of Probate. The [home page](/) lists every race and candidate.

Each dossier follows the same outline: a snapshot of the candidate, a career timeline, stated positions, notable votes, criticism from the left and the right, endorsements, money, polls, and a list of gaps where information could not be found or confirmed. Not every dossier has every section.

The research was compiled on September 25, 2026, with AI research tools (Perplexity and Claude Sonnet 5). Facts are cited inline to their sources. Things may have changed since then, and AI-assisted research can contain errors, so follow the citations before relying on any claim.

## Sources

The dossier tables cite {{ sources.links }} pages across {{ sources.sites.length }} sites, {{ sources.citations }} citations in all. They are grouped by site below and ordered by how often they are cited. The numbered links go to each page cited.

| Source | Site | Citations | Pages cited |
|---|---|---|---|
{%- for site in sources.sites %}
| {{ site.name }} | {{ site.host }} | {{ site.count }} | {% for url in site.urls %}[{{ loop.index }}]({{ url }}) {% endfor %}|
{%- endfor %}

## Colophon

Built with [Eleventy](https://www.11ty.dev/) and served from [xhosi.dev](https://xhosi.dev/). Based on the [eleventy-pamphlet](https://github.com/tepiton/eleventy-pamphlet) template.
