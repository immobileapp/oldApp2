import React from 'react'
import { View, Image } from 'react-native'

import CarSelect from './components/carSelect'
import RoundButton from '../../components/roundButton/roundButton'

import style from './homeStyle'
import genericStyle from '../../genericStyle'

export default class HomeView extends React.Component {
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
							onPress={ this.props.handleButton }
							label={ this.props.parked 
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