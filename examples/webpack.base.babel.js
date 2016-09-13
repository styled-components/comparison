import path from 'path';
import { mergeWith, isArray } from 'lodash';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * Concatenate custom webpack config with our base config.
 * Custom configs that have arrays will be concatenated with
 * the base arrays instead of replacing them.
 *
 * Usage:
 *
 * // example/webpack.custom.babel.js
 *
 * import base from '../webpack.base.babel.js';
 *
 * export default base({
 *   custom: webpack,
 *   config: {
 *     here: true,
 *   },
 * });
 */

const config = {
  entry: path.resolve(process.cwd(), './src'),
  output: {
    path: path.resolve(process.cwd(), './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './shared/index.html'),
    }),
  ],
};

export default (customConfig) => {
  // eslint-disable-next-line consistent-return
  mergeWith(config, customConfig, (objValue, srcValue) => {
    // Merge array values, e.g. custom plugins or loaders
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });

  return config;
};
