<template>
  <router-link :to="to" class="post-card">
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p class="excerpt">{{ excerpt }}</p>
      <time class="date">{{ date }}</time>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  excerpt: String,
  date: String,
  to: String
})
</script>

<style scoped>
.post-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.dark .post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
}

.card-content h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.excerpt {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.date {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}
</style>