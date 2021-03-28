<template>
<div class="lg:max-w-5xl mx-auto" :id="routerHash">

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div v-if="position === 'Left' " class="md:grid md:grid-cols-8 md:gap-4">


        <div class="md:col-span-3">
            <div>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {{title}}
                </p>
                <p class="mt-5 max-w-2xl text-xl text-gray-800 lg:mx-auto">
                    {{description}}
                </p>
            </div>

            <div class="mt-4">
                <dl class="space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-2">
                    <FeatureDetail
                        v-for="feature in features"
                        v-bind:num="feature.num"
                        v-bind:thumb="feature.thumb"
                        v-bind:title="feature.title"
                        v-bind:description="feature.description"
                        v-bind:class="{'bg-blue-100 rounded':isSelected(feature.num)}"
                        v-on:gotoFeature="gotoSlide"
                    />                 

                </dl>
            </div>

        </div>

        <div class="mt-6 md:mt-20 md:col-span-5">
            <ClientOnly>
              <carousel
                ref="carousel"
                class="carousel"
                :per-page="1"
                :center-mode="true" 
                :pagination-enabled="false" 
                v-bind:navigateTo="slideNum">
                    <slide 
                        v-for="feature in features">
                        <VLazyImageComponent class="mx-auto" v-if="!feature.showPlaceHolder" :src="$withBase(feature.show)" alt="feature show" />
                        <VLazyImageComponent class="mx-auto" v-if="feature.showPlaceHolder" :src="$withBase(feature.show)" :src-placeholder="$withBase(feature.showPlaceHolder)" alt="feature show" />
                    </slide>
              </carousel>
            </ClientOnly>
        </div>

    </div>

    <div v-if="position === 'Right' " class="md:grid md:grid-cols-8 md:gap-4">

        <div class="mt-6 md:mt-20 md:col-span-5">
            <ClientOnly>
              <carousel
                ref="carousel"
                class="carousel"
                :per-page="1"
                :center-mode="true" 
                :pagination-enabled="false" 
                v-bind:navigateTo="slideNum">
                    <slide 
                        v-for="feature in features">
                        <VLazyImageComponent class="mx-auto" v-if="!feature.showPlaceHolder" :src="$withBase(feature.show)" alt="feature show" />
                        <VLazyImageComponent class="mx-auto" v-if="feature.showPlaceHolder" :src="$withBase(feature.show)" :src-placeholder="$withBase(feature.showPlaceHolder)" alt="feature show" />
                    </slide>
              </carousel>
            </ClientOnly>
        </div>

        <div class="md:col-span-3">
            <div>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {{title}}
                </p>
                <p class="mt-5 max-w-2xl text-xl text-gray-800 lg:mx-auto">
                    {{description}}
                </p>
            </div>

            <div class="mt-4">
                <dl class="space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-2">
                    <FeatureDetail
                        v-for="feature in features"
                        v-bind:num="feature.num"
                        v-bind:thumb="feature.thumb"
                        v-bind:title="feature.title"
                        v-bind:description="feature.description"
                        v-bind:class="{'bg-blue-100 rounded':isSelected(feature.num)}"
                        v-on:gotoFeature="gotoSlide"
                    />                 

                </dl>
            </div>

        </div>

    </div>

</div>
    
</div>
</template>


<script>

//import { Carousel, Slide } from 'vue-carousel';
import VLazyImageComponent from 'v-lazy-image';
import FeatureDetail from "./FeatureDetail"


export default {
    components: { /*Carousel, Slide,*/ VLazyImageComponent, FeatureDetail },
    props: {
        title: String,
        description: String,
        position: String, // Left/Right 以文本的位置判断
        routerHash: String,
        features: Array
    },
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