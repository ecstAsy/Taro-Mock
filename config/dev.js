const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://localhost:3721"'; // 你自己的请求域名

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : JSON.parse(HOST)
  },
  weapp: {},
  h5: {
    devServer: {
      // 设置代理来解决 H5 请求的跨域问题
      proxy: {
        '/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/': '/'
          },
          changeOrigin: true
        },
      }
    }
  }
}
