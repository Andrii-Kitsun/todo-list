const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'build.js'
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
};