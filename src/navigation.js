import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Home from './screens/main/home/home'
import Parked from './screens/parked/parked'

export default class Navigation extends React.Component {

	getParentNavigator() {
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
		const Navigator = this.getParentNavigator()
		return <Navigator/>
	}
}