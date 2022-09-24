

import {createRouter ,createWebHashHistory}from "vue-router"
import Home from "../views/Home.vue"
const router=createRouter({
    history:createWebHashHistory(),

    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/about",
            name: "about",
            component: ()=> import("../views/About.vue")
        }

    ]


})

export default router
