const path = require('path')

const { APP_ENV, IS_DEV } = require('./constants')

// 域名配置，记得改成自己的域名
const DOMAIN = 'https://starter.jackple.com'

// static resource domain（CDN）
const STATICDOMAIN = APP_ENV === 'prod' ? '.' : ''

module.exports = {
    // open http://localhost:devPort/
    devPort: 8090,
    // html输出路径
    index: path.resolve(__dirname, `./../dist/${APP_ENV}/index.html`),
    // 静态文件打包输出路径
    assetsRoot: path.resolve(__dirname, `./../dist/${APP_ENV}`),
    // public path，作为静态文件读取的跟路径
    assetsPublicPath: IS_DEV ? '/' : `${STATICDOMAIN}/`,
    // 静态资源输出位置
    assetsSubDirectory: 'static',
    // page Pattern for workbox 暂时不用
    // pagePattern: new RegExp(DOMAIN),
    // id you use CDN, change it!!! 暂时不用
    // assetsPattern: new RegExp(`${DOMAIN.replace(/\//g, '\\/')}\\/static`),
    // production sourceMap for monitoring
    // 打包时是否生成sourceMap，方便调试
    sourceMap: APP_ENV === 'dev' ? 'eval-source-map' : APP_ENV === 'prod' ? 'source-map' : false,
    // 打包时是否压缩css,只有在生产环境才开启
    extractCss: APP_ENV !== 'dev',
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport: process.env.npm_config_report
    bundleAnalyzerReport: false
}
