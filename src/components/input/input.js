import React from 'react'
import { View, TextInput } from 'react-native'
import style from './inputStyle'

export default class Input extends React.Component {

	colors = {
		'white': {
			text: 'white',
			border: 'white',
			placeholder: 'rgba(255,255,255,0.35)'
		}
	}

	render() {
		let { color } = this.props

		return (
			<View style={[ style.inputWrapper, {
				borderBottomColor: this.colors[color].border
			}]}>
				<TextInput
					{ ...this.props }
					style={{ color: this.colors[color].text }}
					placeholderTextColor={ this.colors[color].placeholder }
					underlineColorAndroid="transparent"
					value={ this.props.value }
					onChangeText={ text => this.props.onChange(text) }
				/>
			</View>
		)
	}
}