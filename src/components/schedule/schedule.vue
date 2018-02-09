<template>
<div class="sdtet-schedule-background">
    <div id="sdtet-schedule-section" class="sdtet-schedule-container sdtet-container">
        <h1>Event Schedule</h1>
        <p>Events and times can change without notice</p>
        <div layout="row" layout-align="center">
            <div flex="none" layout="row" class="sdtet-schedule-grid">

            <!-- Friday -->

                <div flex="40" class="sdtet-schedule-title sdtet-text-align-right ">Main Stage</div>
                <div flex="20" class="sdtet-schedule-date">FRIDAY 02.16.18</div>
                <div flex="40" class="sdtet-schedule-title sdtet-text-align-left ">Cultural Village</div>
                <div class="sdtet-schedule-divider"></div>
                
                <div v-for="event in friday" :key="event.id" layout="row" flex="100">
                    <div flex="40" class="sdtet-schedule-main-stage pa-1">{{event.english_event}}</div>
                    <div flex="20" class="sdtet-schedule-date">{{event.start_time}}</div>
                    <div flex="40" class="sdtet-schedule-cultural-village">{{event.viet_event}}</div>
                </div>
                
                <!-- Saturday -->
                <div class="sdtet-schedule-spacer"></div>
                <div flex="40" class="sdtet-schedule-title sdtet-text-align-right">Main Stage</div>
                <div flex="20" class="sdtet-schedule-date">SATURDAY 02.17.18</div>
                <div flex="40" class="sdtet-schedule-title sdtet-text-align-left">Cultural Village</div>
                <div class="sdtet-schedule-divider"></div>

                <div v-for="event in saturday" :key="event.id" layout="row" flex="100">
                    <div flex="40" class="sdtet-schedule-main-stage pa-1">{{event.english_event}}</div>
                    <div flex="20" class="sdtet-schedule-date">{{event.start_time}}</div>
                    <div flex="40" class="sdtet-schedule-cultural-village">{{event.viet_event}}</div>
                </div>

                <!-- Sunday -->
                <div class="sdtet-schedule-spacer"></div>
                <div flex="40" class="sdtet-schedule-title sdtet-text-align-right">Main Stage</div>
                <div flex="20" class="sdtet-schedule-date">SUNDAY 02.18.18</div>
                <div flex="40" class="sdtet-schedule-title sdtet-text-align-left">Cultural Village</div>
                <div class="sdtet-schedule-divider"></div>

                <div v-for="event in sunday" :key="event.id" layout="row" flex="100">
                    <div flex="40" class="sdtet-schedule-main-stage pa-1">{{event.english_event}}</div>
                    <div flex="20" class="sdtet-schedule-date">{{event.start_time}}</div>
                    <div flex="40" class="sdtet-schedule-cultural-village">{{event.viet_event}}</div>
                </div>

                <div class="sdtet-schedule-spacer"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  data () {
    return {
      friday: [],
      saturday: [],
      sunday: []
    }
  },
  created () {
    axios.get('https://cors.now.sh/http://admin.sdtet.com/php_file/get_festival_schedule.php')
    .then(response => {
      // JSON responses are automatically parsed.
      var moment = require('moment')
      for (var day in response.data) {
        // console.log(day)
        for (var item in response.data[day]) {
          // console.log(item)
          for (var property in response.data[day][item]) {
            // console.log(property === 'start_time')
            if (property === 'start_time') {
              // console.log(response.data[day][item].start_time)
              response.data[day][item].start_time = moment(response.data[day][item].start_time, 'HH:mm').format('h:mm A')
            }
          }
        }
      }
      this.friday = response.data[Object.keys(response.data)[0]]
      this.saturday = response.data[Object.keys(response.data)[1]]
      this.sunday = response.data[Object.keys(response.data)[2]]
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>