<template>
<div class="lg:max-w-5xl mx-auto">

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="md:grid md:grid-cols-8 md:gap-4">

        <div class="md:col-span-3">
            <div>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                采集收藏
                </p>
                <p class="mt-5 max-w-2xl text-xl text-gray-800 lg:mx-auto">
                    支持各种各式的收藏采集，随时定格你眼前的画面，保存灵感。
                </p>
            </div>

            <div class="mt-4">
                <dl class="space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-2">

                    <div class="relative py-1" v-on:click="gotoSlide(0)" v-bind:class="{'bg-blue-100 rounded':isSelected(0)}">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12">
                                <img :src="$withBase('/collect_chrome.png')" alt="rename">
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">收藏插件</p>
                        </dt>
                        <dd class="mt-1 ml-16 text-sm text-gray-800">
                        安装浏览器插件，支持在网页上拖拽、右键、全页面、批量收藏，高效便捷。
                        </dd>
                    </div>
                    
                    <div class="relative py-1" v-on:click="gotoSlide(1)" v-bind:class="{'bg-blue-100 rounded':isSelected(1)}">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12">
                                <img :src="$withBase('/collect_screenshot.png')" alt="rename">
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">截图标注</p>
                        </dt>
                        <dd class="mt-1 ml-16 text-sm text-gray-800">
                        截图标注随时记录下漂亮的设计想法，支持长截图，即滚动截图、马赛克、高亮、测距等。
                        </dd>
                    </div>

                    <div class="relative py-1" v-on:click="gotoSlide(2)" v-bind:class="{'bg-blue-100 rounded':isSelected(2)}">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12">
                                <img :src="$withBase('/collect_drag.png')" alt="rename">
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">拖拽添加</p>
                        </dt>
                        <dd class="mt-1 ml-16 text-sm text-gray-800">
                        直接拖放素材到Picsee, 进行快速的收藏。
                        </dd>
                    </div>

                    <div class="relative py-1" v-on:click="gotoSlide(3)" v-bind:class="{'bg-blue-100 rounded':isSelected(3)}">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12">
                                <img :src="$withBase('/collect_import.png')" alt="rename">
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">导入外部资源</p>
                        </dt>
                        <dd class="mt-1 ml-16 text-sm text-gray-800">
                        支持本地/网路文件夹、eagle素材包、花瓣面板的直接导入。
                        </dd>
                    </div>



                </dl>
            </div>

        </div>

        <div class="mt-6 md:mt-20 md:col-span-5" style="background-color: coral;">
              <carousel
                ref="carousel"
                class="carousel"
                :per-page="1"
                :center-mode="true" 
                :pagination-enabled="false" 
                v-bind:navigateTo="slideNum">
                    <slide class="flex justify-center">
                        <VLazyImageComponent :src-placeholder="$withBase('/collect_thumb_s_1.jpg')" alt="collect_thumb_1" />
                    </slide>
                    <slide class="flex justify-center">
                        <VLazyImageComponent :src="$withBase('/collect_thumb_2.png')" alt="product_thumb_2" />
                    </slide>
                    <slide class="flex justify-center">
                        <VLazyImageComponent :src="$withBase('/collect_thumb_2.png')" alt="product_thumb_2" />
                    </slide>
                    <slide class="flex justify-center">
                        <VLazyImageComponent :src="$withBase('/collect_thumb_2.png')" alt="product_thumb_2" />
                    </slide>
              </carousel>
        </div>

    </div>

</div>
    
</div>
</template>


<script>

import { Carousel, Slide } from 'vue-carousel';
import VLazyImageComponent from 'v-lazy-image';

export default {
    components: { Carousel, Slide, VLazyImageComponent},
    data: function () {
        return {
            slideNum: [0,false]
        }
    },
    methods: {
        gotoSlide(num) {
            this.slideNum = [num, false]
        },
        isSelected(num) {
            return this.slideNum[0] == num
        }
    }
};

</script>


<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>