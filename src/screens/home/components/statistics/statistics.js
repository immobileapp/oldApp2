import React from 'react'
import StatisticsView from './statisticsView'
import StatisticsCore from '../../../../core/statistics/statisticsCore'

export default class Statistics extends React.Component {

	state = {}
	core = new StatisticsCore()

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		this.core.watchCurrentMonthStats(stats => {
			this.setState({ stats })
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