<template>
  <article class="markdown-content">
    <div v-html="parsedContent"></div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { parseMarkdown } from '../utils/markdownParser'

const props = defineProps({
  content: String
})

const parsedContent = computed(() => parseMarkdown(props.content))
</script>

<style>
.markdown-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* Markdown样式定制 */
.markdown-content h1 {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.markdown-content pre {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.markdown-content code {
  font-family: 'Fira Code', monospace;
}
</style>