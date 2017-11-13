import React from 'react'
import { Text } from 'react-native'

export default class Timer extends React.Component {

	componentWillMount() {
		this.updateData(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.updateData(nextProps)
	}

	updateData(props) {
		this.setState({
			timer: {
				hour: props.timer.hour || 0,
				minute: props.timer.minute || 0,
				second: props.timer.second || 0
			},
			stopped: props.stopped
		})
	}

	componentDidMount() {
		this.handleCount()
	}

	componentDidUpdate() {
		this.handleCount()	
	}

	handleCount() {
		!this.state.stopped
			? this.count(this.state.timer)
			: clearInterval(this.interval)
	}

	count(timer) {
		clearInterval(this.interval)
		this.interval = setInterval(() => {
			let { hour, minute, second } = timer
			this.calculateTimer(hour, minute, second)
		}, 1000)
	}

	calculateTimer(hour, minute, second) {
		second++

		if(second == 60) {
			second = 0
			minute++
		}

		if(minute == 60) {
			minute = 0
			hour++
		}

		this.setState({ timer: { 
			hour, minute, second 
		}})
	}

	render() {
		let { hour, minute, second } = this.state.timer
		return (
			<Text>
				{ `${ hour }:${ minute }:${ second }` }
			</Text>
		)
	}
}