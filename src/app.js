import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Home from './pages/home'
import dva from './utils/dva';
import models from './models';
import './app.scss'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/home/index',        // 首页
      'pages/bookcase/index',    // 书架
      'pages/dynamic/index',     // 动态
      'pages/user/index',        // 用户
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/home/index",
          text: "发现",
          iconPath: "./images/tab/home.png",
          selectedIconPath: "./images/tab/home_active.png",
        }, {
          pagePath: "pages/bookcase/index",
          text: "书架",
          iconPath: "./images/tab/bookcase.png",
          selectedIconPath: "./images/tab/bookcase_active.png",
        }, {
          pagePath: "pages/dynamic/index",
          text: "动态",
          iconPath: "./images/tab/dynamic.png",
          selectedIconPath: "./images/tab/dynamic_active.png",
        }, {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./images/tab/user.png",
          selectedIconPath: "./images/tab/user_active.png",
        }
      ],
      color: '#707070',
      selectedColor: '#3288FE',
      backgroundColor: '#fff',
      borderStyle: 'black'
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
