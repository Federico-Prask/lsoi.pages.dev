<template>
  <header>
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/daily">日报</router-link>
      <router-link to="/profile">个人信息</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
header {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

nav {
  display: flex;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

nav a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--vp-c-brand-dark);
  font-weight: bold;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text);
}
</style>