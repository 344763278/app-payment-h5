import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import successTip from '@/components/successTip'
import active from '@/components/active'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home',
        }, {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/successTip',
            name: 'successTip',
            component: successTip
        }, {
            path: '/active',
            name: 'active',
            component: active
        }
    ]
})
