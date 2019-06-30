module.exports = {
    title: "Vuepress Blog Example",
    description: "just another blog",
    themeConfig: {
      nav: [{ text: "Blog", link: "/blog/" }, { text: "About", link: "/" }],
    },
    postcss: {
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
    plugins: ['vuepress-plugin-reading-time'],
  }