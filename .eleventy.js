module.exports = function (eleventyConfig) {
  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/resume.pdf": "resume.pdf" });

  return {
    dir: {
      input: "src",
      output: "_output",
      includes: "layouts",
      layouts: "layouts",
    },
    pathPrefix: "/",
  };
};
