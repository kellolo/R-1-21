const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const {
    CleanWebpackPlugin
} = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

const path = require( 'path' );

module.exports = {
    entry: {
        main: path.join( __dirname, 'src', 'index.jsx' )
    },
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: path.join( 'js', 'bundle.js' )
    },
    plugins: [
        new HtmlWebpackPlugin( {
            filename: 'index.html',
            template: path.join( __dirname, 'public', 'index.html' )
        } ),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [ {
                from: path.join( __dirname,'public','favicon.ico' ),
                to: path.join( __dirname, 'dist' ),
                toType: 'template'
            } ]
        }),
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        })
    ],




    module: {
        rules: [ {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }
                        ]
                    ]
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@styles': path.join(__dirname, 'src', 'styles'),
            '@components': path.join(__dirname, 'src', 'components'),
            '@containers': path.join(__dirname, 'src', 'components', 'containers'),
            '@pages': path.join(__dirname, 'src', 'pages'),
            '@img': path.join(__dirname, 'src', 'resources', 'img'),
            '@func': path.join(__dirname, 'src', 'resources', 'functions'),
            '@lib': path.join(__dirname, 'src', 'resources', 'libraries'),
            '@context': path.join(__dirname, 'src','components', 'context')
        }
    },
    devServer: {
        port: 3300,
        hot: true,
        open: true
    }
}