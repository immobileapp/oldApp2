export default function formatTimer(timer) {
	let { hour, minute, second } = timer
	return `${ format(hour) }:${ format(minute) }:${ format(second) }`
}

function format(value) {
	return value < 10
		? '0' + value
		: value
}