import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { PageModal, PageSpace, SearchBar } from '../../components';
import './index.scss'


@connect(({ home, common }) => ({ ...home, ...common }))

class Home extends Component {

  config = {
    navigationBarTitleText: '发现'
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
    const Books = await this.props.dispatch({
      type: 'home/list',
      payload: {
        current: 1,
        pageSize: 10
      }
    })
    await Promise.all([
      this.props.dispatch({
        type: 'common/save',
        payload: {
          UserInfo
        }
      }),
      this.props.dispatch({
        type: 'home/save',
        payload: {
          Books
        }
      })
    ])
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

  handleTouchMove = () => {

  }


  render() {
    const { AuthModalVisible, SystemInfo, Banners } = this.props;
    console.log(SystemInfo)
    return (
      <View className='home-page' onTouchMove={this.handleTouchMove}>
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

        <SearchBar />

        <PageSpace Height={50} BgColor='#FFF' />

        <View className='home-page-swiper' style={{ height: `${SystemInfo.windowHeight * 0.75}px` }}>
          <Swiper className='Swiper' nextMargin='30px' previousMargin='30px'>
            {
              Banners.map(item =>
                <SwiperItem key={item} className='SwiperItem'>
                  <Image src={item} />
                </SwiperItem>
              )
            }
          </Swiper>
        </View>

      </View >
    )
  }
}

export default Home
