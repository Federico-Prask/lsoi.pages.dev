<template>
  <article class="post-container">
    <component :is="currentPost" v-if="currentPost" />
    <div v-else class="loading">加载中...</div>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPost = ref(null)

// 动态加载博客组件
const loadPostComponent = async (id) => {
  try {
    // 重置状态
    currentPost.value = null
    
    // 动态导入组件
    const module = await import(`../pages/posts/${id}.vue`)
    currentPost.value = module.default
  } catch (error) {
    console.error('加载博客内容失败:', error)
    currentPost.value = {
      template: `<div class="error-message">无法加载文章: ${id}</div>`
    }
  }
}

// 初始化加载
loadPostComponent(route.params.id)

// 监听路由变化
watch(() => route.params.id, (newId) => {
  if (newId) loadPostComponent(newId)
})
</script>

<style scoped>
.post-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}

.error-message {
  color: #ff4d4f;
  padding: 2rem;
  text-align: center;
  border: 1px solid #ffccc7;
  border-radius: 8px;
  background: #fff2f0;
}
</style>