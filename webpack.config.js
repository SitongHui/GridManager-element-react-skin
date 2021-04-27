const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const buildPath = path.join(__dirname, "dist");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    // 文件导出的配置
    output:{
        path: buildPath ,
        filename: "js/index.js",
        libraryTarget: "umd"
    },
    externals: {
        'react': 'React',
        'gridmanager-react': 'gridmanagetReact'
    },
    module: {
        noParse: /node_modules\/(jquery\.js)/,
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            require.resolve('@babel/preset-env', { modules: false })
                        ],
                        cacheDirectory: true,
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'), // 需要被处理文件路径
            filename: "index.html" // 文件打包完毕之后，目标文件名称
        }),
        // 将文件复制到构建目录
        new CopyWebpackPlugin({patterns: [
            {from: path.join(__dirname, '/package.json'), to: './'},
            {from: path.join(__dirname, '/README.md'), to: './'}
        ]}),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    }
}
