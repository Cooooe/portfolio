import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6A6A6B',
        secondary: '#686E6F',
        accent: '#F6F6F6',
        error: '#86606B'
      }
    }
  }
})
