import Vue from 'vue'
import Router from 'vue-router'
import Script from '@/components/Script'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Script',
      component: Script
    }
  ]
})
