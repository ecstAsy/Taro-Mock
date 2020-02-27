import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Block } from '@tarojs/components';
import { PageSpace, UserComments, BookSift } from '../../components';
import './index.scss';

@connect(({ dynamic }) => ({ ...dynamic }))

export default class Dynamic extends Component {

  config = {
    navigationBarTitleText: '动态'
  }

  componentDidMount = () => {
    const data = this.props.dispatch({
      type: 'dynamic/sift',
      payload: {
        current: 1,
        pageSize: 6
      }
    })
    console.log(data)
  }

  handleTab = async id => {
    await Taro.showToast({
      icon: 'loading',
      title: '加载中...',
      duration: 10000
    });
    await this.props.dispatch({
      type: 'dynamic/save',
      payload: {
        ActiveId: id
      }
    })
    await Taro.hideToast();
  }

  renderTab = (ActiveId) => {
    const { Tabs } = this.props;
    return (
      <View className='dynamic-tab'>
        {
          Tabs.map(item =>
            <View
              className={`${ActiveId}` === `${item.id}` ? `dynamic-tab-item active` : `dynamic-tab-item`}
              key={item.id}
              onClick={this.handleTab.bind(this, item.id)}
            >
              {item.label}
            </View>
          )
        }

      </View>
    )
  }

  renderFriendDynamic = () => {
    return (
      <View className='friend-dynamic'>
        {
          [0, 1, 2, 3, 4, 5, 6].map(item =>
            <Block key={item}>
              <PageSpace />
              <UserComments />
            </Block>
          )
        }
      </View>
    )
  }

  renderSift = () => {
    return (
      <View className='sift'>
        <PageSpace />
        {
          [1, 2, 3, 4, 5, 6, 7, 9, 10, 34, 56].map(item =>
            <BookSift key={item} Type={item % 5 === 0 ? 'case' : 'system'} />
          )
        }

      </View>
    )
  }

  render() {
    const { ActiveId } = this.props;
    console.log(ActiveId)
    return (
      <View className='page-dynamic'>
        <Block>
          {
            this.renderTab(ActiveId)
          }
        </Block>
        <PageSpace />
        <PageSpace />
        <PageSpace />
        <PageSpace />
        {
          ActiveId === 1 ? this.renderSift() : this.renderFriendDynamic()
        }
      </View>
    )
  }
}