import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import './index.scss';

/**
|--------------------------------------------------
| @LoadMore
| #Component
| 加载更多组件
|--------------------------------------------------
*/

const LoadMore = ({ loading }) => {
  return (
    <View className={loading ? 'weui-loadmore' : 'weui-loadmore hide'}>
      <View className='weui-loading' />
      <View className='weui-loadmore__tips'>正在加载</View>
    </View>
  )
}

LoadMore.propTypes = {
  loading: PropTypes.bool
}

LoadMore.defaultProps = {
  loading: false
}

export default LoadMore
