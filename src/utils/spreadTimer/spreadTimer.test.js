import getTimer from './spreadTimer'

test('spread milliseconds and sum minutes if second > 60', () => {
	expect(getTimer(70000)).toEqual({
		hour: 0,
		minute: 1,
		second: 10
	})
})

test('spread milliseconds and sum hours if minutes > 60', () => {
	expect(getTimer(7385000)).toEqual({
		hour: 2,
		minute: 3,
		second: 5
	})
})

test('if minutes are exact, expect seconds to be 0', () => {
	expect(getTimer(120000)).toEqual({
		hour: 0,
		minute: 2,
		second: 0
	})	
})

test('if hour is exact, expect minutes to be 0', () => {
	expect(getTimer(7200000)).toEqual({
		hour: 2,
		minute: 0,
		second: 0
	})	
})