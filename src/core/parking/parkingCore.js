import { DeviceEventEmitter } from 'react-native'
import PushNotification from 'react-native-push-notification'
import BackgroundTimer from 'react-native-background-timer'

import ParkingData from '../../data/services/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'
import formatTimer from '../../utils/formatTimer/formatTimer'

export default class ParkingCore extends ParkingData {
	park() {
		return this.createNewParking({
			isParked: true,
			arrivedAt: new Date(),
			duration: 0
		}).then(parking => {
			this.sendParkingNotification('1', 'bread', false)
			this.registerNotificationActionResponse(parking)

			return parking
		})
	}

	leave(parking) {
		this.stopBackgroundTimer()

		return this.updateParkedState(parking.key, {
			isParked: false,
			duration: this.calculateParkingDuration(parking.arrivedAt.getTime())
		})
	}

	getParkedTimeGap(arriveTime) {
		return getTimer(this.calculateParkingDuration(arriveTime))
	}

	calculateParkingDuration(time) {
		return parseInt(new Date().getTime()) - time
	}

	sendParkingNotification(id, message, playSound) {
		PushNotification.localNotificationSchedule({
			title: 'Você está estacionado!',
			vibrate: false,
			color: 'red',
			actions: '["Deixar Vaga"]',
			onGoing: true,
			playSound,
			message,
			date: new Date(Date.now()),
			repeatType: 'time',
			repeatTime: 1000
		})
	}

	registerNotificationActionResponse(parking) {
		PushNotification.registerNotificationActions(['Deixar Vaga'])
		DeviceEventEmitter.addListener('notificationActionReceived', e => {
			const info = JSON.parse(e.dataJSON)

			info.action == 'Deixar Vaga' &&
				this.leave(parking)
		})
	}

	dismissParkingNotification() {
		PushNotification.cancelAllLocalNotifications()
	}

	getNotificationId(id) {
		return id.replace(/[^0-9]/g, '')
	}

	startBackgroundTimer(key) {
		let millisecond = 0,
			id = this.getNotificationId(key)

		BackgroundTimer.runBackgroundTimer(() => {
			let timer = formatTimer(getTimer(millisecond))

			this.sendParkingNotification(id, timer, false)
			millisecond += 1000
		}, 1000)
	}

	stopBackgroundTimer() {
		BackgroundTimer.stopBackgroundTimer()
		this.dismissParkingNotification()
	}
}