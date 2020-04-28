const path = require("path");

/**
 * A plugin that creates a new index.html in ./dist/ when bundling. This means that ./dist/ can be completely empty before building, and
 * an index.html doesn't have to be located in some other random location. The version is kept at 
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * A cleanup plugin that cleans up the ./dist/ folder before bundling, so that nothing is outdated or unneeded in there.
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Boilerplate Site', // Rename this
            favicon: './favicon.svg' // Change image if you wish
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: "development"
};
