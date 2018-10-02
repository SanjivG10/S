import React from 'react'
import {TextInput, View,Text} from 'react-native'


const styles= {
    viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderRadius: 1,
    marginTop: 10
  },
  textStyle: {
    marginLeft: 10,
    flex: 1,
    color: '#000',
    fontSize: 18
  },
  inputStyle: {
    justifyContent: 'center',
    flex: 2
  }
}

class Input extends React.Component
{
  render()
  {
    const {viewStyle,textStyle,inputStyle} = styles;
    return (
      <View style= {viewStyle}>
        <Text style = {textStyle}>
            {this.props.label}
        </Text>
        <TextInput placeholder= {this.props.placeholder} style=  {inputStyle}>

        </TextInput>
      </View>
    )
  }
}

export default Input
