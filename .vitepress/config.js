// import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';
import { main_sidebar } from './main_sidebar.js';
const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'zh-CN',
  title: "HDU-CS-WIKI",
  description: "HDU计算机科学讲义",
  lastUpdated: true,
  head: [['script', { async: "async", src: 'https://umami.hdu-cs.wiki/script.js', "data-website-id": "3f11687a-faae-463a-b863-6127a8c28301", "data-domains": "wiki.xyxsw.site,hdu-cs.wiki" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: {
      '/': main_sidebar(),
      '/hduhelp/': [
        {
          text: 'HDU帮助',
          link: '/hduhelp/notebook',
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/camera-2018/hdu-cs-wiki' }
    ],
    footer: {
      message: 'Made with ❤️ by HDU 计算机科协 && ALL 协作者',
      copyright: 'Copyright © 2023-present Evan You && HDU 计算机科协 && ALL 协作者'
    },
    lastUpdatedText: '上次更改',
    docFooter: {
      prev: '上一小节',
      next: '下一小节'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/camera-2018/hdu-cs-wiki/edit/master/:path',
      text: '在 GitHub 上修改此页'
    },
    externalLinkIcon: true,
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
})

