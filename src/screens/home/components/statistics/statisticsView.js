import React from 'react'
import { View, Image, Text } from 'react-native'

import genericStyle from '../../../../genericStyle'
import style from '../../homeStyle'

export default class StatisticsView extends React.Component {

	getHours() {
		let { hour, minute, second } = this.props.time,
			hours

		hours = second != 0 && `${ second }s`
		hours = minute != 0 && `${ minute }m`
		hours = hour != 0 && `${ hour }h`

		return hours
	}

	render() {
		return (
			<View style={ style.statistics }>
				<View style={ style.infContainer }>
					<View style={ style.inf }>
						<Image 
							style={ style.statsIcon }
							source={ require('../../../../../assets/footage/watch.png') }
						/>
						<Text style={ style.statsText }>
							{ this.props.time && this.getHours() }
						</Text>
					</View>
					<View style={ style.inf }>
						<Image 
							style={ style.statsIcon }
							source={ require('../../../../../assets/footage/coin.png') }
						/>
						<Text style={ style.statsText }>
							{ this.props.spent }
						</Text>
					</View>
				</View>
				<View style={ style.moreStats }>
					<Text style={ style.moreStatsText }>
						ver mais
					</Text>
				</View>
			</View>
		)
	}
}