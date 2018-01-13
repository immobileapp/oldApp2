export default class AppError {
	
	genericErrorMessage = 'Houve um problema ao realizar a operação'
	errorMessages = {
		'app/invalid-phone-number': 'Insira seu número corretamente para continuar'		
	}

	constructor(code) {
		this.code = code
	}

	getMessage() {
		return this.errorMessages[this.code] || this.genericErrorMessage
	}
}