const path = require('path');
const resolve = dir => {
    return path.join(__dirname, dir)
};
/**
 *默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
 *例如 https://www.my-app.com/。
 *如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
 *如果你的应用被部署在 https://www.my-app.com/my-app/，
 *则设置 publicPath 为 /my-app/。
 *这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，
 *这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
 */
const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/' : '/';
/**
 * 引入全局的less文件
 * @param {*} rule
 */
const addStyleResource = (rule) => {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                // 需要全局导入的less,这个地方一点要写./src才行,否则会报错...
                path.resolve(__dirname, './src/assets/css/publicCss.less')
            ]
        });
};
module.exports = {
    // 选项...
    publicPath:PUBLIC_PATH,
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
        config.resolve.alias
            //配置@指向src
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            //配置_c指向src
            .set('_c', resolve('src/components'))

    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
