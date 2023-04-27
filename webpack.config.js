// 导入path工具
const path = require("path");
// 导入HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入TerserPlugin插件
const TerserPlugin = require("terser-webpack-plugin");
// 导入BundleAnalyzerPlugin插件
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    devtool: "inline-source-map", // 方便查看源码
    entry: "./src/index.js",
    output: {
        filename: "dist.js",
        // filename: "[name].[contenthash].js", // 带哈希值的文件名
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ title: "博客列表" }),
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        static: "./dist",
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname, "src/utils/"),
        },
    },
};
