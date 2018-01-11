import Data from '../data'

export default class HistoryData extends Data {
  watchHistory(callback) {
    this.collection('history', true)
      .onSnapshot(snap => {
        let list = this.formatCollection(snap)
        callback({ list })
      })
  }
}
