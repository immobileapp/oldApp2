export default function getTimer(millisecond) {
	return {
		hour: getHour(millisecond),
		minute: getMinute(millisecond),
		second: getSecond(millisecond)
	}
}

function getSecond(millisecond) {
	return parseInt(millisecond / 1000)
}

function getMinute(millisecond) {
	return parseInt(getSecond(millisecond) / 60)
}

function getHour(millisecond) {
	return parseInt(getMinute(millisecond) / 60)
}