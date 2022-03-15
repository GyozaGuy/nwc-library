const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    writeToDisk: true
  },
  devtool: 'inline-source-map',
  mode: 'development'
});
