import Taro from '@tarojs/taro';
import { Block, View, Button } from '@tarojs/components';
import PageMask from '../PageMask';
import './index.scss';

/**
|--------------------------------------------------
| @PageModal
| #Component
| 页面弹窗
|--------------------------------------------------
*/

const PageModal = (props) => {
  const onHide = e => {
    e.stopPropagation();
  }
  const onGotUserInfo = e => {
    props.onConfirm(e)
  }
  return (
    props.visible &&
    <Block>
      <PageMask onHide={onHide}>
        <View className='page-modal'>
          <View className='page-modal-content font-regular'>
            <View className='page-modal-content-header'>{props.title}</View>
            <View className='page-modal-content-body'>
              {
                props.children
              }
            </View>
            <View className='page-modal-content-footer font-regular'>
              {
                props.modalType !== 'parts' && <Button className='cancel' onClick={props.onCancel}>取消</Button>
              }
              {
                props.modalType === 'parts' ?
                  <Button className='confirm' onClick={props.onConfirm}>{props.confirmTxt}</Button>
                  :
                  <Button className='confirm' openType='getUserInfo' onGetUserInfo={onGotUserInfo}>{props.confirmTxt}</Button>
              }
            </View>
          </View>
        </View>
      </PageMask>
    </Block>
  )
}

export default PageModal