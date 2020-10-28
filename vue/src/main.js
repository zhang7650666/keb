import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import { Button, Select } from 'element-ui';
// import store from './store/kVuex'
import './permission'
import '@/assets/fonts'
import permission from '@/directives/permission'
import Icon from '@/components/base/icon'
Vue.config.productionTip = false
Vue.directive('permission', permission);
Vue.component('Icon', Icon)

Vue.use(utils);

Vue.use(Button)
Vue.use(Select)
 
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
