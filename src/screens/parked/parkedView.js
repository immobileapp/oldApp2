import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import genericStyle from '../../genericStyle'
import style from './parkedStyle'

import Timer from './components/timer'
import RoundButton from '../../components/roundButton/roundButton'
import BackIcon from '../../../assets/footage/backIcon'

export default class ParkedView extends React.Component {
  render() {
    return (
      <View style={genericStyle.redScreen}>
        <TouchableOpacity style={style.backButton}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <View style={style.backIcon}>
            <BackIcon />
          </View>
          <Text style={style.backText}>
            voltar
					</Text>
        </TouchableOpacity>
        <View style={genericStyle.centerContent}>
          <Timer style={style.timer}
            { ...this.props }
            bindTimer={this.props.bindTimer}
          />
          <View style={style.leaveButton}>
            <RoundButton
              color="white"
              label={
                this.props.stopped
                  ? 'Estacionar'
                  : 'Deixar Vaga'
              }
              onPress={this.props.handleButton}
            />
          </View>
        </View>
      </View>
    )
  }
}
