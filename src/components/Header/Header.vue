<template>
  <nav>
    <v-app-bar
      app
      color="primary"
      dark
      :hide-on-scroll="true"
    >
      <div class="d-flex align-center">
        <h3>Coe's Portfolio</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
      >
        <span class="mr-2">Main</span>
      </v-btn>
      <v-btn
        href="/about"
        text
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        href="/project"
        text
      >
        <span class="mr-2">Projects</span>
      </v-btn>
      <v-btn
        href="/contact"
        text
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Headers extends Vue {

}
</script>

<style scoped>

</style>
