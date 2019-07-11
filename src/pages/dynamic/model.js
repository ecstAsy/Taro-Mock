export default {
  namespace: 'dynamic',
  state: {
    Tabs: [
      { id: 1, label: '精选' },
      { id: 2, label: '朋友在看' }
    ],
    ActiveId: 1
  },
  effects: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}