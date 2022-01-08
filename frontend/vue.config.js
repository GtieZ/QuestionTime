
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://127.0.0.1:8080',
    outputDir: '../static/dist',
    indexPath: '../../templates/index.html',
    pages: {
        index: {
            entry: "src/main.js",
            title: "QuestionTime",
        },
    },
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'QuestionTime',
      },
    },
    chainWebpack: config => {
        config.devServer
            .public('http://127.0.0.1:8080')
            .hotOnly(true)
            .headers({"Access-Control-Allow-Origin": "*"})
            .writeToDisk(filePath => filePath.endsWith('index.html'));
    }
}