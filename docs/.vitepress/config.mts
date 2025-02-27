import { defineConfig } from 'vitepress'
import { set_sidebar } from './gen_sidebar.js';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/akun-blog/',
  head: [['link', { rel: 'stylesheet', href: './theme/custom.css' }],],
  description: "计算机知识记录",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //右上角的栏目
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },

    ],
    siteTitle: 'akun-blog',


    editLink: {
      pattern: 'https://github.com/akun0311/akun-blog/edit/main/docs/:path'
    },
      
    //侧边栏    
    sidebar: {
      '/': set_sidebar(),
    },
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/akun0311/akun-blog' },
    ]
  },
})
