<template>
  <router-link :to="`/profile/${user.id}`" class="user-card">
    <div class="card-content">
      <div class="photo-wrapper">
        <img 
          :src="user.avatar || '/default-avatar.jpg'" 
          :alt="user.name"
          class="user-avatar"
        >
      </div>
      <div class="user-info">
        <h3>{{ user.name }}</h3>
        <p class="title">{{ user.title }}</p>
        
        <div class="skills">
          <span v-for="(skill, index) in user.skills" :key="index" class="skill-tag">
            {{ skill }}
          </span>
        </div>
        
        <div class="stats">
          <div class="stat-item">
            <div class="stat-value">{{ user.postCount }}</div>
            <div class="stat-label">文章</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ user.followers }}</div>
            <div class="stat-label">粉丝</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        id: 0,
        name: '匿名用户',
        avatar: '',
        title: '无职位信息',
        skills: [],
        postCount: 0,
        followers: 0
      })
    }
  }
}
</script>

<style scoped>
.user-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.photo-wrapper {
  text-align: center;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-brand-light);
}

.user-info {
  flex: 1;
  text-align: center;
}

.user-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.title {
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
  font-size: 0.9rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.skill-tag {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  font-size: 0.8rem;
  white-space: nowrap;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: auto; /* 推到底部 */
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

/* 深色模式适配 */
.dark .user-card {
  background: var(--vp-c-bg-soft);
}

.dark .skill-tag {
  background: var(--vp-c-bg-alt);
}

/* 响应式调整 */
@media (min-width: 768px) {
  .photo-wrapper {
    margin-bottom: 1.2rem;
  }
  
  .user-avatar {
    width: 90px;
    height: 90px;
  }
}
</style>