import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

export default class RoundButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={ this.props.onPress }>
				<Text>{ this.props.label }</Text>
			</TouchableHighlight>
		)
	}
}