import React from 'react'
import {View, Text, FlatList} from 'react-native'
import axios from 'axios'

import Spinner from './../common/Spinner'
import EachYoutubeView from './EachYoutubeView'

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=NP&maxResults=10&key=AIzaSyB9ARJHdtJs4YxUdb2XnfpzkqLxGDQkDwU'


class YoutubeView extends React.Component
{

  constructor(props)
  {
    super(props)
    this.state = {
      youtubeItems: [],
      loading: true
    }
  }

  componentWillMount()
  {
    axios.get(YOUTUBE_API_URL).then((response)=>{
    this.setState({
      youtubeItems: response.data.items,
      loading:false
      })
    }).catch((error) =>{

    })
  }




  render()
  {
    return(
      <View>
        {
          !this.state.loading ?
          <FlatList
              data={this.state.youtubeItems}
              renderItem={({ item }) => (
                  <EachYoutubeView data={item} />
                )}
            />
          :
          <Spinner />
        }
      </View>

    )
  }
}


export default YoutubeView
