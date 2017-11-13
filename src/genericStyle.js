import { StyleSheet } from 'react-native'
import colors from '../assets/values/colors'

const { white } = colors

const generalStyle = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: white
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