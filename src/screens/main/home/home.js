import React from 'react'
import HomeView from './homeView'
import ParkingCore from '../../../core/parking/parkingCore'

export default class Home extends React.Component {

	static navigationOptions = {
		tabBarVisible: false,
		header: null
	}

	state = {}
	core = new ParkingCore()

	componentWillMount() {
		this.getParkedState()
	}

	getParkedState() {
		this.core.watchParkedState(parked => {
			this.setState({ parked })
			
			parked && 
				this.core.registerNotificationActionResponse(parked)
		})
	}

	handleButton() {
		this.state.parked
			? this.core.leave(this.state.parked)
			: this.handleParking()
	}

	handleParking() {
		this.core.park()
		this.props.navigation.navigate('Parked')
	}

	render() {
		return (
			<HomeView
				{ ...this.state }
				handleButton={ () => this.handleButton() }
			/>
		)
	}
}