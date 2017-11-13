import firebase from 'react-native-firebase'

export default class Data {

	constructor() {
		this.database = firebase.database()
		this.status = 'on'
	}

	ref(ref, isAuthed) {
		return this.database
			.ref(isAuthed ? 'uid'+ref : ref)
	}

	setOff() {
		this.status = 'off'
	}
}