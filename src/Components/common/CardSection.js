import React from 'react'
import {View} from 'react-native'



let styles ={
  justifyContent: 'center',
  elevation: 1
}

class CardSection extends React.Component
{
  render()
  {
    return (
      <View style =  {this.props.style || styles} >
        {this.props.children}
      </View>

    )
  }
}

export default CardSection
