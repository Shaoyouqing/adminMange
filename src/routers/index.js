import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)
const router =new Router({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',name:'Home',component:()=>import('@/views/Home.vue')},
    {path:'/user',name:'UserList',component:()=>import('@/views/user/UserList.vue')}
  ]
})
export default router;