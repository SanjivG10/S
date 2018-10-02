import React from 'react'
import {View} from 'react-native'




class Card extends React.Component
{
  render()
  {
    return (
      <View >
        {this.props.children}
      </View>

    )
  }
}

export default Card
