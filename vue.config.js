module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: '10.3.141.52',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },

        }
    }
}