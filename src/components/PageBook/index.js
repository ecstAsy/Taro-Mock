import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
|--------------------------------------------------
| @PageBook
| #Component
| 书单
|--------------------------------------------------
*/

const PageBook = ({ book }) => {
  return (
    <View className='page-book'>
      <View className='page-book-img'>
        <Image src={book.image} />
      </View>
      <View className='page-book-name'>{book.title}</View>
    </View>
  )
}

export default PageBook