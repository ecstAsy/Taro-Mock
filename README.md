# 技术栈

React + Taro + Dva + Sass + ES6/ES7 + Mockjs

## 项目运行

```
# 全局安装taro脚手架
npm install -g @tarojs/cli

# 安装项目依赖
npm install

# 微信小程序
npm run dev:weapp

# H5
npm run dev:h5

# Mock
npm run mock
// 需要重新打开一个命令窗口

```

## 适配进度

- [x] 微信小程序 -- 完美适配
- [x] H5 -- 完美适配


# 业务介绍

目录结构

    ├── .temp                  // H5编译结果目录
    ├── dist                   // 小程序编译结果目录
    ├── mock                   // mock数据
    ├── config                 // Taro配置目录
    │   ├── dev.js                 // 开发时配置
    │   ├── api.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── screenshots            // 项目截图，和项目开发无关
    ├── site                   // H5静态文件（打包文件）
    ├── src                    // 源码目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── images                 // 图片文件
    │   ├── models                 // redux models
    │   ├── http                   // 请求
    │   │   ├── Api                // 请求API接口
    │   │   ├── config             // 请求配置信息
    │   │   ├── index              // 到处配置信息
    │   │   ├── Request            // 页面请求的封装
    │   ├── pages                  // 页面文件目录
    │   │   └── home
    │   │       ├── api.js           // 页面逻辑
    │   │       ├── index.scss         // 页面样式
    │   │       ├── model.js           // 页面models
    │   │       └── service.js        // 页面api
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   │    └── dva.js        // 集成dva 
    │   ├── app.js             // 入口文件
    │   └── index.html
    └── package.json

### H5请求跨域问题

.config/dev.js
```
const isH5 = process.env.CLIENT_ENV === 'h5'
// 你自己的请求域名
const HOST = '"http://192.168.18.105:3721"'; 

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


```

# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

### dva开发文档地址

> https://dvajs.com/

### 小程序开发文档

> https://mp.weixin.qq.com/debug/wxadoc/dev/

### Mock使用文档

> https://github.com/nuysoft/Mock/wiki/Getting-Started



# License

[MIT](LICENSE)
