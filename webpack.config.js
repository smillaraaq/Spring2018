module.exports = {
  entry: './app.js', // assumes your entry point is the app.js in the root of your project folder
  output: {
    path: __dirname,
    filename: './public/bundle.js' // assumes your bundle.js will also be in the root of your /public folder
  },
  devtool: 'source-map',
  resolve: {
    //extensions: ['', '.js', '.jsx'] //removed '', to fix wpack config error
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
        }
      },
      // use the style-loader/css-loader/sass-loader combos for anything matching the .scss extension
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};