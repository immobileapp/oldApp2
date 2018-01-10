import React from 'react'
import { View } from 'react-native'
import style from './redBackgroundStyle'

export default class RedBackground extends React.Component {
	render() {
		return (
			<View style={[ style.background, this.props.style ]}>
				{ this.props.children }
			</View>
		)
	}
}