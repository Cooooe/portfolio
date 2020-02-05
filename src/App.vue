<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/Header.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  })
})
</script>
