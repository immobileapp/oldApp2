export default class FirebaseError {
	
	genericErrorMessage = 'Houve um problema ao realizar a operação'
	errorMessages = {
		'auth/invalid-phone-number': 'O número informado não é valido',
		'auth/captcha-check-failed': 'O código informado não é valido',
		'auth/quota-exceeded': 'Houve um problema ao enviar o SMS, tente novamente mais tarde',
		'auth/network-request-failed': 'Houve um problema com a rede, tente novamente',
		
	}

	constructor(code) {
		this.code = code
	}

	getMessage() {
		return this.errorMessages(this.code) || this.genericErrorMessage
	}
}