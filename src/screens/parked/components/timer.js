import React from 'react'
import { Text } from 'react-native'
import formatTimer from '../../../utils/formatTimer/formatTimer'

export default class Timer extends React.Component {

	componentDidMount() {
		this.handleCount()
	}

	componentDidUpdate() {
		this.handleCount()
	}

	handleCount() {
		!this.props.stopped
			? this.count(this.props.timer)
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

		if (second == 60) {
			second = 0
			minute++
		}

		if (minute == 60) {
			minute = 0
			hour++
		}

		this.props.bindTimer({
			hour, minute, second
		})
	}

	render() {
		return (
			<Text style={this.props.style}>
				{ formatTimer(this.props.timer) }
			</Text>
		)
	}
}