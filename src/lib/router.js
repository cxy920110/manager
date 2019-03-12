import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'
import users from '../components/users.vue'
//路由规则
let routes=[
    {
        path:'/login',
        component:login
    },
    {
        path:'/',
        component:index,
        children:[
            {
                path:'users',
                component:users,
            }
        ]
    },
]
//路由对象
let router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if(to.path=='/login'){
        next()
    }else{
        if(window.sessionStorage.getItem('token')){
            next()
        }else{
            Vue.prototype.$message.warning('请登陆')
            next('/login')
        }
    }
  })
//暴露路由
export default router