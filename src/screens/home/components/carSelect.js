import React from 'react'
import { View, Text } from 'react-native'

import style from '../homeStyle'
import genericStyle from '../../../genericStyle'

export default class CarSelect extends React.Component {
	render() {
		return (
			<View style={ genericStyle.centerContent }>
				<View>
					<Text style={ style.carLabel }>
						Seu Carro
					</Text>
					<Text style={ style.carName }>
						Ford Ka
					</Text>
				</View>
			</View>
		)
	}
}