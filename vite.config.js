import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 确保导入 path 模块

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 正确配置别名
    }
  }
})