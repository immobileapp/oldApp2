import { Dimensions } from 'react-native'
import { 
	widthDimensions,
	heightDimensions,
	textDimensions
} from '../values/dimensions'

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

	Object.keys(widthDimensions).map(item => {
		converted[item] = convertVertical(widthDimensions[item])
	})

	Object.keys(heightDimensions).map(item => {
		converted[item] = convertVertical(heightDimensions[item])
	})

	Object.keys(textDimensions).map(item => {
		converted[item] = convertVertical(textDimensions[item])
	})

	return converted
}())

export default dimensions