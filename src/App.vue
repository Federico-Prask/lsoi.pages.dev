<template>
  <header v-if="!$route.meta.hideNav">
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/daily">周报</router-link>
      <router-link to="/solutions">题解</router-link> <!-- 新增 -->
      <router-link to="/users">关于</router-link>
      <ThemeToggle />
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<style>
header {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

nav {
  display: flex;
  gap: 0.5rem;
  /* max-width: 900px;  */
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: wrap; /* 小屏幕自动换行 */
}

/* 重点检查这部分按钮样式 */
nav a {
  padding: 0.4rem 0.8rem; /* 稍微紧凑些 */
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  color: var(--vp-c-text-2); /* 使用次要文本颜色 */
  background-color: transparent; /* 透明背景 */
  border: 1px solid transparent;
}

nav a:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft); /* 轻微背景色 */
  border-color: var(--vp-c-divider);
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: var(--vp-c-brand-light); /* 品牌色背景 */
  font-weight: 500;
}


.dark nav a.router-link-exact-active {
  background-color: var(--vp-c-brand-darker);
  color: white;
}

nav a:active {
  transform: translateY(0);
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.dark nav {
  transition: border-color 0.3s ease; /* 边框颜色过渡 */
}

</style>