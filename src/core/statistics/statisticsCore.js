import ParkingData from '../../data/services/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'
import formatCurrency from '../../utils/formatCurrency/formatCurrency'

export default class StatisticsCore extends ParkingData {

	watchCurrentMonthStats(callback) {
		this.watchHistory(data => {
			let time = this.summarizeHours(data)

			callback({
				time: getTimer(time),
				money: this.summarizePrice(time)
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

	summarizePrice(time) {
		let perHour = 2,
			perSecond = perHour / 3600000

		return formatCurrency(time * perSecond)
	}
}