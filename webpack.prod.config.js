/**
 * @file prod配置
 */
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: './examples/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-cube-contextmenu.min.js',
        library: 'VueCubeContextMenu',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: 'Vue'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]
});
