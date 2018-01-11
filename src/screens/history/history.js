import React from 'react'

import HistoryView from './historyView'
import HistoryData from '../../data/services/historyData'

export default class History extends React.Component {

  state = {}
  core = new HistoryData()

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.core.watchHistory(list => {
      this.setState({ list })
    });
  }

  render() {
    return (
      <HistoryView
        { ...this.props }
        { ...this.state.list }
        { ...this.state.result }
      />
    )
  }
}
