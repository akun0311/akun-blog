import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/akun-blog/',
  head: [['link', { rel: 'icon', href: '/akun.ico', type: 'image/x-icon' }]],
  description: "计算机知识记录",
  lastUpdated: true,
  




  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //右上角的栏目
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '文档',
        items: [
          { text: 'single-cycle-cpu项目介绍', link: '/single-cycle-cpu' },
          { text: 'pipeline-cpu项目介绍',     link: '/pipeline-cpu' },
          { text: '安装ubuntu系统',           link: '/install-ubuntu' },
          { text: 'y86相关',                 link: '/computer/cpu/instruction-set/y86' },
          { text: 'modelsim',               link: '/computer/cpu/modelsim' }
        ]
      }
    ],
    siteTitle: 'akun-blog',


    editLink: {
      pattern: 'https://github.com/akun0311/akun-blog/edit/main/docs/:path'
    },
      
    //侧边栏    
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '安装ubuntu系统',           link: '/install-ubuntu' },
          { text: 'y86相关',                 link: '/computer/cpu/instruction-set/y86' },
          { text: 'modelsim',               link: '/computer/cpu/modelsim' }
        ]
      }
    ],
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/akun0311/akun-blog' },
    ]
  }
})
