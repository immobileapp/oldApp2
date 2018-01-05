import React from 'react'
import ParkedView from './parkedView'

import ParkingCore from '../../core/parking/parkingCore'
import formatTimer from '../../utils/formatTimer/formatTimer'

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

		this.core.registerNotificationActionResponse(current)
	}

	handleButton() {
		this.state.stopped
			? this.core.park()
			: this.handleLeave()
	}

	handleLeave() {
		this.core.leave(this.state.parked)
		this.props.navigation.navigate('Home')
	}

	render() {
		return (
			<ParkedView
				{ ...this.props }
				{ ...this.state }
				bindTimer={ timer => this.setState({ timer })}
				handleButton={ () => this.handleButton() }
			/>
		)
	}
}