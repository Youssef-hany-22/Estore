import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // ← تأكد إن السطر ده موجود

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // ← هنا نستخدم path.resolve
    }
  }
})
