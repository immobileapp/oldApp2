import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

import BackIcon from '../../../assets/footage/backIcon'
import style from './arrowButtonStyle'

export default class ArrowButton extends React.Component {

	getIcon(angle) {
		return (
			<View style={[ style.arrowWrapper, {
				transform: [{ rotate: `${ angle }deg` }]
			}]}>
				<BackIcon/>
			</View>
		)
	}

	render() {
		return (
			<TouchableHighlight 
				onPress={ this.props.onPress }
				underlayColor="rgba(255,255,255,0.26)"
				activeOpacity={ 0.26 }
			>
				<View style={ style.wrapper }>
					{ this.props.arrow == 'left' && this.getIcon(0) }
					<Text style={ style.label }>
						{ this.props.children }
					</Text>
					{ this.props.arrow == 'right' && this.getIcon(180) }
				</View>
			</TouchableHighlight>
		)
	}
}