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
 * import { extend } from '../webpack.base.babel.js';
 *
 * export default extend({
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
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg$/,
        loader: 'babel-loader!svg-react-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './shared/index.html'),
    }),
  ],
};

export const extendBaseConfig = (customConfig) => {
  // eslint-disable-next-line consistent-return
  mergeWith(config, customConfig, (objValue, srcValue) => {
    // Merge array values, e.g. custom plugins or loaders
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });

  return config;
};

export default config;
