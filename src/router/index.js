import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    
    meta: { 
      hideNav: true,
      title: '首页 | LSOI Pages' // 自定义标题
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Blog.vue'),
    meta: { 
      title: '博客 | LSOI Pages' // 自定义标题
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: () => import('@/pages/BlogPost.vue'),
    props: true // 传递路由参数作为props
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../pages/Daily.vue'),
    meta: { 
      title: '周报 | LSOI Pages' // 自定义标题
    }
  },
  {
    path: '/solutions', // 新增题解路由
    name: 'Solutions',
    component: () => import('../pages/Solutions.vue'),
    meta: { 
      title: '题解 | LSOI Pages' // 自定义标题
    }
  },
  // 用户列表页
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/pages/Users.vue')
  },
  
  // 用户详情页（带ID）
  {
    path: '/profile/:id',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router