module.exports = {
    title: "Picsee - 专业的图片批量编辑器、照片整理、Markdown图床工具",
    description: "专业的图片批量编辑器、照片整理、Markdown图床工具",
    head: [
      ['link', { rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
      nav: [{ text: "首页", link: "/" }, 
            { text: "迭代", link: "/version/" },
            { text: "文档", link: "/blog/" },
            { text: "关于", link: "/about/" },],
    },
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
    plugins: ['vuepress-plugin-reading-time'],
  }