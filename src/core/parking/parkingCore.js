import ParkingData from '../../data/parking/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'

export default class ParkingCore extends ParkingData {
	
	park() {
		return this.updateParkedState({
			isParked: true,
			lastParkedTime: new Date().getTime(),
			lastParkingDuration: 0
		})
	}

	leave() {
		return this.getLastParkedTime()
			.then(time => {
				this.updateParkedState({
					isParked: false,
					lastParkingDuration: this.calculateParkingDuration(time)
				})
			})
	}

	getParkingDuration() {
		return this.getLastParkedTime()
			.then(time =>
				getTimer(this.calculateParkingDuration(time))
			)
	}

	calculateParkingDuration(time) {
		return parseInt(new Date().getTime()) - time
	}
}