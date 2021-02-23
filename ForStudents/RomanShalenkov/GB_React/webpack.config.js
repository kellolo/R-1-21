const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        // publicPath: '',
        filename: path.join('js', 'bundle.js')
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true }
                        ]
                    ]                    
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src', 'styles'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@conteiners': path.resolve(__dirname, 'src', 'components', 'conteiners'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@img': path.resolve(__dirname, 'src', 'img'),
            '@func': path.resolve(__dirname, 'src', 'functions'),
            '@lib': path.resolve(__dirname, 'src', 'libraries')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: 3400,
        open: true,
        hot: true,
    }
};