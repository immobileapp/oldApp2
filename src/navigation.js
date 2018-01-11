import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Phone from './screens/login/phone/phone'
import Confirmation from './screens/login/confirmation/confirmation'

import Home from './screens/main/home/home'
import Parked from './screens/parked/parked'

export default class Navigation extends React.Component {

	getLoginNavigator() {
		return TabNavigator({
			'Phone': { screen: Phone },
			'Confirmation': { screen: Confirmation },
			'Parking': { screen: this.getParkingNavigator() }
		}, {
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