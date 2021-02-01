const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        client: './src/client.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/i,
                include: /src/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'index.html' ),
            minify: false,
        } ),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true
    }
}