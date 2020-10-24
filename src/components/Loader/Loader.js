import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'
import Styles from './LoaderStyles'

const Loader = ({ loading, backgroundColor, size, color }) => {
  if (loading) {
    return (
      <View style={[Styles.container, { backgroundColor }]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    )
  }
  return null
}

Loader.defaultProps = {
  backgroundColor: Colors.LOADER_BACKGROUND,
  size: 'large',
  color: Colors.BLUE,
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Loader
