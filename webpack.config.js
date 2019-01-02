var webpack = require('webpack');
var os = require('os');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var env = process.env.NODE_ENV || 'development';
var hot = process.env.HOT === 'true';
var OUTPUT_DIR = path.join(__dirname, './public');

var defines = {
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  },
  APP_CONFIG: fs.readFileSync(path.resolve(__dirname, 'configs', `${env}.json`)).toString()
};

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('[name].css'),
  new webpack.DefinePlugin(defines),
  new webpack.optimize.DedupePlugin(),
  new AddAssetHtmlPlugin({
    hash: true,
    filepath: require.resolve(`${OUTPUT_DIR}/dist/vendor.js`),
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
];

plugins.push(new webpack.DllReferencePlugin({
  context: '.',
  manifest: require(`${OUTPUT_DIR}/dist/vendor-manifest.json`)
}));

if (env === 'development') {
  if (hot) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
} else {
  plugins.push(new UglifyJsPlugin({
    parallel: os.cpus().length,
    uglifyOptions: {
      compress: {
        warnings: true
      },
      output: {
        beautify: false,
        comments: false
      }
    },
    sourceMap: false,
  }));
}

plugins.push(new HtmlWebpackPlugin({
  filename: path.join(OUTPUT_DIR, 'index.html'),
  template: path.join(OUTPUT_DIR, 'index.template.html'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minify: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
  hash: true,
  cache: true,
  chunks: ['app'],
  alwaysWriteToDisk: true,
  inject: true,
  showErrors: false,
}));

plugins.push(new HtmlWebpackHarddiskPlugin());

module.exports = {
  externals: {
    jquery: '$'
  },
  entry: {
    app: ['./src/js/app.jsx']
  },
  output: {
    path: `${OUTPUT_DIR}/dist`,
    filename: '[name].js',
    publicPath: hot && 'http://localhost:3001/' || '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?-minimize,sourceMap'
        )
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel?cacheDirectory=true']
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      },
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src/js'),
    extensions: ['', '.json', '.js', '.jsx', '.map'],
    modulesDirectories: ['node_modules']
  },
  plugins,
  devtool: env === 'development' ? 'source-map' : null
};
