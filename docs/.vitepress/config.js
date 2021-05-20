const { generateSideBar } = require('../utils/index');
module.exports = {
  base: '/fe-notes/',
  title: '前端笔记',
  description: '前端开发学习、踩坑笔记',
  head: [
    ["link", { rel: "icon", href: "/fe-notes/logo.png", type: "image/png" }],
    ["meta", { name: "author", content: "Ivan0525" }],
  ],
  themeConfig: {
    repo: 'ivan0525/fe-notes',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '愿意帮助我？',
    lastUpdated: "上次更新",
    logo: '/logo.png',
    nav: [
      { text: '基础', link: '/basic/' },
      { text: 'js', link: '/js/' },
      { text: '算法', link: '/algorithm/' },
      {text: '其他', link: '/others/'}
    ],
    sidebar: {
      '/basic/': generateSideBar('basic', "基础部分"),
      '/algorithm/': generateSideBar('algorithm', "算法相关"),
      '/js/': generateSideBar('js', "JavaScript相关"),
      '/others/': generateSideBar('others', '随笔')
    },
    algolia: {
      apiKey: '2222407df170ece631f1fb6c7043e2bf',
      indexName: 'test'
    }
  }
};
