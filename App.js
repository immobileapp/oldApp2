import React from 'react'
import { View } from 'react-native'
import Navigation from './src/navigation'

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigation/>        
           </View>
        )
    }
}
