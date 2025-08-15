<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    aria-label="切换主题"
  >
    <Sun v-if="!isDark" class="icon" />
    <Moon v-else class="icon" />
  </button>
</template>

<script setup>
import Sun from 'lucide-vue-next/dist/esm/icons/Sun'
import Moon from 'lucide-vue-next/dist/esm/icons/Moon'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  isDark.value = savedTheme === 'dark'
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;
  color: var(--vp-c-text);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.theme-toggle:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
  stroke-width: 1.5;
}
</style>