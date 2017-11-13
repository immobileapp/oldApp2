import React from 'react'
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native'

import style from './roundButtonStyle'
import genericStyle from '../../genericStyle'

export default class RoundButton extends React.Component {

	componentWillReceiveProps() {
		LayoutAnimation.configureNext(
			LayoutAnimation.Presets.spring
		)
	}

	render() {
		return (
			<TouchableOpacity onPress={ this.props.onPress }>
				<View style={[ style.button, 
					genericStyle.centerContent,
					this.props.color == 'white'
						? style.whiteButton
						: style.redButton
				]}>
					<Text style={[ style.text, 
						this.props.color == 'white'
							? style.redText
							: style.whiteText
					]}>
						{ this.props.label.toUpperCase() }
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
}