import autoprefixer from 'autoprefixer';
import values from 'postcss-modules-values';
import { extendBaseConfig } from '../webpack.base.babel';

export default extendBaseConfig({
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules!postcss',
      },
    ],
  },
  postcss: () => [autoprefixer, values],
});
