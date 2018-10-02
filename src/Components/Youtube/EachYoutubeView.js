import React from 'react'
import {Text,Image} from 'react-native'

import Card from './../common/Card'
import CardSection from './../common/CardSection'
import {Fonts} from './../common/Fonts'

const styles = {
  containerEachCardView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 3,
    marginRight: 3
  },

  imageEachCardView:
  {
      width: null,
      flex:1,
      height: 180
  },
  titleTextStyle:
  {
    marginTop: 5,
    fontFamily: Fonts.Roboto,
    color: '#292f33'
  },
  channelTitle: {
    marginTop: 2,
    color: 'red',
    fontFamily: 'cursive',
    fontSize: 18,
    marginBottom: 3
  }
}

class EachYoutubeView extends React.Component
{
  render()
  {
    const {containerEachCardView,imageEachCardView,titleTextStyle, channelTitle} = styles;
    return(
        <Card style= {containerEachCardView}>
              <Image style= {imageEachCardView} source= {{uri:this.props.data.snippet.thumbnails.medium.url}} />
              <Text style= {titleTextStyle}>
                  {this.props.data.snippet.title}
              </Text>
              <Text style= {channelTitle}>
                  {this.props.data.snippet.channelTitle}
              </Text>
        </Card>

    )
  }
}

export default EachYoutubeView
