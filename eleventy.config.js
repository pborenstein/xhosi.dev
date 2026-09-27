import { HtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";

export default function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("content/img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true
  }).disable(["code", "replacements"]); // replacements turns party labels like (R) into ®

  eleventyConfig.setLibrary("md", md);

  // Give each h2 an id and insert a list of links to them after the h1
  eleventyConfig.addFilter("withToc", function(html) {
    const slugify = eleventyConfig.getFilter("slugify");
    const items = [];
    const body = html.replace(/<h2>(.*?)<\/h2>/g, (match, inner) => {
      const id = slugify(inner.replace(/<[^>]+>/g, ""));
      items.push(`<li><a href="#${id}">${inner}</a></li>`);
      return `<h2 id="${id}">${inner}</h2>`;
    });
    if (items.length === 0) return html;
    const toc = `<nav class="page-toc" aria-label="Sections"><ul>${items.join("")}</ul></nav>`;
    return body.replace(/<\/h1>/, `</h1>\n${toc}`);
  });

  eleventyConfig.setServerOptions({
    showAllHosts: true
  });

  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
}
