module.exports = {
    entry: "./src/entry.js",
    output: {
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'jsx-loader'
            },
        ]
    }
};
