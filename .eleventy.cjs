// Load TypeScript support for Eleventy config via tsx, then re-export the TS config
console.log("Loading .eleventy.ts via tsx/register");
require("tsx/register");
module.exports = require("./.eleventy.ts");
