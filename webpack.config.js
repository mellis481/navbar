const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mf-demo",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    // customizations can go here
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  });
};
