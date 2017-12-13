<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navigation></navigation>
    <entertainment></entertainment>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation/navigation'
import Entertainment from './components/entertainment/entertainment'

export default {
  name: 'app',
  components: {
    Navigation,
    Entertainment
  }
}
</script>

<style>

</style>
