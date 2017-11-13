import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './screens/home/home'
import Parked from './screens/parked/parked'

export default class Navigation extends React.Component {
	
	getNavigator() {
		return StackNavigator({
			'Home': { screen: Home },
			'Parked' : { screen: Parked }
		})
	}

	render() {
		const Navigator = this.getNavigator()
		return <Navigator/>
	}
}