import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
|--------------------------------------------------
| @PageMask
| #Component
| 页面遮罩层
|--------------------------------------------------
*/

export default class PageMask extends Component {
  static propTypes = {
    onHide: PropTypes.func
  }
  touchMove = e => { e.stopPropagation(); }
  render() {
    const { children, onHide } = this.props;
    return (
      <View className='page-mask' onClick={onHide} onTouchMove={this.touchMove}>
        {children}
      </View>
    )
  }
}