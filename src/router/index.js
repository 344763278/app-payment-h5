import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import successTip from '@/components/successTip'
import errorTip from '@/components/errorTip'

Vue.use(Router)

export default new Router({
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
            path: '/errorTip',
            name: 'errorTip',
            component: errorTip
        }
    ]
})
