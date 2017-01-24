module.exports = {
  entry: {
    html: './src/index.html',
    jsx: './src/index.jsx',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  eslint: {
    configFile: './.eslintrc',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
