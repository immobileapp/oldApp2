import React from 'react'
import { View, Text, FlatList } from 'react-native'

import genericStyle from '../../genericStyle'
import historyStyle from './historyStyle'

export default class HistoryView extends React.Component {
  renderItem({ item, index }) {
    return <Text style={historyStyle.item}>{item.duration}</Text>;
  }
  // isParked
  // arrivedAt
  // duration

  render() {
    return (
      <View style={genericStyle.whiteScreen}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
