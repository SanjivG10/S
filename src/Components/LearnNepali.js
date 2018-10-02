import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View} from 'react-native'


const styles = {
  marginLeft: 20
}

class LearnNepali extends React.Component
{
  render()
  {
    return(
      <View style= {styles}>
        <Icon
          name="database"
          color="#000"
          size={30}
        />
      </View>
    )
  }
}


export default LearnNepali
