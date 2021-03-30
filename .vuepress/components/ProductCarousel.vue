<template>
  <div class="lg:max-w-5xl mx-auto">
    <ClientOnly>
      <carousel class="carousel" :per-page="1" :center-mode="true" paginationPosition="bottom-overlay" :pagination-padding="0" >
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_1.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_1.jpg')" alt="product_carousel_1" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_2.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_2.jpg')" alt="product_carousel_2" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_3.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_3.jpg')" alt="product_carousel_3" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_4.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_4.jpg')" alt="product_carousel_4" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_5.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_5.jpg')" alt="product_carousel_5" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_6.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_6.jpg')" alt="product_carousel_6" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_7.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_7.jpg')" alt="product_carousel_7" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_8.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_8.jpg')" alt="product_carousel_8" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_9.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_9.jpg')" alt="product_carousel_9" />
        </slide>
        <slide>
          <VLazyImageComponent class="mx-auto" :src="$withBase('/carousel/product_carousel_10.png')" :src-placeholder="$withBase('/carousel/product_carousel_s_10.jpg')" alt="product_carousel_10" />
        </slide>-->
      </carousel>
    </ClientOnly>
  </div>
</template>


<script>

import VLazyImageComponent from 'v-lazy-image';

export default {
  components: { VLazyImageComponent },
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