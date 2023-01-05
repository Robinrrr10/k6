const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    login: './src/login.test.js',
    signup: './src/signup.test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};

//npm run bundle - This is to create the bundle. It will create the test script as bundle
//k6 run dist/bundlename.js - this command is to run the performance project

