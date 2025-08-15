<template>
  <div class="blog-page">
    <h1 class="page-title">技术博客</h1>
    <div class="post-grid">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="post.excerpt"
        :date="post.date"
        :to="`/blog/${post.id}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 使用相对路径确保工作
import PostCard from '../components/PostCard.vue'

const posts = ref([
  {
    id: 'welcome',
    title: '欢迎来到信息组博客',
    excerpt: '这是我们的第一篇技术博客',
    date: '2023-10-20'
  },
  {
    id: 'vue-tips',
    title: 'Vue 开发技巧',
    excerpt: '分享实用的 Vue 开发技巧',
    date: '2023-10-25'
  }
])
</script>

<style scoped>
.blog-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>