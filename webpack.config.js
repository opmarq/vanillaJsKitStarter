var path = require("path");
var webpack = require("webpack");
var htmlWebpack = require("html-webpack-plugin");

module.exports = {

    entry: path.resolve('src/app/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve('src/public/dist')
    },

    devServer: {
        contentBase: path.resolve('src/public/'),
        port: 8080
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.gif|\.jpg|\.png)$/,
                include: path.resolve('src/app/images'),
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: ['jshint-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpack({
            title: 'vanilla Project',
            filename: '../index.html',
            template: path.resolve('src/app/template.html')
        })
    ]
};