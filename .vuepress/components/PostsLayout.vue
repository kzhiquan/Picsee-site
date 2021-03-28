<template>
  <div class="flex flex-col min-h-screen">
    <Nav/>
    <div style="max-width: 740px;margin: 0 auto;" class="py-8 px-6 pb-24 flex-grow content">
      <div class="flex flex-wrap content-start justify-start">
        <button class="border-2 py-0.5 px-1 rounded text-xs" :class="{'bg-purple-500 text-white border-transparent': isSelected('')}" v-on:click="clickTag('')">全部</button>
        <button v-for="tag in tags" 
                class="border-2 py-0.5 px-1 rounded text-xs" 
                :class="{'bg-purple-500 text-white border-transparent': isSelected(tag)}" 
                v-on:click="clickTag(tag)">
                {{tag}}
        </button>
      </div>
      <div class="text-4xl font-bold pt-8">使用文档</div>
      <div class="border-solid border-t mb-3"></div>
      <div class="pt-3">
        <div v-for="post in posts" 
             :class="{'hidden': isPostHidden(post)}">
          <router-link :to="post.path" class="text-2xl pr-2">{{ post.title }}</router-link>
          <div class="inline-block font-thin text-sm" v-if="post.frontmatter.date">{{ post.frontmatter.date.substring(0,10) }}</div>
          <router-link :to="post.path">
              <div v-html="post.excerpt" class="pb-3 text-base font-normal"></div>
          </router-link>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {

  name: "PostsLayout",

  data: function () {
      return {
          curTag: ""
      }
  },

  computed: {

    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/"))
        .filter(x => !x.frontmatter.blog_index)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    },

    tags() {
      let tags = []
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        }
      }
      return tags
    },
  },


  methods: {

    clickTag(tag) {
        this.curTag = tag
        console.log("tag:", tag)
    },

    isPostHidden(post) {

      if (this.curTag == "") {
        return false
      }

      if (this.curTag !== "" && post.frontmatter.tags == undefined) {
        return true
      }

      if (post.frontmatter.tags.includes(this.curTag)) {
        return false
      }

      return true
    },

    isSelected(tag) {
      return this.curTag == tag
    },

  },

};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
@media screen and (min-width: 960px){
    .content{
        min-width : 740px;
    }
}
</style>