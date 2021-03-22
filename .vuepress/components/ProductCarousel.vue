<template>
  <div class="lg:max-w-5xl mx-auto">
    <carousel class="customCarousel" :per-page="1" :center-mode="true" paginationPosition="bottom-overlay" :pagination-padding="0" >
      <slide class="flex justify-center">
        <img :src="$withBase('/product_thumb_1.png')" alt="product_thumb_1">
      </slide>
      <slide class="flex justify-center">
        <img :src="$withBase('/product_thumb_2.png')" alt="product_thumb_2">
      </slide>
    </carousel>
  </div>
</template>


<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide },
};
</script>


<style lang="stylus" scoped>

@import '../styles-1/custom.styl';

.customCarousel {
  ::v-deep .VueCarousel-pagination button {
    margin-left: 16px;
  }
}
</style>