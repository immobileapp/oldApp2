import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'

const { parkButtonWidth, roundButtonHeight } = dimensions

const style = StyleSheet.create({
	parkButton: {
		width: parkButtonWidth,
		alignSelf: 'center',
		marginTop: roundButtonHeight / -2
	}
})

export default style