
const state = require("../state");

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const { version } = state.getExtension();

  // https://extensionworkshop.com/documentation/manage/updating-your-extension/
  res.send(`
  {
    "addons": {
      "test@addon.com": {
        "updates": [
            {
              "version": "${version}",
              "update_link": "http://${req.hostname}:${state.PORT}/extension.xpi"
            }
        ]
      }
    }
  }`.trim());
};
