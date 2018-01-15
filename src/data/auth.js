import firebase from 'react-native-firebase'
import FirebaseError from './error'

class Auth {

	auth = firebase.auth()

	watchAuthState(callback) {
		this.auth.onAuthStateChanged(user => {
			callback(user)
		})
	}

	login(phone) {
		return this.auth.signInWithPhoneNumber(phone)
			.then(result => {
				this.confirmationResult = result
			})
			.catch(error => {
				throw new FirebaseError(error.code)
			})
	}

	confirmLogin(code) {
		return this.confirmationResult.confirm(code)
			.then(result => {
				return result.user
			})
			.catch(error => {
				throw new FirebaseError(error.code)
			})
	}

	logout() {
		return this.auth.signOut()
	}
}

export default new Auth()