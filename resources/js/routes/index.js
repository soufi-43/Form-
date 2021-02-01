
import Login from "../pages/auth/Login"
import Home from "../pages/Home"
import Welcome from "../pages/Welcome"
import VueRouter from 'vue-router'
import Vue from 'vue'




Vue.use(VueRouter)




const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : Welcome ,
            name : 'welcome'
        },
        {
            path : '/login',
            component : Login ,
            name : 'login'
        },
        {
            path : '/home',
            component : Home ,
            name : 'home'
        },

    ]
})

export default router ;
