import type { EleventyConfig } from "@11ty/eleventy";

const config = function (eleventyConfig: EleventyConfig) {
  // Pass through copy for public assets
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addFilter("postDate", (dateObj: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dateObj);
  });

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
