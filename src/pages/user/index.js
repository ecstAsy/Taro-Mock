import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { PageSpace, PageItem } from '../../components';
import './index.scss';

import Account from '../../images/page-icon/account.png';
import Vip from '../../images/page-icon/vip.png';
import Ranking from '../../images/page-icon/ranking.png';
import Attention from '../../images/page-icon/attention.png';
import Note from '../../images/page-icon/note.png';
import Book from '../../images/page-icon/book.png';

export default class User extends Component {
  config = {
    navigationBarTitleText: '我的'
  }
  render() {
    return (
      <View className='page-user'>
        {/* 用户信息 */}
        <View className='user-info'>
          <View className='user-info-avator'>
            <open-data type='userAvatarUrl' />
          </View>
          <View className='user-info-edit font-regular'>
            编辑个人资料
          </View>
        </View>
        <PageSpace />
        <PageItem title='账户' Icon={Account}>
          <View className='PageItem-content'><Text>3.36</Text></View>
          <View className='PageItem-toast'>已购36本书</View>
        </PageItem>
        <PageItem title='无限卡' Icon={Vip}>
          <View className='PageItem-content'>还剩<Text>9</Text>天</View>
          <View className='PageItem-toast'>已累计为您节省0.89元</View>
        </PageItem>
        <PageSpace />
        <PageItem title='读书排行榜' Icon={Ranking}>
          <View className='PageItem-text'>本周尚未开始阅读</View>
        </PageItem>
        <PageItem title='关注' Icon={Attention}>
          <View className='PageItem-content'><Text>33</Text>人关注我</View>
          <View className='PageItem-toast'>已关注33人</View>
        </PageItem>
        <PageSpace />
        <PageItem title='笔记' Icon={Note}>
          <View className='PageItem-content'><Text>1</Text>本</View>
          <View className='PageItem-toast'>0个赞0个评论</View>
        </PageItem>
        <PageItem title='书单' Icon={Book}>
          <View className='PageItem-single'><Text>1</Text>个</View>
        </PageItem>
        <PageSpace />
      </View>
    )
  }
}