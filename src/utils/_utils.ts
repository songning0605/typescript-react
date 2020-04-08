/**
 * 数字添加千分位分隔符
 * @param {*} value 原始值
 */
export const thousandSeparator = <T>(value: T) => {
  if (value === null || value === undefined || Number.isNaN(+value)) {
    return value;
  }

  // 执行分隔动作
  const re = /\d{1,3}(?=(\d{3})+$)/g;
  return `${value}`.replace(
    /^[+-]?(\d+)((\.\d+)?)$/,
    (s, s1, s2) => s1.replace(re, "$&,") + s2
  );
};
