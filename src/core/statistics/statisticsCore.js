import ParkingData from '../../data/services/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'

export default class StatisticsCore extends ParkingData {
	watchMonthStatistics(callback) {
		let month = this.getCurrentMonthTimestamp()
		this.watchMonthHistory(month, data => {
			callback({
				time: getTimer(this.summarizeHours(data))
			})
		})
	}

	getCurrentMonthTimestamp() {
		let year = new Date().getFullYear(),
			month = new Date().getMonth()

		return new Date(year, month, 1)	
	}

	summarizeHours(month) {
		return month.reduce((acc, current) =>
			acc.duration + current.duration
		)
	}
}