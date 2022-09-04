const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: './src/index.js'
    output: {
        // filename: "main.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: 'assets/icons/[name].[ext]',
                        output: 'assets',
                        useRelativePath: true,
                        publicPath: 'assets',
                    }
                }]
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({
        filename: "index.html",
        template: './index.html'
    })]
}