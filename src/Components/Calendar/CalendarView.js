import React from 'react'
import {View} from 'react-native'
import { Calendar, CalendarList } from 'react-native-calendars';

import {LocaleConfig} from './CalendarConfig'

import {ToNepali} from './ConvertDate'

class CalendarView extends React.Component
{
  render()
  {
    return(

      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal
        showScrollIndicator
        // Enable paging on horizontal, default = false
        pagingEnabled
        // Set custom calendarWidth.
        calendarWidth={320}
        />
    )
  }
}


export default CalendarView
