import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { SearchBar, PageBook, PageSpace, LoadMore } from '../../components';
import './index.scss';

@connect(({ common, bookcase, loading }) => ({ ...common, ...bookcase, ...loading }))

export default class BookCase extends Component {
  config = {
    navigationBarTitleText: '书架'
  }
  componentDidMount = () => {
    this._getLists({});
  }
  _getLists = async ({ current = 1 }) => {
    let { UserInfo, BookCases } = this.props;
    const data = await this.props.dispatch({
      type: 'bookcase/list',
      payload: {
        current,
        pageSize: 12,
        userId: UserInfo.userId
      }
    })
    await this.props.dispatch({
      type: 'bookcase/save',
      payload: {
        BookCases: current === 1 ? data.lists : [...BookCases, ...data.lists],
        current: current + 1,
        loadMore: current !== data.pageInfo.maxCurrent
      }
    })
  }
  onReachBottom() {
    const { current, loadMore } = this.props;
    if (!loadMore) return;
    this._getLists({ current });
  }

  render() {
    const { BookCases, effects } = this.props;
    return (
      <View className='page-book-case'>
        <SearchBar />
        <PageSpace Height={50} BgColor='#fff' />
        <View className='page-book-case-array'>
          {
            BookCases && BookCases.map(item =>
              <PageBook book={item} key={item.id} />
            )
          }
        </View>
        <LoadMore loading={effects['bookcase/list']} />
      </View>
    )
  }
}