import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import RoundButton from '../../components/roundButton/roundButton'
import ParkingCore from '../../core/parking/parkingCore'

export default class Home extends React.Component {

	static navigationOptions = {
		header: null
	}

	state = { parked: false }
	core = new ParkingCore()

	componentWillMount() {
		this.getParkedState()
	}

	getParkedState() {
		this.core.watchParkedState(parked => {
			this.setState({ parked })
		})
	}

	handleParkButtonPress() {
		this.state.parked
			? this.core.leave()
			: this.core.park()
				.then(() => {
					this.props.navigation.navigate('Parked')
				})
	}

	render() {
		return (
			<View>
				<RoundButton
					onPress={ () => this.handleParkButtonPress() }
					label={ this.state.parked ? 'Sair' : 'Estacionar' }
				/>
				<TouchableOpacity 
					onPress={ () => this.props.navigation.navigate('Parked') }>
					<Text>Ver Timer</Text>
				</TouchableOpacity>
			</View>
		)
	}
}