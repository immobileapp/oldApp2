import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'
import colors from '../../../assets/values/colors'

const { 
	parkButtonWidth, 
	roundButtonHeight,
	largeText,
	extraLargeText,
	changeButtonWidth,
	sideMargin,
	mediumText
} = dimensions

const { white, darkGrey } = colors

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
	},
	carChangeButtonWrapper: {
		alignSelf: 'flex-end',
		padding: changeButtonWidth,
		marginRight: changeButtonWidth * -1.4,
		marginTop: changeButtonWidth * -2.1
	},
	carChangeButton: {
		width: changeButtonWidth,
		height: changeButtonWidth,
		backgroundColor: white,
		borderRadius: changeButtonWidth / 2,
		elevation: 10
	},
	greetings: {
		display: 'flex',
		marginTop: roundButtonHeight / 2,
		marginBottom: roundButtonHeight / 4,
		alignItems: 'center'
	},
	greetingsText: {
		fontSize: mediumText,
		color: darkGrey
	},
	greetingsTextBold: {
		fontWeight: 'bold'
	},
	greetingsTextLight: {
		fontWeight: '100'
	}
})

export default style