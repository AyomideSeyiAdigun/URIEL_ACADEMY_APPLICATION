import Vue from 'vue'
import App from './App.vue'
import router from './router'
//importing of vuematerial
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//vuetify
import vuetify from './plugins/vuetify'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
