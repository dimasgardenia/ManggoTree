// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'
import store from './vuex/store'

var config = {
  databaseURL: 'https://imageandfacerecognition.firebaseio.com',
  projectId: 'imageandfacerecognition'
}

Vue.config.productionTip = false
Vue.prototype.$db = Firebase.initializeApp(config).database().ref('manggo')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
