const path = require('path');
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    extensions: ['.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
