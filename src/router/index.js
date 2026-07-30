import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Device from '../pages/iphone.vue'
import Topic from '../pages/vpn.vue'
import Article from '../pages/vpn-openvpn.vue'
import AppStore from '../pages/AppStore.vue'
import ForeignApp from '@/pages/ForeignApp.vue'
import AppleID from '../pages/AppleID.vue'
import Region from '@/pages/appleidregion.vue'
import Changeregion from '@/pages/changeregion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/iphone',
      name: 'Iphone',
      component: Device,
      props: { device: 'iPhone' }
    },
    {
      path: '/mac',
      name: 'Mac',
      component: Device,
      props: { device: 'Mac' }
    },
    {
      path: '/windows',
      name: 'Windows',
      component: Device,
      props: { device: 'Windows' }
    },
    {
      path: '/iphone/vpn',
      name: 'IphoneVpn',
      component: Topic
    },
    {
      path: '/iphone/appstore',
      name: 'IphoneAppStore',
      component: AppStore
    },
    {
      path: '/article/open-vpn',
      name: 'ArticleOpenVPN',
      component: Article
    },
    {
      path: '/iphone/appstore/foreignapp',
      name: 'Foreignapp',
      component: ForeignApp
    },
    {
      path: '/iphone/appleid',
      name: 'AppleID',
      component: AppleID
    },
    {
      path: '/iphone/appleid/region',
      name: 'Region',
      component: Region
    },
    {
      path: '/iphone/appleid/changeregion',
      name: 'changeregion',
      component: Changeregion
    }
  ]
})

export default router
