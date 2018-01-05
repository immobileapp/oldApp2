import Data from '../data'

export default class ParkingData extends Data {
	watchParkedState(callback) {
		this.collection('history', true)
			.where('isParked', '==', true)
			.onSnapshot(snap => {
				let result = this.formatCollection(snap)
				callback(result.length == 0 ? null : result[0])
			})
	}

	createNewParking(value) {
		let ref = this.collection('history', true).doc()
			id = ref.id

		return ref.set(value).then(() => {
			value.key = id
			return value
		})
	}

	updateParkedState(key, value) {
		return this.doc(`history/${ key }`, true)
			.update(value)
	}

	watchHistory(callback, minDate, maxDate) {
		let ref = this.collection('history', true)

		minDate && ref.where('arrivedAt', '>=', minDate)
		maxDate && ref.where('arrivedAt', '<=', maxDate)

		ref.onSnapshot(data => {
			callback(this.formatCollection(data))
		})
	}
}
