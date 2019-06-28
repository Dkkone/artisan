// App.vue

<template>

  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>

    <router-view />

    <Footer msg="Welcome Footer"/>

  </div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>
