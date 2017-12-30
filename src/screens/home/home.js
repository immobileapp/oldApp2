import React from 'react'
import { View, Image } from 'react-native'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

import RoundButton from '../../components/roundButton/roundButton'
import ParkingCore from '../../core/parking/parkingCore'
import CarSelect from './components/carSelect'

export default class Home extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
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
			: this.core.park()
				.then(() => {
					this.props.navigation.navigate('Parked')
				})
	}

	render() {
		return (
			<View style={ genericStyle.whiteScreen }>
				<View style={ genericStyle.minorAurea }>
					<View style={ genericStyle.darkOverlay }>
						<CarSelect/>
					</View>
					<Image style={ style.topImg }
						source={ require('../../../assets/footage/top-bg.png') }
					/>
				</View>
				<View style={ genericStyle.majorAurea }>
					<View style={ style.parkButton }>
						<RoundButton
							onPress={ () => this.handleButton() }
							label={ this.state.parked 
								? 'Deixar Vaga' 
								: 'Estacionar' 
							}
						/>
					</View>
				</View>
			</View>
		)
	}
}