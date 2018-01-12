import { StyleSheet } from 'react-native'

import dimensions from '../../../assets/utils/convertedDimensions'

const { inputHorizontalPadding } = dimensions

const style = StyleSheet.create({
	inputWrapper: {
		width: '80%',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		paddingHorizontal: inputHorizontalPadding
	}
})

export default style