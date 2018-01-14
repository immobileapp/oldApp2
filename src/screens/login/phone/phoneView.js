import React from 'react'
import { Text } from 'react-native'

import RedBackground from '../../../components/redBackground/redBackground'
import Container from '../../../components/container/container'
import Aligner from '../../../components/aligner/aligner'

import Input from '../../../components/input/input'
import ArrowButton from '../../../components/arrowButton/arrowButton'

export default class PhoneView extends React.Component {
	render() {
		return (
			<RedBackground>
				<Container>
					<Aligner 
						horizontally="center"
						vertically="bottom"
					>
						<Input
							color="white"
							placeholder="Telefone"
							maxLength={ 14 }
							keyboardType="phone-pad"
							value={ this.props.phone }
							onChange={ this.props.onChange }
						/>
					</Aligner>
					<Aligner
						horizontally="right"
						vertically="bottom"
					>
						<ArrowButton 
							style={{ alignSelf: 'flex-end' }}
							arrow="right"
							onPress={ this.props.proceed }
						>
							CONTINUAR
						</ArrowButton>
					</Aligner>
				</Container>
			</RedBackground>
		)
	}
}