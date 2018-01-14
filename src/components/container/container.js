import React from 'react'
import { View } from 'react-native'
import dimensions from '../../../assets/utils/convertedDimensions'

export default class Container extends React.Component {

	style = {
		flex: 1,
		paddingHorizontal: dimensions.sideMargin,
		paddingVertical: dimensions.sideMargin
	}

	getStyle() {
		let { padding } = this.props,
			containerStyle = this.style

		if(padding == 'horizontal')
			containerStyle['paddingVertical'] = null

		if(padding == 'vertical')
			containerStyle['paddingHorizontal'] = null

		return containerStyle
	}

	render() {
		return (
			<View style={ this.getStyle() }>
				{ this.props.children }
			</View>
		)
	}
}