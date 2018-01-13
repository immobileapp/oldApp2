import React from 'react'
import { Alert } from 'react-native'

import AppError from '../../../error'
import PhoneView from './phoneView'

export default class Phone extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}

	state = { phone: '+55' }

	proceed() {
		let { length } = this.state.phone

		length == 15
			? this.props.navigation.navigate('Confirmation')
			: this.handleWrongPhone()
	}

	handleWrongPhone() {
		let error = new AppError('app/invalid-phone-number')
		Alert.alert('Ops', error.getMessage())
	}

	render() {
		return (
			<PhoneView
				onChange={ phone => this.setState({ phone }) }
				proceed={ () => this.proceed() }
			/>
		)
	}
}