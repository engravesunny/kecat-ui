export default {
    title: '一个Vue3 UI框架',
    titleTemplate: ':title - Kecat UI',
    description: '一个Vue3 UI框架',
    lastUpdated: true,
    head: [['link', { rel: 'icon', href: 'https://kecat.top/assets/logo-76a20ba4.webp' }]],
    themeConfig: {
      logo: 'https://kecat.top/assets/logo-76a20ba4.webp',
      siteTitle: 'Kecat UI',
      nav: [
        { text: '指南', link: '/guide/install' },
        { text: '组件', link: '/components/button/' }
      ],
      socialLinks: [{ icon: 'github', link: 'https://github.com/engravesunny/kecat-ui' }],
      sidebar: {
        '/guide/': [
          {
            text: '基础',
            items: [
              { text: '安装', link: '/guide/install' },
              { text: '快速开始', link: '/guide/quickstart' }
            ]
          }
        ],
        '/components/': [
          {
            text: '基本',
            items: [
              { text: 'Button 按钮', link: '/components/button/' },
              { text: 'Icon 图标', link: '/components/icon/' },
              { text: 'Scrollbar 滚动条', link: '/components/scrollbar/' },
              { text: 'Layout 布局', link:'components/layout/' },
              { text: 'Container 布局容器', link: '/components/container/' },
            ]
          },
        ]
      },
      lastUpdatedText: '最近更新时间',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 kecat'
      },
    //   algolia: {
    //     appId: '883U6KEOAU',
    //     apiKey: '49156c3943b71f4167959c3202872067',
    //     indexName: 'huccctio',
    //     locales: {
    //       zh: {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消'
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除'
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接'
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者'
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               reportMissingResultsText: '你认为该查询应该有结果？',
    //               reportMissingResultsLinkText: '点击反馈'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    }
  };
  