import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { SearchBar, PageModal } from '../../components';
import './index.scss'


@connect(({ home, common }) => ({ ...home, ...common }))

class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount = () => {
    this._verifyUser();
  }

  _verifyUser = async () => {
    let code = '2222'
    const UserInfo = await this.props.dispatch({
      type: 'home/info',
      payload: {
        code
      }
    })
    if (!UserInfo) {
      await this.props.dispatch({
        type: 'home/save',
        payload: {
          AuthModalVisible: true
        }
      })
      return
    }
    console.log(`UserInfo:`, UserInfo)
    const books = await this.props.dispatch({
      type: 'home/list',
      payload: {
        current: 1,
        pageSize: 10
      }
    })
    console.log(`books:`, books)
  }
  handleChange = e => {
    e.stopPropagation();
    let { value } = e.detail;
    this.props.dispatch({
      type: 'home/save',
      payload: {
        SearchInfo: value
      }
    })
  }
  handleClear = e => {
    e.stopPropagation();
    this.props.dispatch({
      type: 'home/save',
      payload: {
        SearchInfo: ''
      }
    })
  }

  handleConfirm = e => {
    console.log(e)
  }

  handleAuthCancel = () => {
    this.props.dispatch({
      type: 'home/save',
      payload: {
        AuthModalVisible: false
      }
    })
  }
  render() {
    const { SearchInfo, AuthModalVisible } = this.props;
    return (
      <View className='home-page'>
        <SearchBar
          value={SearchInfo}
          onChange={this.handleChange}
          onClear={this.handleClear}
          onConfirm={this.handleConfirm}
        />
        <View className='page-white-space' />
        <PageModal
          title='温馨提示'
          modalType='auth'
          confirmTxt='确认'
          visible={AuthModalVisible}
          onConfirm={this.handleAuthConfirm}
          onCancel={this.handleAuthCancel}
        >
          <View className='auth-modal-txt'>
            需要您本人授权,才能方便为您提供更好的服务！
          </View>
        </PageModal>
      </View >
    )
  }
}

export default Home
