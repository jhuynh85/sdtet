<template>
  <div layout="row" layout-align="space-between center" class="sdtet-navigation sdtet-container">
    <div flex-none>
      <a href="#"><img class="sdtet-logo" src="../../assets/dog_transparent.png" alt="Logo"></a>
    </div>
    <div class="sdtet-navigation__links" flex-auto layout="row" layout-align="space-around">
      <div flex-none><a href="#schedule">Schedule</a></div>
      <div flex-none><a href="#pageant">Pageant</a></div>
      <div flex-none><a href="#sponsors">Sponsors</a></div>
      <div flex-none><a href="#vendors">Vendors</a></div>
      <div flex-none><a href="#volunteers">Volunteers</a></div>
      <div flex-none><a href="#directions">Directions</a></div>
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