import React from 'react'
import ReactNative, {AppRegistry,View, Text} from 'react-native'

import Header from './src/Components/common/Header'
import ListView from './src/Components/ListView'
import Route from './src/Components/Route'



const App  = () =>
{
    return(
          <Route />
    )
}

export default App;

AppRegistry.registerComponent('S',() => App);
