import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'
import colors from '../../../assets/values/colors'

const { parkButtonWidth, timerText } = dimensions,
	  { white } = colors

const style = StyleSheet.create({
	leaveButton: {
		width: parkButtonWidth
	},
	timer: {
		fontWeight: 'bold',
		fontSize: timerText,
		color: white
	}
})

export default style