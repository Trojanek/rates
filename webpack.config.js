var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');

var extractPlugin = new ExtractTextPlugin({
    filename: '[chunkhash].main.css',
});

module.exports = {
    entry: {
        app: './src/app/app.js',
        // vendor: './src/app/vendor.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].[name].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(['dist']),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: extractPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.html$/,
                use: ['raw-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            // publicPath: 'img/',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map',
};
