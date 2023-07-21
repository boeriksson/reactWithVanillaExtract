const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    mode: "development",
    module: {
        rules: [
        // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            url: false
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        static: './dist',
    },
}

