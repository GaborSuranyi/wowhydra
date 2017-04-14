import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();

new Vue({
  el: '#vue-container',
  components: { App }
})
