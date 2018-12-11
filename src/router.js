import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Over from '@/components/Over'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Game', component: Game },
    { path: '/over', name: 'Over', component: Over },
  ]
})
