import path from 'path';

export default {
  context: __dirname,
  entry: {
    app: [
      path.resolve(__dirname, './src')
    ]
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};
