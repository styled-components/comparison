import base from '../webpack.base.babel';

export default base({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
});
