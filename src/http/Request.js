import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from './config';

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
