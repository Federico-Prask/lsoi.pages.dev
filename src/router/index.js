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
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../pages/BlogPost.vue'),
    meta: { 
      title: '博客详情 | LSOI Pages' // 自定义标题
    }
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../pages/Daily.vue'),
    meta: { 
      title: '日报 | LSOI Pages' // 自定义标题
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
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/Profile.vue'),
    meta: { 
      title: '关于 | LSOI Pages' // 自定义标题
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router