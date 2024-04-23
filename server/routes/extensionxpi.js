
const path = require("path");

// https://extensionworkshop.com/documentation/publish/self-distribution/
module.exports = (_, res) => {
  res.setHeader("Content-Type", "application/x-xpinstall");
  res.sendFile(path.resolve("tmp/extension.xpi"));
};
