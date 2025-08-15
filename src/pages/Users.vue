<template>
  <div class="users-page">
    <h1>团队成员</h1>
    <div class="user-grid">
      <UserCard 
        v-for="user in users" 
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'

export default {
  components: { UserCard },
  data() {
    return {
      users: [
        // {
        //     id: Number,         // 用户唯一ID
        //     name: String,       // 姓名
        //     avatar: String,     // 头像路径
        //     title: String,      // 职位/头衔
        //     grade: String,      // 年级班级
        //     email: String,      // 联系方式
        //     bio: String,        // 个人简介
        //     postCount: Number,  // 文章数
        //     followers: Number   // 粉丝数
        // }
        {
            id: 1,
            name: '周诚',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/1159681.png',
            title: '现役高中部 2025 届信息竞赛组成员',
            skills: ['C++'],
            grade: '高一',
            email: '无',
            bio: '无',
            postCount: 0,
            followers: 0
        },
        {
            id: 2,
            name: '张钦涵',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/1743994.png',
            title: '现役高中部 2025 届信息竞赛组成员',
            skills: ['C++'],
            grade: '高一',
            email: '无',
            bio: '无',
            postCount: 0,
            followers: 0
        },
        {
            id: 3,
            name: '杜玘岳',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/734491.png',
            title: '现役高中部 2025 届信息竞赛组成员',
            skills: ['C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Vue.js', 'Vite.js', 'TypeScript', 'C', 'C#', 'F#', 'Basic'],
            grade: '麓山国际实验学校 2025届',
            email: '2192104525@qq.com',
            bio: '我是该网页的开发者。',
            postCount: 1,
            followers: -1145141919810
        },
        {
            id: 4,
            name: '匡梓桐',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/927927.png',
            title: '现役高中部 2025 届信息竞赛组成员',
            skills: ['C++'],
            grade: '麓山国际实验学校 2025届',
            email: '无',
            bio: '无',
            postCount: 0,
            followers: 0
        },
        {
            id: 5,
            name: '周子程',
            avatar: 'https://cdn.luogu.com.cn/upload/usericon/1748504.png',
            title: '现役高中部 2025 届信息竞赛组成员',
            skills: ['C++'],
            grade: '麓山国际实验学校 2025届',
            email: '无',
            bio: '无',
            postCount: 0,
            followers: 0
        },
        {
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
        {
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
        {
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
      ]
    }
  }
}
</script>

<style scoped>
.users-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--vp-c-text-1);
  font-size: 2rem;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 确保两列布局 */
  gap: 1.5rem; /* 减少间隙 */
}

@media (min-width: 1024px) {
  .user-grid {
    grid-template-columns: repeat(2, 1fr); /* 大屏幕保持两列 */
    gap: 2rem; /* 增加间隙 */
  }
}

@media (max-width: 767px) {
  .user-grid {
    grid-template-columns: 1fr; /* 小屏幕单列 */
  }
}
</style>