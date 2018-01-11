import React from 'react'
import ConfirmationView from './confirmationView'

export default class Confirmation extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}
	
	render() {
		return <ConfirmationView/>
	}
}