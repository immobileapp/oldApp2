import React from 'react'
import { Text } from 'react-native'
import RedBackground from '../../../components/redBackground/redBackground'

export default class ConfirmationView extends React.Component {
	render() {
		return (
			<RedBackground>
				<Text>Confirmation</Text>
			</RedBackground>
		)
	}
}