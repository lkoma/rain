const path = require('path');
const interfaces = require('os').networkInterfaces();

const host = Object.values(interfaces).reduce((pre, cur) => {
    const alias = cur.filter(item => item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal)[0];
    if (alias) {
        pre = alias.address;
    }
    return pre;
});
const port = 8888;

module.exports = {
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        devServer: {
            port,
            host,
            overlay: {
                errors: true
            },
            headers: { 'Access-Control-Allow-Origin': '*' },
            historyApiFallback: {
                index: '/index.html'
            },
            // proxy: {
            //     '/api': {
            //         target: 'http://wwj.sdo.com/',
            //         headers: {},
            //         secure: false,
            //         changeOrigin: true
            //     }
            // },
            quiet: false,
            hot: true
        },
        devtool: 'cheap-module-eval-source-map',
        cssSourceMap: false
    },

    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report,
        optimizeJs: true
    }
};
