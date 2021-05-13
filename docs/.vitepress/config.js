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
    logo: '/logo.png',
    nav: [
      { text: '基础', link: '/basic/' },
      { text: 'js', link: '/js/' },
      { text: '算法', link: '/algorithm/' },
      {text: '其他', link: '/others/'}
    ],
    searchMaxSuggestions: 10,
    sidebar: {
      '/basic/': generateSideBar('basic', "基础")
    }
  }
};
