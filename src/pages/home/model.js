import { userInfo, book } from './service';

export default {
  namespace: 'home',
  state: {
    SearchInfo: '',
    AuthModalVisible: false
  },
  effects: {
    * info({ payload = {} }, { call }) {
      const { data } = yield call(userInfo, payload)
      return data
    },
    * list({ payload = {} }, { call }) {
      const { data } = yield call(book, payload);
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
}