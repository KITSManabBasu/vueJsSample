import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Users from '@/components/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     // name: 'HelloWorld',
     // component: HelloWorld
     
     //name: 'Test',
     //component: Test

     name: 'Users',
     component: Users
    }
  ]
})
