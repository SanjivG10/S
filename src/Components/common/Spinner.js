import React from 'react'
import {ActivityIndicator, View} from 'react-native'


const styles =
{
  flex: 1,
  alignSelf: 'center',
  justifyContent:'center'
}

class Spinner extends React.Component
{
  render()
  {
    return(
      <View style= {styles}>
        <ActivityIndicator  size={this.props.size || 'large'} color="#0000ff" />
      </View>
    )
  }
}

export default Spinner
