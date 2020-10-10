import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

import styles from './IconStyles'

const Icon = ({ source, style }) => (
  <Image style={[styles.icon, style]} source={source} />
)

Icon.defaultProps = {
  style: {},
}

Icon.propTypes = {
  source: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
}

export default Icon
