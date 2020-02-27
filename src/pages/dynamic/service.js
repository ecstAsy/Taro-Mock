import { Request, Api } from '../../http';

export const list = data => Request({
  url: `${Api.dynamic.list}`,
  method: 'GET',
  data
})

export default { list }