<template>
  <header>
    <nav class="flex items-center py-3 px-10 bg-black text-indigo-200">
      <ul class="flex">
        <li v-for="item in $site.themeConfig.nav">
          <router-link :to="item.link" class="mr-6 hover:text-white">{{item.text}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>