module.exports = {
    entry: __dirname + '/src/ujarakbtn.js',
    output: {
        path: __dirname + '/dist',
        filename: 'ujarakbtn.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
