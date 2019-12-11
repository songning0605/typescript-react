// 项目支持css module
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// 自动打开浏览器
const openBrowser = require('react-dev-utils/openBrowser')

const config = require('./config')
const constants = require('./constants')
const styleRules = require('./rules/styleRules')
const jsRules = require('./rules/jsRules')
const fileRules = require('./rules/fileRules')
const plugins = require('./plugins')
const { assetsPath, resolve } = require('./utils')
const optimization = require('./optimization')
require('./cleanup-folder')

const conf = {
    // 开发模式
    mode: process.env.NODE_ENV,
    // 项目入口
    entry: { app: ['./src/index.tsx'] },
    // 打包输出路径
    output: {
        path: config.assetsRoot,
        // 开发环境下不使用hash模式
        filename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[chunkhash:8].js'),
        chunkFilename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[id].[chunkhash:8].js'),
        publicPath: config.assetsPublicPath,
        // pathinfo: false
    },
    resolve: {
        // 被解析的文件扩展名
        extensions: constants.FILE_EXTENSIONS,
        // resolve中的plugins有什么作用？
        plugins: [
            new TsconfigPathsPlugin({
                configFile: resolve('tsconfig.webpack.json'),
                extensions: constants.FILE_EXTENSIONS
            })
        ],
        // alias: { mobx: resolve('node_modules/mobx/lib/mobx.es6.js') }
    },
    module: {
        rules: [...styleRules, ...jsRules, ...fileRules]
    },
    plugins,
    optimization,
    stats: 'minimal',
    devtool: config.sourceMap
}
// todo 测试环境下启动服务
if (process.env.NODE_ENV === 'development') {
    conf.devServer = {
        port: config.devPort, // 端口后自定义配置
        hot: true, // 开启热加载
        disableHostCheck: true, // 没搞懂
        host: '0.0.0.0', // 域名
        historyApiFallback: true, // 解决刷新404问题
        after: function() {
            // 根据配置的端口，自动打开浏览器
            openBrowser(`http://localhost:${config.devPort}`)
        },
        // stats: 'errors-only'
    }
}

module.exports = conf
