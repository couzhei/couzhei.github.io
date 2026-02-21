import type { EleventyConfig } from "@11ty/eleventy";

const config = function (eleventyConfig: EleventyConfig) {
  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/resume.pdf": "resume.pdf" });

  return {
    dir: {
      input: "src",
      output: "_output",
      includes: "_includes",
      layouts: "layouts",
    },
    pathPrefix: "/",
  };
};

export = config;
