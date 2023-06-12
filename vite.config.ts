import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path-browserify'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve:{
        alias:{
          "@":path.resolve('./src')
        }
    },

    // 服务器
    server:{
        host:true,
        cors:true,
        open:false,
        port:8888,
    },

    //打包
    build:{
        target:'modules',
        outDir:'dist',
        cssCodeSplit:true,
    }
    
})
