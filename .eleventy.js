// Loader to allow Eleventy to use .eleventy.ts via ts-node register
require("ts-node/register");
module.exports = require("./.eleventy.ts");
