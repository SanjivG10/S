import React from 'react'
import {Text, View, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Card from './common/Card'
import CardRow from './CardRow'
import Label from './common/Label'
import CardSection from './common/CardSection'




class ListView extends React.Component
{
  render()
  {
    return(
        <Card>
          <Label label= 'Popular'/>
          <CardSection style={{ flexDirection: 'row' }}>
            <CardRow iconName = 'twitter' />
            <CardRow iconName = 'youtube' />
          </CardSection>

          <Label label= 'Education'/>
          <CardSection style={{ flexDirection: 'row' }}>
            <CardRow iconName = 'database' />
            <CardRow iconName = 'book' />
          </CardSection>

          <Label label= 'Utilities'/>
          <CardSection style={{ flexDirection: 'row' }}>
            <CardRow iconName = 'lightbulb-o' />
            <CardRow iconName = 'calendar' />
          </CardSection>
          <CardSection style={{ flexDirection: 'row' }}>
            <CardRow iconName = 'newspaper-o' />
            <CardRow iconName = 'phone' />
          </CardSection>

          <Label label= 'Recommended'/>
          { Platform.OS==="android" ?
            <CardSection style={{ flexDirection: 'row' }}>
              <CardRow iconName = 'video-camera' />
              <CardRow iconName = 'android' />
            </CardSection>

             :
             <CardSection style={{ flexDirection: 'row' }}>
               <CardRow icon= 'video-camera'/>
               <CardRow iconName = 'apple' />
            </CardSection>

          }



        </Card>
    )
  }
}

export default ListView
