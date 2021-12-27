const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname, './src/' );
const DESTINATION = path.resolve( __dirname, './dist/' );

module.exports = {
    context: ROOT,
    entry:  './index.ts',
    mode:'development',
    
    output: {
        filename: '[name].bundle.js',
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

    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        historyApiFallback: {
          index: 'index.html'
        }
    }
};