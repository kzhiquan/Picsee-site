<template>
  <header class="bg-black text-indigo-200">
    <nav class="flex items-center container mx-auto py-3 px-10">
      <ul class="flex">
        <li 
          v-for="item in $site.themeConfig.nav">
          <router-link 
            :to="item.link"
            :class="[isActive(item.link) ? 'text-white': '']" 
            class="mr-10 hover:text-white">
            {{item.text}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    isActive(link) {
      if (link == this.$route.fullPath) {
        return true
      }
      return false
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>