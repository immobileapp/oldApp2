import Data from '../data'

export default class ParkingData extends Data {
	watchParkedState(callback) {
		return this.collection('historico', true)
			.where('isParked', '==', true)
			.onSnapshot(snap => {
				let result = this.formatCollection(snap)
				callback(result.length == 0 ? null : result[0])
			})
	}

	createNewParking(value) {
		return this.collection('historico', true)
			.add(value)
	}

	updateParkedState(key, value) {
		return this.doc(`historico/${ key }`, true)
			.update(value)
	}
}
