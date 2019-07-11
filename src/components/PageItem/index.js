import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

const PageItem = ({ children, Icon, title }) => {
  return (
    <View className='page-item'>
      <View className='page-item-left'>
        <Image src={Icon} />
        <Text className='page-item-left-title'>{title}</Text>
      </View>
      <View className='page-item-right'>
        {children}
      </View>
    </View>
  )
}

export default PageItem