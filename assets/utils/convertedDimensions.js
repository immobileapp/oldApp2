import { Dimensions } from 'react-native'
import { width, height, text } from '../values/dimensions'

const { width, height } = Dimensions.get('window'),
	  prototypeWidth = 360,
	  prototypeHeight = 640

function convertHorizontal(proto) {
	return (proto * width) / prototypeWidth;
}

function convertVertical(proto) {
	return (proto * height) / prototypeHeight;
}

const dimensions = (function () {
	let converted = {}

	Object.keys(width).map(item => {
		converted[item] = convertVertical(width[item])
	})

	Object.keys(height).map(item => {
		converted[item] = convertVertical(height[item])
	})

	Object.keys(text).map(item => {
		converted[item] = convertVertical(text[item])
	})

	return converted
}())

export default dimensions