import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PhoneAuth from '@/components/phoneAuth'
import thankuPage from '@/components/thankuPage'
import survey from '@/components/survey';
//import loader from '@/components/loader';
import OTP from '@/components/OTP';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld

        },
        {
            path: '/phone',
            name: 'phoneAuth',
            component: PhoneAuth

        },
        {
            path: '/thanku',
            name: 'thankuPage',
            component: thankuPage
        },
        {
            path: '/survey',
            name: 'survey',
            component: survey
         },
        // {
        //     path: '/loader',
        //     name: 'loader',
        //     component: loader
        // },
        {
            path: '/otp',
            name: 'otp',
            component: OTP
         }
    ],
    mode:'history'
})
