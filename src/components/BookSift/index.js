import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

const BookSift = ({ Type }) => {
  return (
    <View className='book-sift'>
      {
        Type === 'system' ?
          <View className='book-sift-header-system'>
            <View className='book-sift-intro'>
              诗词才女考入清华：每一个横空出世的孩子，背后都是父母的奋力托举。
        </View>
            <View className='book-sift-img'>
              <Image src='http://qiniu.library-online.cn/image3.jpg' />
            </View>
          </View>
          :
          <View className='book-sift-header-case'>
            <View className='book-case-title'>
              妖神记 · 第273章 排名的变动
        </View>
            <View className='book-case-content'>
              <View className='book-case-content-intro'>
                诗词才女考入清华：每一个横空出世的孩子，背后都是父母的奋力托举。诗词才女考入清华：每一个横空出世的孩子，背后都是父母的奋力托举。
          </View>
              <View className='book-case-content-img'>
                <Image src='http://qiniu.library-online.cn/image3.jpg' />
              </View>
            </View>
          </View>
      }


      <View className='book-sift-footer'>
        <View className='book-sift-from'>读者 #近期热门</View>
        <View className='book-sift-star'>
          <Image src={require('../../images/page-icon/star0.png')} />
          <Text>66</Text>
        </View>
      </View>
    </View>
  )
}

BookSift.propTypes = {
  Type: PropTypes.string
}

BookSift.defaultProps = {
  Type: 'system'
}

export default BookSift