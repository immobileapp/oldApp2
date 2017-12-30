import { DeviceEventEmitter } from 'react-native'
import PushNotification from 'react-native-push-notification'

import ParkingData from '../../data/parking/parkingData'
import getTimer from '../../utils/spreadTimer/spreadTimer'

export default class ParkingCore extends ParkingData {
	park() {
		return this.createNewParking({
			isParked: true,
			arrivedAt: new Date().getTime(),
			duration: 0
		})
	}

	leave(parking) {
		return this.updateParkedState(parking.key, {
			isParked: false,
			duration: this.calculateParkingDuration(parking.arrivedAt)
		})
	}

	getParkedTimeGap(arriveTime) {
		return getTimer(this.calculateParkingDuration(arriveTime))
	}

	calculateParkingDuration(time) {
		return parseInt(new Date().getTime()) - time
	}

	sendParkingNotification(id, message, playSound) {
		PushNotification.localNotification({
			id: this.getNotificationId(id),
			title: 'Você está estacionado!',
			vibrate: false,
			color: 'red',
			actions: '["Deixar Vaga"]',
			playSound,
			message
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
}