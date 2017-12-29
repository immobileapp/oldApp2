export default function getTimer(millisecond) {
	return {
		hour: get(getHour(millisecond)),
		minute: get(getMinute(millisecond)),
		second: get(getSecond(millisecond))
	}
}

function get(calc) {
	return parseInt(calc)
}

function getSecond(millisecond) {
	return (millisecond / 1000) % 60
}

function getMinute(millisecond) {
	return Math.floor(((millisecond / 1000) % 3600) / 60)
}

function getHour(millisecond) {
	return Math.floor((millisecond / 1000) / 3600)
}