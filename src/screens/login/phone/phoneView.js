import React from 'react'
import { Text } from 'react-native'

import genericStyle from '../../../genericStyle'

import RedBackground from '../../../components/redBackground/redBackground'
import Input from '../../../components/input/input'
import ArrowButton from '../../../components/arrowButton/arrowButton'

export default class PhoneView extends React.Component {
	render() {
		return (
			<RedBackground style={ genericStyle.centerContent }>
				<Input
					color="white"
					placeholder="Telefone"
					maxLength={ 14 }
					keyboardType="phone-pad"
					value={ this.props.phone }
					onChange={ this.props.onChange }
				/>
				<ArrowButton 
					arrow="right"
					onPress={ this.props.proceed }
				>
					CONTINUAR
				</ArrowButton>
			</RedBackground>
		)
	}
}