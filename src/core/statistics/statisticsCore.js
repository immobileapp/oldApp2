import ParkingData from '../../data/services/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'

export default class StatisticsCore extends ParkingData {

	watchCurrentMonthStats(callback) {
		this.watchHistory(data => {
			callback({
				time: getTimer(this.summarizeHours(data))
			})
		}, this.getMonthTimestamp())
	}

	getMonthTimestamp(desiredMonth) {
		let year = new Date().getFullYear(),
			month = desiredMonth
				? desiredMonth - 1
				: new Date().getMonth()

		return new Date(year, month, 1)
	}

	summarizeHours(month) {
		return month.reduce((acc, current) => {
			return acc + current.duration
		}, 0)
	}
}