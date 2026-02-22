import type { EleventyConfig } from "@11ty/eleventy";

const config = function (eleventyConfig: EleventyConfig) {
  // Pass through copy for public assets
  eleventyConfig.addPassthroughCopy({ public: "." });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      layouts: "layouts",
    },
    pathPrefix: "/",
  };
};

export = config;
