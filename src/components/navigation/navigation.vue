<template>
  <div layout="row" layout-align="space-between center" class="sdtet-navigation sdtet-container">
    <div flex-none>
      <a href="#"><img class="sdtet-logo" src="../../assets/dog_transparent.png" alt="Logo"></a>
    </div>
    <div class="sdtet-navigation__links" flex-auto layout="row" layout-align="space-around">
      <div flex-none><a href="#sdtet-schedule-section" v-smooth-scroll>Schedule</a></div>
      <div flex-none><a href="#sdtet-pageant-section" v-smooth-scroll>Pageant</a></div>
      <div flex-none><a href="#sdtet-sponsors-section" v-smooth-scroll>Sponsors</a></div>
      <div flex-none><a href="#sdtet-vendors-section" v-smooth-scroll>Vendors</a></div>
      <div flex-none><a href="#sdtet-volunteers-section" v-smooth-scroll>Volunteers</a></div>
      <div flex-none><a href="#sdtet-contact-section" v-smooth-scroll>Contact</a></div>
      <div flex-none><a href="https://www.paypal.com/fundraiser/charity/1440775" target="_blank">Donate</a></div>
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