import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors'

export default StyleSheet.create({
  sendMessageWrapper: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.SILVER,
    paddingHorizontal: 20,
  },
  messageSenderContainer: {
    backgroundColor: Colors.BACKGROUND,
    flexDirection: 'row',
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
  },
  inputIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 40,
    height: 40,
    backgroundColor: Colors.GRAY,
    borderWidth: StyleSheet.hairlineWidth,
  },
})
