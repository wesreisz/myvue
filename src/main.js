import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import config from '@/config'

Vue.config.productionTip = false

const oktaAuth = new OktaAuth(config.oidc)

Vue.use(OktaVue, {
  oktaAuth,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
