import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Auth from './data/auth'
import Loading from './screens/loading/loading'

import Phone from './screens/login/phone/phone'
import Confirmation from './screens/login/confirmation/confirmation'

import Home from './screens/main/home/home'
import Parked from './screens/parked/parked'

export default class Navigation extends React.Component {

	componentDidMount() {
		Auth.watchAuthState(user => {
			this.setState({ user })
		})
	}

	getInitialRoute() {
		if(!this.state) return 'Loading'
		if(!this.state.user) return 'Phone'

		return 'Parking'
	}

	getLoginNavigator() {
		return TabNavigator({
			'Loading': { screen: Loading },
			'Phone': { screen: Phone },
			'Confirmation': { screen: Confirmation },
			'Parking': { screen: this.getParkingNavigator() }
		}, {
			initialRouteName: this.getInitialRoute(),
			lazy: true
		})
	}

	getParkingNavigator() {
		return TabNavigator({
			'Main': { screen: this.getMainNavigator() },
			'Parked': { screen: Parked }
		}, {
			swipeEnabled: true
		})
	}

	getMainNavigator() {
		return StackNavigator({
			'Home': { screen: Home }
		})
	}

	render() {
		const Navigator = this.getLoginNavigator()
		return <Navigator/>
	}
}