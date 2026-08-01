import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AppStore from '../pages/AppStore.vue'
import ForeignApp from '../pages/ForeignApp.vue'
import AppleID from '../pages/AppleID.vue'
import Region from '../pages/appleidregion.vue'
import Changeregion from '../pages/changeregion.vue'
import Device from '../pages/Device.vue'
import Vpn from '../pages/vpn.vue'
import VpnOpen from '../pages/vpn-openvpn.vue'
import internetProblem from '../pages/internetProblem.vue'
import notfound from '../pages/404.vue'
import Vpnregion from '@/pages/vpnregion.vue'
import chatgptaccess from '@/pages/chatgptaccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    
    { path: '/iphone', name: 'iPhone', component: Device, props: { device: 'iPhone' } },
    { path: '/windows', name: 'Windows', component: Device, props: { device: 'Windows' } },
    { path: '/mac', name: 'Mac', component: Device, props: { device: 'Mac' } },
    { path: '/problem', name: 'Problem', component: Device, props: { device: 'Problem' } },

    { path: '/iphone/vpn', name: 'IphoneVpn', component: Vpn, props: { device: 'iPhone' } },
    { path: '/windows/vpn', name: 'WindowsVpn', component: Vpn, props: { device: 'Windows' } },
    { path: '/mac/vpn', name: 'MacVpn', component: Vpn, props: { device: 'Mac' } },

    { path: '/iphone/appstore', name: 'IphoneAppStore', component: AppStore },
    { path: '/iphone/appstore/foreignapp', name: 'Foreignapp', component: ForeignApp },

    { path: '/iphone/appleid', name: 'AppleID', component: AppleID },
    { path: '/iphone/appleid/region', name: 'Region', component: Region },
    { path: '/iphone/appleid/changeregion', name: 'changeregion', component: Changeregion },

    { path: '/windows/vpn/openvpn', name: 'VpnOpen', component: VpnOpen, props: { device: 'Windows'} },
    { path: '/iphone/vpn/openvpn', name: 'iphonevpnopen', component: VpnOpen, props: { device:'iPhone'} },

    { path: '/iphone/vpn/vpnregion', name: 'vpnregion', component: Vpnregion, props: { device:'iPhone'} },
    { path: '/problem/gpt', name: 'chatgpt', component: chatgptaccess},

    { path: '/problem/webnaaccess', name: 'webProblem', component: internetProblem, props: {type: 'web'} },
    { path: '/problem/internetnaaccess', name: 'internetProblem', component: internetProblem, props: {type: 'internet'} },

    // catch-all 404 route
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: notfound }
  ]
})

export default router