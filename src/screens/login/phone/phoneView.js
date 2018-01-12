import React from 'react'
import { Text } from 'react-native'

import genericStyle from '../../../genericStyle'

import RedBackground from '../../../components/redBackground/redBackground'
import Input from '../../../components/input/input'

export default class PhoneView extends React.Component {

	state = { phone: '' }

	render() {
		return (
			<RedBackground style={ genericStyle.centerContent }>
				<Input
					color="white"
					placeholder="Telefone"
					keyboardType="phone-pad"
					value={ this.state.phone }
					onChange={ phone => this.setState({ phone }) }
				/>
			</RedBackground>
		)
	}
}