<template>
  <div class="post-content">
    <h1>欢迎来到信息组博客</h1>
    <time>2023-10-20</time>
    
    <div class="content">
      <p>这是我们的第一篇技术博客文章。</p>
      
      <h2>主要特点</h2>
      <ul>
        <li>基于 Vue 3 构建</li>
        <li>响应式设计</li>
        <li>支持深色模式</li>
      </ul>
      
      <div class="code-block">
        <pre><code>console.log('Hello World!')</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用 <script setup> 语法，默认导出组件
const title = "欢迎来到信息组博客"
const date = "2023-10-20"
</script>

<style scoped>
.post-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

time {
  color: var(--vp-c-text-2);
  display: block;
  margin-bottom: 2rem;
}

.content {
  line-height: 1.6;
}

.code-block {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}
</style>