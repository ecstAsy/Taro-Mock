import { list } from './service';

export default {
  namespace: 'bookcase',
  state: {
    BookCases: '',
    current: 1,
    loadMore: true,
    BookLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
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