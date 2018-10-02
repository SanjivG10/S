import React from 'react'
import {Text, View, Platform, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Actions} from 'react-native-router-flux'

import Card from './common/Card'
import CardSection from './common/CardSection'


const myStyle= {
  cardStyle : {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#000',
    alignItems: 'center',
    padding: 10,
    elevation: 1
  },
  touchableStyle: {
    flex: 1,
    flexDirection: 'row'
  }
}


class CardRow extends React.Component
{

  constructor(props)
  {
    super(props)
    this.actionPressed = this.actionPressed.bind(this)
    state = {
        myProps: this.props
    }
  }




  actionPressed(iconName)
  {
    switch(iconName)
    {
      case 'twitter':
        break;
      case 'youtube':
        Actions.youtube()
        break;
      case 'database':
        break;
      case 'lightbulb-o':
        break;
      case 'book':
        break;
      case 'calendar':
        Actions.calendar()
        break;
      case 'newspaper-o':
        break;
      case 'video-camera':
        break;
      case 'apple':
        break;
      case 'android':
        break;
      default :
        break;
    }
  }

  render()
  {
    return(
          <TouchableOpacity style= {myStyle.touchableStyle} onPress = { ()=> this.actionPressed(this.props.iconName)  }  >
            <CardSection style={myStyle.cardStyle}  >
                <Icon name={this.props.iconName} size={30} color="#000" />
            </CardSection>
          </TouchableOpacity>
    )
  }
}

export default CardRow
