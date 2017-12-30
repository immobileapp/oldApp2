import ParkingData from '../../data/parking/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'

export default class ParkingCore extends ParkingData {
	park() {
		return this.createNewParking({
			isParked: true,
			arrivedAt: new Date().getTime(),
			duration: 0
		})
	}

	leave(parking) {
		return this.updateParkedState(parking.key, {
			isParked: false,
			duration: this.calculateParkingDuration(parking.arrivedAt)
		})
	}

	getParkedTimeGap(arriveTime) {
		return getTimer(this.calculateParkingDuration(arriveTime))
	}

	calculateParkingDuration(time) {
		return parseInt(new Date().getTime()) - time
	}
}