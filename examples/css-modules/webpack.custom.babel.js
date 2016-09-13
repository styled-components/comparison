import autoprefixer from 'autoprefixer';
import values from 'postcss-modules-values';
import base from '../webpack.base.babel';

export default base({
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules!postcss',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css',
      },
    ],
  },
  postcss: () => [autoprefixer, values],
});
