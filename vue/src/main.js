import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import utils from './utils'
import store from './store/kVuex'

Vue.config.productionTip = false
Vue.use(utils);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
