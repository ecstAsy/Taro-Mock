import { list } from './service';

export default {
  namespace: 'bookcase',
  state: {
    BookCases: '',
    current: 1,
    loadMore: true
  },
  effects: {
    * list({ payload = {} }, { call }) {
      const { data } = yield call(list, payload);
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}