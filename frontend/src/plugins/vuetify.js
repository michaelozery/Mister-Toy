import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:  {
      primary: '#e91e63',
      secondary: '#3f51b5',
      accent: '#ff5722',
      error: '#795548',
      warning: '#f44336',
      info: '#03a9f4',
      success: '#4caf50'
      }
    
})
