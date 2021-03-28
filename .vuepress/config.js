module.exports = {
    title: "Picsee - 素材管理",
    description: "专业的素材采集收藏、整理标记、查找查看、分享协同软件",
    serviceWorker: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
      nav: [{ text: "首页", link: "/" }, 
            { text: "迭代", link: "/version/" },
            { text: "文档", link: "/blog/" },
            { text: "浏览器插件", link: "/webExtension/" },
            { text: "关于", link: "/about/" },],
    },
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
    plugins: ['vuepress-plugin-reading-time',
              ['@vuepress/google-analytics',
                {
                  'ga': 'UA-150406837-2'
                }
              ],
            ],

    chainWebpack: (config, isServer) => {
      config.module
        .rule('zips')
        .test(/\.zip$/)
        .use('file-loader')
          .loader('file-loader')
        .options({
          name: `[path][name].[ext]`
        });
      
      config.module.rule('vue')
        .uses.store
        .get('vue-loader').store
        .get('options').transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: ['xlink:href', 'href'],
          a: 'href'
        };
    },
  }