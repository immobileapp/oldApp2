import React from 'react'
import { TabNavigator } from 'react-navigation'

import Home from './screens/home/home'
import Parked from './screens/parked/parked'
import History from './screens/history/history'

export default class Navigation extends React.Component {

  setScreen(component) {
    return {
      screen: component, navigationOptions: { tabBarVisible: false }
    }
  }

  getNavigator() {
    return TabNavigator({
      'Home': this.setScreen(Home),
      'Parked': this.setScreen(Parked),
      'History': this.setScreen(History)
    }, {
        swipeEnabled: true
      })
  }

  render() {
    const Navigator = this.getNavigator()
    return <Navigator />
  }
}
