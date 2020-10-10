import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors'

export default StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    paddingLeft: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  errorMsg: {
    color: Colors.RED,
  },
})
