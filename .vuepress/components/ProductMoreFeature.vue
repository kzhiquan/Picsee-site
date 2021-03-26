<template>
<div class="lg:max-w-5xl mx-auto" style="">

 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="lg:text-center">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{title}}
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">

        <MoreFeatureItem
            v-for="item in items"
            v-bind:title="item.title"
            v-bind:description="item.description"
            v-bind:thumb="item.thumb"
            v-bind:link="item.link"
        />

      </dl>
    </div>

  </div>
    
</div>
</template>


<script>

import MoreFeatureItem from "./MoreFeatureItem"


export default {
    components: { MoreFeatureItem },
    props: {
        title: String,
        items: Array
    }
};

</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>