import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ParkingCore from '../../core/parking/parkingCore'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'

export default class Parked extends React.Component {

	static navigationOptions = {
		header: null
	}

	state = {
		timer: {
			hour: 0,
			minute: 0,
			second: 0
		}
	}

	core = new ParkingCore()

	componentWillMount() {
		this.core.getParkingDuration()
			.then(timer => {
				this.setState({ timer })
			})
	}

	handleStop() {
		this.core.leave()
	}

	render() {
		return (
			<View>
				<Timer { ...this.state.timer }/>
			</View>
		)
	}
}