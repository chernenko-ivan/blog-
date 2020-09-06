const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: [
                    /node_modules/,
                    /src\/server/,
                    /dist/
                ],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin()
    ]
};