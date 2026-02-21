module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/resume.pdf": "resume.pdf" });
  eleventyConfig.addPassthroughCopy({ "src/projects": "projects" });
  eleventyConfig.addPassthroughCopy({ "src/blog": "blog" });
  return {
    dir: {
      input: "src",
      output: "_output",
    },
  };
};
