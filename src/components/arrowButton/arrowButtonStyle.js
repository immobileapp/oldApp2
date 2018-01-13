import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'
import colors from '../../../assets/values/colors'

const { 
	arrowButtonPadding,
	normalText
} = dimensions

const { white } = colors

const style = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: arrowButtonPadding
	},
	label: {
		color: white
	},
	arrowWrapper: {
		padding: arrowButtonPadding
	}
})

export default style