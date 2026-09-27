// Collects every link cited in the tables of person dossiers, grouped by site.
// Used by about.md to list sources.
import fs from "node:fs"
import path from "node:path"

const dirs = ["content/plymouth", "content/dover"]
// Allows one level of parentheses inside URLs, e.g. Wikipedia disambiguation
const linkRe = /\[([^\]]+)\]\((https?:\/\/(?:[^()\s]|\([^()\s]*\))+)\)/g

export default function() {
  const bySite = new Map()

  for (const dir of dirs) {
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md")) continue
      const src = fs.readFileSync(path.join(dir, file), "utf8")
      if (!/^type: person$/m.test(src) || file.includes("template")) continue

      for (const line of src.split("\n").filter(l => l.startsWith("|"))) {
        for (const [, text, url] of line.matchAll(linkRe)) {
          const host = new URL(url).hostname.replace(/^www\./, "")
          if (!bySite.has(host)) bySite.set(host, { host, count: 0, urls: new Set(), names: new Map() })
          const site = bySite.get(host)
          site.count++
          site.urls.add(url)
          site.names.set(text, (site.names.get(text) || 0) + 1)
        }
      }
    }
  }

  const sites = [...bySite.values()]
    .sort((a, b) => b.count - a.count || a.host.localeCompare(b.host))
    .map(site => ({
      // Label each site with the link text the dossiers use most often
      name: [...site.names.entries()].sort((a, b) => b[1] - a[1])[0][0],
      host: site.host,
      count: site.count,
      urls: [...site.urls].sort()
    }))

  return {
    sites,
    citations: sites.reduce((n, s) => n + s.count, 0),
    links: sites.reduce((n, s) => n + s.urls.length, 0)
  }
}
