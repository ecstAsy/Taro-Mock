import Taro from '@tarojs/taro';

//获取系统信息
const getSystemInfo = () => {
  let SystemInfo = Taro.getSystemInfoSync();
  SystemInfo.windowHeight = SystemInfo.windowHeight + 48;
  SystemInfo['RPX'] = SystemInfo.windowWidth / 375;
  SystemInfo['mobile'] = SystemInfo.model.indexOf('iPhone X');
  return SystemInfo
};
export default {
  namespace: 'common',
  state: {
    SystemInfo: getSystemInfo(),
    userId: '',
    ImageHttp: 'https://www.caryoud.com/images/',    // 图片路径前缀
    RegPhone: /^1(3|4|5|7|8|9)\d{9}$/,               // 手机号正则匹配
    TagInfo: '',
    messageNotice: false,
    messsNum: '0',
    USERINFO: '',         // 用户通用信息
    chatPage: false,
  },

  effects: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
