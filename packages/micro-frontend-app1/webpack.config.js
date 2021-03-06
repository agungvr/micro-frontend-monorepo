const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vr",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });

  const config = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["@vr/app2"],
  });

  return config;
};
