<template>
  <div class="home-hero">
    <div class="hero-content">
      <h1>麓山国际<span class="highlight">信息组</span></h1>
      <p class="subtitle">算法思路 | 经验分享 | 学习资源</p>
      
      <div class="action-buttons">
        <router-link to="/blog" class="action-button">探索博客</router-link>
        <router-link to="/daily" class="action-button secondary">查看日报</router-link>
      </div>
    </div>
    
    <div class="feature-cards">
    <router-link 
      v-for="(card, index) in features" 
      :key="index" 
      :to="card.path"
      class="card"
    >
      <component :is="card.icon" class="card-icon" />
      <h3>{{ card.title }}</h3>
      <p>{{ card.desc }}</p>
    </router-link>
  </div>
  </div>
</template>

<script setup>
// 使用Lucide图标（需先安装）
import { BookOpen, CalendarDays, Code2, Users } from 'lucide-vue-next'

const features = [
  {
    icon: BookOpen,
    title: "技术博客",
    desc: "成员原创技术文章",
    path: "/blog"
  },
  {
    icon: Code2,
    title: "题解专栏", 
    desc: "算法与竞赛题解",
    path: "/solutions" // 新增
  },
  {
    icon: CalendarDays,
    title: "活动日报",
    desc: "每日学习记录",
    path: "/daily"
  },
  {
    icon: Users,
    title: "成员风采",
    desc: "团队成员介绍",
    path: "/profile"
  }
]
</script>

<style scoped>
.action-button {
  text-decoration: none !important; /* 移除下划线 */
  display: inline-block; /* 保持按钮布局 */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

/* 主按钮样式 */
.action-button {
  background: var(--vp-c-brand);
  color: white;
}

/* 次要按钮样式 */
.action-button.secondary {
  background: transparent;
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

/* 悬停效果 */
.action-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.action-button:active {
  transform: translateY(0);
}

.card {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.card:active {
  transform: scale(0.98);
}

.home-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-content {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight {
  color: var(--vp-c-brand);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: var(--vp-c-brand);
  color: white;
  font-weight: 500;
}

.action-button.secondary {
  background: transparent;
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

/* 更新卡片样式 */
.card {
  background: white;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  color: var(--vp-c-text-1);
}

/* 深色模式适配 */
.dark .card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

/* 悬停效果增强 */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.dark .card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* 图标颜色强化 */
.card-icon {
  color: var(--vp-c-brand);
  background: rgba(100, 108, 255, 0.1);
  padding: 0.8rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 恢复原始字体大小并增强可读性 */
.card h3 {
  font-size: 1.25rem; /* 恢复原始标题大小 */
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1); /* 使用高对比度文本色 */
}

.card p {
  font-size: 1rem; /* 恢复正文字体大小 */
  color: var(--vp-c-text-2);
  line-height: 1.6; /* 增加行高提升可读性 */
}

.card {
  position: relative;
  background: var(--vp-c-card-bg);
  box-shadow: var(--vp-c-card-shadow);
  padding: 2rem;
  border-radius: 12px;
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* 初始透明边框占位 */
  border: 1px solid transparent; 
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  /* 明确指定边框颜色变化 */
  border-color: var(--vp-c-brand);
}

/* 深色模式适配 */
.dark .card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  border-color: var(--vp-c-brand-light);
}

/* .card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background: var(--vp-c-brand);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  border-radius: 0 12px 0 0;
} */

</style>