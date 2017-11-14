import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ParkingCore from '../../core/parking/parkingCore'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'

export default class Parked extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}

	core = new ParkingCore()

	componentWillMount() {
		this.resetTimer()
		this.getTimerState()
	}

	resetTimer() {
		this.setState({
			timer: {
				hour: 0,
				minute: 0,
				second: 0
			},
			stopped: true
		})
	}

	getTimerState() {
		this.core.watchParkedState(parked => {
			parked
				? this.retrieveTimer()
				: this.resetTimer()
		})
	}

	retrieveTimer() {
		this.core.getParkingDuration()
			.then(timer => {
				this.setState({ 
					timer: timer,
					stopped: false
				})
			})
	}

	handleButton() {
		this.state.stopped
			? this.core.park()
			: this.core.leave()
				.then(() => {
					this.props.navigation.navigate('Home')
				})
	}

	render() {
		return (
			<View style={[ genericStyle.centerContent, genericStyle.redScreen ]}>
				<Timer style={ style.timer }
					{ ...this.state }
				/>
				<View style={ style.leaveButton }>
					<RoundButton 
						color="white"
						label={ this.state.stopped 
							? 'Estacionar' 
							: 'Deixar Vaga' 
						}
						onPress={ () => this.handleButton() }
					/>
				</View>
			</View>
		)
	}
}