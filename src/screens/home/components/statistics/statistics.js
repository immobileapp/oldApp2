import React from 'react'
import StatisticsView from './statisticsView'
import StatisticsCore from '../../../../core/statistics/statisticsCore'
import getTimer from '../../../../utils/spreadTimer/spreadTimer'

export default class Statistics extends React.Component {

	state = {}
	core = new StatisticsCore()

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		this.core.watchCurrentMonthStats(stats => {
			console.error(stats)
		})
	}

	render() {
		return (
			<StatisticsView
				{ ...this.state.stats }
			/>
		)
	}
}