import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    // Thêm headers để đảm bảo MIME type đúng
    headers: {
      'Cache-Control': 'no-store',
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  // Cấu hình cho React 19
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  esbuild: {
    target: 'es2020'
  },
  build: {
    target: 'es2020',
    sourcemap: true
  },
  // Đảm bảo resolve đúng extensions
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})