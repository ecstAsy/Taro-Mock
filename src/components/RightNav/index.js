import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

const RightNav = () => {
  const handleClick = (e, item) => {
    console.log(e, item)
  }
  return (
    <View className='rightNav'>
      {
        ['A', 'B', 'C', 'D', 'E', 'F'].map(item => (
          <View
            key={item}
            className={item === 'A' ? 'active zimu' : 'zimu'}
            onClick={(e) => handleClick(e, item)}
          >
            {item}
          </View>
        ))
      }
    </View>
  )
}

export default RightNav