// 是否开发环境
const IS_DEV = process.env.NODE_ENV !== "production";
// 当前环境
const APP_ENV = process.env.APP_ENV || "prod";
// babel-loader要解析的文件名扩展
const FILE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

module.exports = {
  IS_DEV,
  APP_ENV,
  FILE_EXTENSIONS
};
