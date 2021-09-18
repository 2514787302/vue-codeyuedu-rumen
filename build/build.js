// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'
// 导进各模块
var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()
/*
    rm方法删除dist/static文件夹
        若删除中有错误则抛出异常并终止程序
        若没有错误则继续执行，构建webpack
            结束动画
            若有异常则抛出
            标准输出流，类似于console.log
*/

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,  // 增加控制台颜色开关
        modules: false,  // 是否增加内置模块信息
        children: false, 
        chunks: false,  // 允许较少的输出
        chunkModules: false   // 不将内置模块信息加到包信息
    }) + '\n')   // 编译过程持续打印 换行
})