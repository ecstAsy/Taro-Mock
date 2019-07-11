import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.scss';

const UserComments = () => {
  const avator = 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eotI8uODofXhiblWJesa8BcaIfqN7LIY8BwQSsJ8DA9J8wjvmIQAEkSLOtt6ac0Y1ibvEickIpicGRWxQ/132';
  return (
    <View className='user-comments'>
      <View className='user-comments-header'>
        <View className='comments-avator'>
          <Image src={avator} />
        </View>
        <View className='comments-name'>安君之</View>
        <View className='comments-time'>7月11日 11:07</View>
      </View>
      <View className='user-comments-content'>
        <View className='content-comments'>
          在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。
        </View>
        <View className='content-book-info'>
          <View className='book-intro'>
            在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。
           </View>
          <View className='book-info'>
            <View className='book-info-img'>
              <Image src='http://qiniu.library-online.cn/image10.jpeg' />
            </View>
            <View className='book-info-auther'>
              <Text>活着（葛优 巩俐主演）</Text>
              <Text>余华</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='user-comments-footer'>
        <View className='share'>
          <Image src={require('../../images/page-icon/share0.png')} />
        </View>
        <View className='star'>
          <Image src={require('../../images/page-icon/star0.png')} />
        </View>
        <View className='info'>
          <Image src={require('../../images/page-icon/info0.png')} />
        </View>
      </View>
    </View>
  )
}

export default UserComments