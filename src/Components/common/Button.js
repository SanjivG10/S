import React from 'react'
import {TouchableOpacity,Text} from 'react-native'


const styles = {
  height: 40,
  width: 60,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center'
}

class Button extends React.Component
{
  render()
  {
    return(
        <TouchableOpacity style= {styles}>
          <Text>
            {this.props.buttonName}
          </Text>
        </TouchableOpacity>

    )
  }
}


export default Button
