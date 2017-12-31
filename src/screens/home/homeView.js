import React from 'react'
import { View, Image, Text } from 'react-native'

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
							label={ 
								this.props.parked 
									? 'Deixar Vaga' 
									: 'Estacionar' 
							}
						/>
					</View>
					<View style={ style.greetings }>
						<Text style={ style.greetingsText }>
							Olá, seja&nbsp;
							<Text style={[ style.greetingsText, style.greetingsTextBold ]}>
								bem vindo!
							</Text>
						</Text>
						<Text style={[ style.greetingsText, style.greetingsTextLight ]}>
							Neste&nbsp;
							<Text style={[ style.greetingsText, style.greetingsTextBold ]}>
								mês
							</Text>
							, você ja usou:
						</Text>
					</View>
				</View>
			</View>
		)
	}
}