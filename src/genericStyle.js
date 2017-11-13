import { StyleSheet } from 'react-native'
import colors from '../assets/values/colors'

const { white, darkRed } = colors

const generalStyle = StyleSheet.create({
	whiteScreen: {
		flex: 1,
		backgroundColor: white
	},
	redScreen: {
		flex: 1,
		backgroundColor: darkRed
	},
	majorAurea: {
		flex: 0.618
	},
	minorAurea: {
		flex: 0.382
	},
	centerContent: {
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default generalStyle