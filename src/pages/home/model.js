import { userInfo, book } from './service';

export default {
  namespace: 'home',
  state: {
    SearchInfo: '',
    AuthModalVisible: false,
    Books: '',
    Banners: [
      'https://www.caryoud.com/images/20190410/38b1e0c8-4892-4f9c-8be3-44b4c92c08e1.jpg',
      'https://www.caryoud.com/images/20190401/326d3657-e850-4b63-882c-c36833523467.jpg',
      'https://www.caryoud.com/images/20190624/10668509-7951-4142-b378-98853c7aa26a.jpg',
      'https://www.caryoud.com/images/20190417/fedcff93-657a-4244-a4af-5074cfc9f8d3.jpeg'
    ]
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