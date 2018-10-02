import React from 'react'
import {Text} from 'react-native'

const styles = {
  color: '#3d3d3d',
  fontSize: 20,
  fontFamily: 'monospace',
  marginBottom: 10,
  marginLeft: 10,
  marginTop: 10
}

class Label extends React.Component
{
  render()
  {
    return(
        <Text style = {styles}>
          {this.props.label}
        </Text>
    )
  }
}


export default Label
