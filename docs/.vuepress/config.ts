import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
const { generateSideBar } = require('../utils/index');

export default defineUserConfig<DefaultThemeOptions>({
    base: "/fe-notes/",
    lang: "zh-CN",
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
        lastUpdated: true,
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        logo: '/logo.png',
        navbar: [
            { text: '基础', link: '/basic/' },
            { text: 'js', link: '/js/' },
            { text: 'webpack', link: '/webpack/' },
            { text: '算法', link: '/algorithm/' },
            { text: '其他', link: '/others/' }
        ],
        sidebar: {
            '/basic/': generateSideBar('basic', "基础部分"),
            '/js/': generateSideBar('js', "JavaScript相关"),
            '/webpack/': generateSideBar('webpack', 'webpack相关'),
            '/algorithm/': generateSideBar('algorithm', "算法相关"),
            '/others/': generateSideBar('others', '随笔')
        }
    }
})