const path = require('path');
const webpack = require('webpack');
const cleanWebpack = require('clean-webpack-plugin');

const ROOT = path.resolve( __dirname, './src/' );
const DESTINATION = path.resolve( __dirname, './dist/' );

module.exports = {
    context: ROOT,
    entry:  './index.ts',
    mode:'production',
    
    output: {
        filename: 'bundle.js',
        path: DESTINATION,
        publicPath: '/build/js', 
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude:/mode_modules/
            }
           
        ]
    },

    
    devServer: {},
    plugins:[
        new cleanWebpack.CleanWebpackPlugin()

    ]
};