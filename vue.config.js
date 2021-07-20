module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:42115',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}