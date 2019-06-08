const webpack = require("webpack");

module.exports = {
  target: "serverless",
  webpack: config => {
    config.plugins.push(new webpack.IgnorePlugin(/^electron$/));
    return config;
  }
};
