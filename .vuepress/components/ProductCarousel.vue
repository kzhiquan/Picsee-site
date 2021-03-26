<template>
  <div class="lg:max-w-5xl mx-auto">
    <carousel class="carousel" :per-page="1" :center-mode="true" paginationPosition="bottom-overlay" :pagination-padding="0" >
      <slide class="flex justify-center">
        <VLazyImageComponent :src="$withBase('/product_thumb_1.png')" :src-placeholder="$withBase('/product_thumb_s_1.jpg')" alt="product_thumb_1" />
      </slide>
      <slide class="flex justify-center">
        <VLazyImageComponent :src="$withBase('/product_thumb_2.png')" alt="product_thumb_1" />
      </slide>
    </carousel>
  </div>
</template>


<script>

import { Carousel, Slide } from 'vue-carousel';
import VLazyImageComponent from 'v-lazy-image';

export default {
  components: { Carousel, Slide, VLazyImageComponent },
};

</script>


<style lang="stylus" scoped>

@import '../styles-1/custom.styl';

.carousel {
  ::v-deep .VueCarousel-pagination button {
    margin-left: 16px;
  }
}

</style>