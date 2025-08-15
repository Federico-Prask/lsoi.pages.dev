<template>
  <div class="blog-container">
    <h1>博客</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="`/blog/${post.slug}`">
          <h2>{{ post.title }}</h2>
          <time>{{ post.date }}</time>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  const res = await fetch('/content/index.json')
  posts.value = await res.json()
})
</script>