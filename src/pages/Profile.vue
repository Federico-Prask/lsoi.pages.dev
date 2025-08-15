<template>
  <div class="profile-page">
    <div class="profile-header">
      <img 
        :src="user.avatar || '/default-avatar.jpg'" 
        :alt="user.name"
        class="profile-avatar"
      >
      <div class="profile-info">
        <h1>{{ user.name }}</h1>
        <p class="title">{{ user.title }}</p>
        <div class="meta">
          <span class="icon">🏫</span><span> {{ user.grade }}</span>
          <span class="icon">📧</span><span> {{ user.email }}</span>
        </div>
      </div>
    </div>
    
    <div class="profile-content">
      <section class="bio-section">
        <h2>个人简介</h2>
        <p>{{ user.bio || '这个同学很神秘，没有留下简介~' }}</p>
      </section>
      
      <section class="posts-section">
        <h2>最近文章</h2>
        <!-- 文章列表 -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { // 接收路由参数作为prop
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      user: {}
    }
  },
  async created() {
    // 使用props中的id而不是$route.params
    const userId = this.id
    
    // 模拟数据 - 实际项目中应替换为API调用
    const users = {
      1: {
        id: 1,
        name: '周诚',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/1159681.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      2: {
        id: 2,
        name: '张钦涵',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/1743994.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      3: {
        id: 3,
        name: '杜玘岳',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/734491.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        grade: '麓山国际实验学校 2025届',
        email: '2192104525@qq.com',
        bio: '我是该网页的开发者。',
        postCount: 1,
        followers: -1145141919810
      },
      4: {
        id: 4,
        name: '匡梓桐',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/927927.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      5: {
        id: 5,
        name: '周子程',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/1748504.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      6: {
        id: 6,
        name: '刘魏博',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/910050.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        skills: ['C++'],
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      7: {
        id: 7,
        name: '袁泽博',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/908648.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        skills: ['C++'],
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      },
      8: {
        id: 8,
        name: '刘书文',
        avatar: 'https://cdn.luogu.com.cn/upload/usericon/819694.png',
        title: '现役高中部 2025 届信息竞赛组成员',
        skills: ['C++'],
        grade: '麓山国际实验学校 2025届',
        email: '无',
        bio: '无',
        postCount: 0,
        followers: 0
      }
    }
    
    this.user = users[userId] || {
      name: '用户不存在',
      bio: '未找到该用户的信息'
    }
  }
}
</script>

<style scoped>
.profile-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
  border: 4px solid var(--vp-c-brand-light);
}

.profile-info h1 {
  margin: 0 0 0.5rem;
}

.title {
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
  font-size: 1.1rem;
}

.meta {
  display: flex;
  gap: 1.5rem;
  color: var(--vp-c-text-2);
}

.meta i {
  margin-right: 0.3rem;
}

.profile-content section {
  margin-bottom: 3rem;
}

.profile-content h2 {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-avatar {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
}
</style>