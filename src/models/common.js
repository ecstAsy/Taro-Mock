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
    UserInfo: ''
  },

  effects: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
