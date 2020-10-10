import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 4,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: Colors.SILVER,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
})
