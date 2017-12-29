import firebase from 'react-native-firebase'

export default class Data {

	firestore = firebase.firestore()
	paginations = {}

	doc(path, auth) {
		return this.firestore.doc(this.checkAuth(path, auth))
	}

	collection(path, auth) {
		return this.firestore.collection(this.checkAuth(path, auth))
	}

	checkAuth(path, auth) {
		return auth
			? `users/guWSjnpN8dWGl4KqNNee/${ path }`
			: path
	}

	formatCollection(snap) {
		let list = []

		snap.forEach(item => {
			list.push({
				key: item.id,
				...item.data()
			})
		})

		return list
	}
}