<template>
  <div layout="row" layout-align="space-between center" class="sdtet-navigation sdtet-container">
    <div flex-none>
      <img src="http://placehold.it/200x100" alt="Logo">
    </div>
    <div class="sdtet-navigation__links" flex-auto layout="row" layout-align="space-around">
      <div flex-none><a href="">Schedule</a></div>
      <div flex-none><a href="">Pageant</a></div>
      <div flex-none><a href="">Sponsors</a></div>
      <div flex-none><a href="">Vendors</a></div>
      <div flex-none><a href="">Volunteers</a></div>
      <div flex-none><a href="">Contact</a></div>
      <div flex-none><a href="">Donate</a></div>
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