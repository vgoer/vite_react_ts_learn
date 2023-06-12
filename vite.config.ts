import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path-browserify';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    // 文章
    // https://juejin.cn/post/7238490244324294712
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },

    // 服务器
    server: {
        host: true,
        cors: true,
        open: true,
        port: 8888,
        https: false,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', // 接口地址。
                changeOrigin: true,
                secure: false,
            },
        },
    },

    //打包
    build: {
        target: 'modules',
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        cssCodeSplit: true,
    },
});
