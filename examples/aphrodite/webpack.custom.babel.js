import { extendBaseConfig } from '../webpack.base.babel';

export default extendBaseConfig({
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
});
