const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // 项目支持css module
const openBrowser = require('react-dev-utils/openBrowser'); // 自动打开浏览器

const config = require('./config') // 打包相关常量配置
const constants = require('./constants'); // 环境相关常量配置
const styleRules = require('./rules/styleRules'); // webpack样式打包规则配置
const jsRules = require('./rules/jsRules'); // webpack js|ts打包规则配置
const fileRules = require('./rules/fileRules'); // webpack 静态资源打包配置
const plugins = require('./plugins'); // webpack 插件配置
const { assetsPath, resolve } = require('./utils'); // 路径解析工具函数
const optimization = require('./optimization'); // 代码压缩，分割，提取公共代码配置
require('./cleanup-folder'); // 每次打包的时候，清空对应output文件夹

const conf = {
    mode: process.env.NODE_ENV, // 开发模式
    entry: { app: ['./src/index.tsx'] }, // 项目入口
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
