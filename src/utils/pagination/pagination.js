import Data from '../../data/data'

export default class Pagination extends Data {
	
	paginateCollection(path, callback, amount) {
		this.paginations[path] == 'ended'
			? callback(null)
			: this.getPaginationInitialQuery(path)
				.limit(amount)
				.onSnapshot(snap => {
					this.handleSnapshot(path, callback, amount, snap)
				})
	}

	getPaginationInitialQuery(path) {
		return this.paginations[path]
			? this.collection(path)
				.startAfter(this.paginations[path])
			: this.collection(path)
	}

	handleSnapshot(path, callback, amount, snap) {
		let data = this.formatCollection(snap)
		callback(data)

		this.updatePaginationState(path, snap, amount)
		data.length < amount &&
			setTimeout(() => {
				callback(null)
			}, 10)
	}

	updatePaginationState(path, snap, amount) {
		if(this.lastPaginated != path)
			this.paginations[this.lastPaginated] = null

		this.lastPaginated = path
		this.paginations[path] = snap.docs[amount - 1] || 'ended'
	}

	mergeData(oldData, newData) {
		let old = oldData || [],
			oldKeys = old.map(item => item.key)

		return newData.length == 0
			? newData
			: oldKeys.includes(newData[0].key)
				? this.updateOldOnes(old, newData)
				: [...old, ...newData]
	}

	updateOldOnes(oldData, newData) {
		return oldData.map(old =>
			newData.filter(item => item.key == old.key)[0] || old
		)
	}
}