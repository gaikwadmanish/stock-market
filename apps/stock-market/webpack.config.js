const webpack = require('webpack');

const myOrgEnvRegex = /^STOCK_MARKET_/i;

function getClientEnvironment() {
  const envVars = {};
  for (const key in process.env) {
    if (myOrgEnvRegex.test(key)) {
      envVars[key] = process.env[key];
    }
  }

  return {
    'process.env': JSON.stringify(envVars),
  };
}

module.exports = (config) => {
  // Overwrite the mode set by Angular if the NODE_ENV is set
  config.mode = process.env.NODE_ENV || config.mode;
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment()));
  return config;
};
