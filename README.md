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

config/dev.js
```
const isH5 = process.env.CLIENT_ENV === 'h5'
// 你自己的请求域名
const HOST = '"http://localhost:3721"'; 

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
src/http/Request.js

```
import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from './config';

/**
|--------------------------------------------------
| @Taro.getEnv
| 获取当前开发环境是 （WEB: H5 WEAPP: 小程序 APPLY: 支付宝）
| @特别注意
| 小程序端不会出现跨域问题，H5端则会出现跨域问题
| H5设置代理以后，一定要在请求的地方把路径写完全
| 小程序端则不需要，只要按照原来请求地址即可
|--------------------------------------------------
*/

export default (options = { method: 'GET', data: {} }) => {
  // 根据不同的环境来补全请求地址
  let Url = ''
  if (Taro.getEnv() === 'WEB') {
    Url = `/${options.url}`
  } else {
    Url = `${baseUrl}${options.url}`
  }
  return Taro.request({
    url: Url,
    data: {
      ...options.data
    },
    header: {
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    console.log(res)
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${Url} 】【接口响应：】`, res.data);
      }
      if (data.statusCode !== '200') {
        Taro.showToast({
          title: `网络错误！`,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}

```


# 文档

### Taro开发文档

[Taro](https://nervjs.github.io/taro/docs/README.html)

### dva开发文档地址

[Dva](https://dvajs.com/)

### 小程序开发文档

[小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/)

### Mock使用文档

[Mock](https://github.com/nuysoft/Mock/wiki/Getting-Started)



# License

[MIT](LICENSE)
