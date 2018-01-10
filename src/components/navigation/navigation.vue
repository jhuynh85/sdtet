<template>
  <div layout="row" layout-align="space-between center" class="sdtet-navigation sdtet-container">
    <div flex-none>
      <a href="#"><img class="sdtet-logo" src="../../assets/dog_transparent.png" alt="Logo"></a>
    </div>
    <div class="sdtet-navigation__links" flex-auto layout="row" layout-align="space-around">
      <div flex-none><a href="#sdtet-schedule-section" v-smooth-scroll>Schedule</a></div>
      <div flex-none><a href="#sdtet-pageant-section" v-smooth-scroll>Pageant</a></div>
      <div flex-none><a href="#sdtet-vendors-section" v-smooth-scroll>Vendors</a></div>
      <div flex-none><a href="#sdtet-volunteers-section" v-smooth-scroll>Volunteers</a></div>
      <div flex-none><a href="#sdtet-sponsors-section" v-smooth-scroll>Sponsors</a></div>
      <div flex-none><a href="#sdtet-contact-section" v-smooth-scroll>Contact</a></div>
      <div flex-none><a href="https://www.paypal.com/fundraiser/charity/1440775" target="_blank">Donate</a></div>
    </div>
    <div class="sdtet-navigation-menu">
      <v-menu offset-y>
      <v-btn icon large slot="activator">
        <v-icon large color="red">menu</v-icon>
      </v-btn>
        <v-list>
          <v-list-tile>
            <a href="#sdtet-schedule-section" v-smooth-scroll><v-list-tile-title>Schedule</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-pageant-section" v-smooth-scroll><v-list-tile-title>Pageant</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-vendors-section" v-smooth-scroll><v-list-tile-title>Vendors</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-volunteers-section" v-smooth-scroll><v-list-tile-title>Volunteers</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-sponsors-section" v-smooth-scroll><v-list-tile-title>Sponsors</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="#sdtet-contact-section" v-smooth-scroll><v-list-tile-title>Contact</v-list-tile-title></a>
          </v-list-tile>
          <v-list-tile>
            <a href="https://www.paypal.com/fundraiser/charity/1440775"><v-list-tile-title>Donate</v-list-tile-title></a>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        title: 'Navigation!'
      }
    }
  }
</script>