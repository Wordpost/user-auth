import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListUsers from '@/page/ListUsers'
import AddUser from '@/page/AddUser'
import ShowUser from '@/page/ShowUser'
import EditUser from '@/page/EditUser'
import Login from '@/page/Login'
import SignUp from '@/page/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      meta: {
        requiresAuth: true
      },
      name: 'ListUsers',
      component: ListUsers
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:id',
      name: 'ShowUser',
      component: ShowUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id',
      name: 'EditUser',
      component: EditUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        onlyForGuests: true
      },
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
