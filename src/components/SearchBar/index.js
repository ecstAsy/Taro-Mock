import Taro from '@tarojs/taro';
import { View, Icon, Input } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
|--------------------------------------------------
| @SearchBar
| #Component
| 搜索框组件
|--------------------------------------------------
*/

const SearchBar = ({ value, disabled, onClick, onChange, onClear, onConfirm }) => {
  const handleClick = e => {
    e.stopPropagation();
    if (disabled) {
      onClick()
    }
  }
  return (
    <View className='top-search' onClick={e => handleClick(e)}>
      <View className='top-search-content'>
        <View className='top-search-icon'>
          <Icon size='22' type='search' />
        </View>
        <View className='top-search-input'>
          <Input
            disabled={disabled}
            value={value}
            placeholder='搜索'
            type='text'
            confirmType='search'
            onInput={e => onChange(e)}
            onConfirm={e => onConfirm(e)}
          />
        </View>
        <View className='top-search-close'>
          {
            (!disabled && value) && <Icon size='20' type='clear' onClick={e => onClear(e)} />
          }
        </View>
      </View>
    </View>
  )
}

SearchBar.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onConfirm: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string
}

SearchBar.defaultProps = {
  disabled: false,
  value: ''
}

export default SearchBar