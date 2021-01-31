
import Login from "../pages/auth/Login"
import Home from "../pages/Home"





export default{
    mode : 'history',
    routes : [
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
}
