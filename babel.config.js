module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            { targets: { browsers: ['chrome >= 47'] }, useBuiltIns: 'usage', corejs: 3 }
        ],
        "@babel/preset-typescript",
        "@babel/preset-react"
    ];

    const plugins = [
        ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-syntax-dynamic-import',
    ];

    return {
        presets,
        plugins
    };
}