import Data from '../data'

export default class ParkingData extends Data {
	watchParkedState(callback) {
		return this.ref('state/isParked')
			[this.status]('value', snap => {
				callback(snap.val())
			})
	}

	getLastParkedTime() {
		return this.ref('state/lastParkedTime')
			.once('value')
			.then(snap => snap.val())
	}

	updateParkedState(values) {
		return this.ref('state')
			.update(values)
	}
}
