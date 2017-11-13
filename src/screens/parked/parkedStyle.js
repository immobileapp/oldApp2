import { StyleSheet } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'

const { parkButtonWidth } = dimensions

const style = StyleSheet.create({
	leaveButton: {
		width: parkButtonWidth
	}
})

export default style