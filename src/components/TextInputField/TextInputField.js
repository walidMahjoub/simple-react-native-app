import React, { useCallback } from 'react'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'
import styles from './TextInputFieldStyles'

const TextInputField = ({
  input: { onChange, value },
  meta: { touched, error },
  ...restProps
}) => {
  const handleTextChange = useCallback(
    text => {
      onChange(text)
    },
    [onChange],
  )
  return (
    <TextInput
      value={value}
      {...restProps}
      style={[
        { borderColor: touched && error ? Colors.RED : Colors.SILVER },
        styles.input,
      ]}
      onChangeText={handleTextChange}
    />
  )
}
TextInputField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
}

export default TextInputField
