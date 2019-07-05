import { Request, Api } from '../../http';

export const userInfo = data => Request({
  url: `${Api.user.info}`,
  method: 'GET',
  data
})

export const book = data => Request({
  url: `${Api.book.list}`,
  method: 'GET',
  data
})

export default { userInfo, book }