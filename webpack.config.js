const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'), // 需要被处理文件路径
            filename: "index.html" // 文件打包完毕之后，目标文件名称
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    }
}
