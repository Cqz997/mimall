// vue.config.js
const webpack = require('webpack');
module.exports = {
    // 选项...
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        port: 2222,
        open: true,
        proxy: {
            "/api": {
                target: "http://192.168.2.34:8080/",
                changeOrign: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },

    lintOnSave: false //彻底关闭eslint
}
//实打实大萨达啊