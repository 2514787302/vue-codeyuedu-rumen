// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {NODE_ENV: '"production"'}, //当前环境   正式环境
        index: path.resolve(__dirname, '../happyfri/index.html'), // html文件生成的地方
        assetsRoot: path.resolve(__dirname, '../happyfri'),   //资源根路径 项目打包后存放的路径 即项目目录下的dist文件
        assetsSubDirectory: 'static',  //资源子目录 存放静态资源文件的static，css、js、img
        assetsPublicPath: '/happyfri/', //资源公共路径 ，我们访问静态资源需要额外的前缀
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false, // 是否开启生产环境的gzip压缩
        productionGzipExtensions: ['js', 'css'] //开启gzip压缩后的文件的后缀名称
    },
    dev: {
        env: {NODE_ENV: '"development"'},   //开发环境
        port: 8088,   //端口
        assetsSubDirectory: 'static', //资源子目录 存放静态资源文件的static，css、js、img
        assetsPublicPath: '/',  //资源公共路径 ，我们访问静态资源需要额外的前缀
        context: [ //代理路径

        ],
        proxypath: 'https://mainsite-restapi.ele.me',  //代理地址
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false// 开启css的source map
    }
}