import React from 'react'
import { ActivityIndicator } from 'react-native'

import RedBackground from '../../components/redBackground/redBackground'
import Aligner from '../../components/aligner/aligner'

export default class Loading extends React.Component {

	static navigationOptions = {
		tabBarVisible: false
	}

	render() {
		return (
			<RedBackground>
				<Aligner>
					<ActivityIndicator
						size="large"
						color="#ffffff"
					/>
				</Aligner>
			</RedBackground>
		)
	}
}