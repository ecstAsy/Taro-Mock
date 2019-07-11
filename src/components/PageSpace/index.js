import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
|--------------------------------------------------
| @PageSpace
| #Component
| 页面留白间隙 （ 自定义 @Height @BgColor )
|--------------------------------------------------
*/

const PageSpace = ({ Height, BgColor }) => {
  return (
    <View className='page-space' style={{ height: `${Height}px`, backgroundColor: `${BgColor}` }} />
  )
}

PageSpace.propTypes = {
  Height: PropTypes.number,
  BgColor: PropTypes.string
}

PageSpace.defaultProps = {
  Height: 10,
  BgColor: '#f6f6f6'
}

export default PageSpace