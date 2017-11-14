import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'
import colors from '../../../assets/values/colors'

const { 
	parkButtonWidth, 
	roundButtonHeight,
	largeText,
	extraLargeText
} = dimensions

const { white } = colors

const style = StyleSheet.create({
	topImg: {
		flex: 1,
		width: undefined,
		height: undefined,
		resizeMode: 'cover'
	},
	parkButton: {
		width: parkButtonWidth,
		alignSelf: 'center',
		marginTop: roundButtonHeight / -2,
		zIndex: 2
	},
	carLabel: {
		fontSize: largeText,
		fontStyle: 'italic',
		color: white
	},
	carName: {
		marginTop: extraLargeText / -3,
		fontSize: extraLargeText,
		fontWeight: 'bold',
		color: white
	}
})

export default style