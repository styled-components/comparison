import autoprefixer from 'autoprefixer';
import values from 'postcss-modules-values';
import combineLoaders from 'webpack-combine-loaders';
import { extendBaseConfig } from '../webpack.base.babel';

export default extendBaseConfig({
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // loader: 'style-loader!css-loader?modules=true!postcss-loader'
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader?modules=true'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => ([
                autoprefixer,
                values
              ])
            }
          }
        ])
      },
    ],
  },

});
