import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ParkingCore from '../../core/parking/parkingCore'
import formatTimer from '../../utils/formatTimer/formatTimer'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'
import BackIcon from '../../../assets/footage/backIcon'

export default class Parked extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}

	core = new ParkingCore()

	componentWillMount() {
		this.resetTimer()
		this.getTimerState()
	}

	getTimerState() {
		this.core.watchParkedState(parked => {
			parked
				? this.setAsParked(parked)
				: this.resetTimer()
		})
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

	setAsParked(current) {
		this.setState({
			parked: current,
			timer: this.core.getParkedTimeGap(current.arrivedAt),
			stopped: false
		})
	}

	handleButton() {
		this.state.stopped
			? this.core.park()
			: this.core.leave(this.state.parked)
				.then(() => {
					this.props.navigation.navigate('Home')
				})
	}

	render() {
		return (
			<View style={ genericStyle.redScreen }>
				<TouchableOpacity style={ style.backButton }
					onPress={ () => this.props.navigation.navigate('Home') }
				>
					<View style={ style.backIcon }>
						<BackIcon/>
					</View>
					<Text style={ style.backText }>
						voltar
					</Text>
				</TouchableOpacity>
				<View style={ genericStyle.centerContent }>
					<Timer style={ style.timer }
						{ ...this.state }
						bindTimer={ timer => this.setState({ timer }) }
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
			</View>
		)
	}
}