import React from 'react'
import {Text} from 'react-native'


const styles = {
  alignSelf: 'center',
  fontSize: 20,
  color: '#000',
  fontFamily: 'monospace',
  flexDirection: 'row',
  padding: 2,
  elevation: 3
}


class Header extends React.Component
{
  render()
  {
    return(
        <Text style= {styles}>
            {this.props.title}
        </Text>

    )
  }
}


export default Header
