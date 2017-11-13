import React from 'react'
import { View } from 'react-native'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import RoundButton from '../../components/roundButton/roundButton'
import ParkingCore from '../../core/parking/parkingCore'

export default class Home extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
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

	handleButton() {
		this.state.parked
			? this.core.leave()
			: this.core.park()
				.then(() => {
					this.props.navigation.navigate('Parked')
				})
	}

	render() {
		return (
			<View style={ genericStyle.screen }>
				<View style={ genericStyle.minorAurea }/>
				<View style={ genericStyle.majorAurea }>
					<View style={ style.parkButton }>
						<RoundButton
							onPress={ () => this.handleButton() }
							label={ this.state.parked ? 'Sair' : 'Estacionar' }
						/>
					</View>
				</View>
			</View>
		)
	}
}