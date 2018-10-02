import React from 'react'
import {Router,Scene} from 'react-native-router-flux'

import YoutubeView from './Youtube/YoutubeView'
import ListView from './ListView'
import CalendarView from './Calendar/CalendarView'

class AllRoute extends React.Component
{
  render()
  {
    return(

      <Router>
        <Scene key= 'root'>
          <Scene key = "home" component= {ListView} title = " Mero App " initial  />
          <Scene key = "youtube" component= {YoutubeView} title = " Youtube Trending! "  />
          <Scene key = "calendar" component= {CalendarView} hideNavBar  />
        </Scene>
      </Router>
    )
  }
}


export default AllRoute
