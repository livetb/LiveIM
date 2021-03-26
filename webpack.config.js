const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

const PATH = {
    SRC: './webpack_src',
    PUBLIC: './public',
    DIST: './public/dist',
}

const Config = {
    is_development: true
}

module.exports = (() => {
return {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/,
                parallel: true,
                sourceMap: false, // 生产环境关闭
            })
        ],
    },
    // externals: {
    //     firebase: 'firebase',
    //     axios: 'axios',
    //     Stripe: 'Stripe'
    // },
    entry: {
        index: path.resolve(__dirname, `${PATH.SRC}/pages/index/index.js`),
    },
    output: { 
        path: path.resolve(__dirname, PATH.DIST),
        // filename: '[name].[contenthash].bundle.js', // [name] - 根据entry自动生成
        filename: '[name].bundle.js', // [name] - 根据entry自动生成
    },
    devtool: Config.is_development ? 'inline-source-map' : 'eval', // eval
    mode: Config.is_development ? 'development' : 'production', // production or development
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'Main Page',
        //     template: path.resolve(__dirname, `${PATH.SRC}/template/index.html`),
        //     filename: path.resolve(__dirname, `${PATH.PUBLIC}/page1.html`), // output file
        //     chunks: ['first'],
        // }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            }
        ]
    },
}
})();