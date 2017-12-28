<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navigation></navigation>
    <schedule></schedule>
    <entertainment></entertainment>
    <pageant></pageant>
    <sponsors></sponsors>
    <vendors></vendors>
    <volunteers></volunteers>
    <directions></directions>
    <contact></contact>
  </div>
</template>

<script>
import Navigation from './components/navigation/navigation'
import Schedule from './components/schedule/schedule'
import Entertainment from './components/entertainment/entertainment'
import Pageant from './components/pageant/pageant'
import Sponsors from './components/sponsors/sponsors'
import Vendors from './components/vendors/vendors'
import Volunteers from './components/volunteers/volunteers'
import Directions from './components/directions/directions'
import Contact from './components/contact/contact'

export default {
  name: 'app',
  components: {
    Navigation,
    Schedule,
    Entertainment,
    Pageant,
    Sponsors,
    Vendors,
    Volunteers,
    Directions,
    Contact
  }
}
</script>

<style>

</style>
