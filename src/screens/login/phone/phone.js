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

		length == 14
			? this.handleAuth()
			: this.handleWrongPhone()
	}

	handleAuth() {
		this.props.navigation.navigate('Confirmation')
	}

	handleWrongPhone() {
		let error = new AppError('app/invalid-phone-number')
		Alert.alert('Ops', error.getMessage())
	}

	handlePhoneChange(phone) {
		this.verifyPhone(phone) &&
			this.setState({ phone })
	}

	verifyPhone(phone) {
		let { length } = phone,
			last = phone[length - 1]

		return (length >= 3 && !isNaN(last))
	}

	render() {
		return (
			<PhoneView
				{ ...this.state }
				onChange={ phone => this.handlePhoneChange(phone) }
				proceed={ () => this.proceed() }
			/>
		)
	}
}