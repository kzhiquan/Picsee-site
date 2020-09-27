module.exports = {
    title: "Picsee - 专业的图片批量编辑器、照片整理、Markdown图床工具",
    description: "专业的图片批量编辑器、照片整理、Markdown图床工具",
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