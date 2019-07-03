module.exports = {
    title: "Vuepress Blog Example",
    description: "just another blog",
    themeConfig: {
      nav: [{ text: "首页", link: "/" }, 
            { text: "迭代", link: "/version/" },
            { text: "文档", link: "/doc/" },
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