import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import CardSection from './common/CardSection'



const myStyle= {
  flex: 1,
  borderWidth: 0.5,
  borderColor: '#000',
  alignItems: 'center',
  backgroundColor: '#ccc',
  padding: 10
}



class TrendingList extends React.Component
{
  render()
  {
    return(
      <CardSection style= {{flexDirection: 'row'}}>

        <CardSection style={myStyle} >
          <Icon
            name="youtube"
            color="#000"
            size={50}
          />
        </CardSection>

        <CardSection style= {myStyle} >
        <Icon
          name="twitter"
          color="#000"
          size={50}
        />
        </CardSection>

      </CardSection>
    )
  }
}


export default TrendingList
