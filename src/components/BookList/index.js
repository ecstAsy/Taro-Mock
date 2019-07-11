import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
|--------------------------------------------------
| @BookList
| #Component
| 书本列表
|--------------------------------------------------
*/

const BookList = ({ book }) => {
  console.log(book)
  return (
    <View className='book-list'>
      <View className='book-list-img'>
        <Image src={book.image} />
      </View>
      <View className='book-list-info'>
        <View className='info-title font-bold'>{book.title}</View>
        <View className='info-author regular'>
          <Text>作者：{book.author}</Text>
          <Text>译：{book.translator}</Text>
        </View>
        <View className='info-tag'>
          {
            book.tags.map(item =>
              <Text key={item}>{item}</Text>
            )
          }
        </View>
        <View className='info-intro'>{book.introduction}</View>
      </View>
    </View>
  )
}

BookList.propTypes = {
  book: PropTypes.object
}

export default BookList