// nav
module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Microservice',
    link: '/Microservice/',
    items: [
      {
        text: 'Microservice Methods',
        items: [
           {text: '微服务定义', link: '/pages/3d1ff1/'},
           {text: '微服务拆分', link: '/pages/7b2325/'},
        ]
      },
      {
        text: 'SpringCloud',
        items: [
           {text: 'SpringCloud基本情况介绍', link: '/pages/f954c4/'},
        ]
      },
      { text: 'Docker',
        items: [
          { text: 'Docker基本情况介绍', link: '/pages/d7428d/' },
        ],
      },
      { text: 'Kubernetes',
        items: [
          { text: 'Kubernetes基本情况介绍', link: '/pages/1208bb/' },
        ],
      },
      {
        text: 'Architect Methods',
        items: [
          {text: '架构-知识体系', link: '/pages/8c6ed0/'},
        ],
      },
    ]
  },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'JAVASCRIPT',
        items: [
          { text: 'JavaScript文章', link: '/pages/8143cc480faf9a11/' },
          { text: 'JavaScript教程', link: '/note/javascript/' },
          { text: 'JavaScript高级程序设计', link: '/note/js/' },
        ],
      },
      {
        text: 'VUE',
        items: [
          { text: '基础', link: '/pages/114158caa9e96df0/' },
          { text: '组件', link: '/pages/83a1ab785e7fd70c/' },
          { text: '过渡和动画', link: '/pages/184a96b493a97078/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          { text: '《React》笔记', link: '/note/react/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: 'TypeScript笔记',
            link: '/pages/51afd6/',
          },
          {
            text: 'JS设计模式总结笔记',
            link: '/pages/4643cd/',
          },
        ],
      },
    ],
  },
  {
    text: '页面',
    link: '/ui/',
    items: [
      { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
      { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
