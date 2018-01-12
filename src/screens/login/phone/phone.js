import React from 'react'
import PhoneView from './phoneView'

export default class Phone extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}

	state = { phone: '' }

	render() {
		return (
			<PhoneView
				onChange={ phone => this.setState({ phone }) }
			/>
		)
	}
}