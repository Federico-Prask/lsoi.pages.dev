<template>
  <MarkdownPage :content="postContent" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownPage from '@/components/MarkdownPage.vue'

const route = useRoute()
const postContent = ref('')

onMounted(async () => {
  const res = await fetch(`/content/posts/${route.params.slug}.md`)
  postContent.value = await res.text()
})
</script>