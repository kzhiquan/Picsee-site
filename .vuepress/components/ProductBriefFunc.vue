<template>
<div class="" style="">
    <div class="lg:max-w-5xl mx-auto">
        <div class="flex flex-col lg:flex-row justify-between items-center px-10 py-6">
            <div class="flex justify-between lg:pr-8">
                <router-link :to="{hash:'#home_collect'}" @click.native="anchorHashCheck" class="flex flex-col items-center pr-2 lg:pr-8">
                    <img style="height: 42px" class="pt-3" :src="$withBase('/featureHeader/func_collect.png')" alt="clear up">
                    <div class="text-lg py-3">采集收藏</div>
                    <div class="text-base text-gray-700 text-center">通过浏览器插件、截图、拖放等快速收藏图片素材，凝固灵感瞬间。</div>
                </router-link>
                <router-link :to="{hash: '#home_tidy'}" @click.native="anchorHashCheck" class="flex flex-col items-center">
                    <img style="height: 42px" class="pt-3" :src="$withBase('/featureHeader/func_tidy.png')" alt="snip">
                    <div class="text-lg py-3">整理标记</div>
                    <div class="text-base text-gray-700 text-center">通过标签、文件夹、智能文件夹、智能任务、标星、标注等轻松整理素材。</div>
                </router-link>
            </div>
            <div class="flex justify-between items-center">
                <router-link :to="{hash: '#home_look'}" @click.native="anchorHashCheck" class="flex flex-col items-center pr-2 lg:pr-8">
                    <img style="height: 42px" class="pt-3" :src="$withBase('/featureHeader/func_look.png')" alt="edit">
                    <div class="text-lg py-3">查找查看</div>
                    <div class="text-base text-gray-700 text-center">通过颜色、关键字、形状、尺寸、格式等属性极速定位素材，提供沉浸浏览体验。</div>
                </router-link>
                <router-link :to="{hash: '#home_share'}" @click.native="anchorHashCheck" class="flex flex-col items-center">
                    <img style="height: 42px" class="pt-3" :src="$withBase('/featureHeader/func_cloud.png')" alt="bed">
                    <div class="text-lg pt-5 pb-3">分享协同</div>
                    <div class="text-base text-gray-700 text-center">通过图床、iCloud、云盘支持图片素材分享和多机协同工作，无处不在。</div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {    
    methods: {
        anchorHashCheck() {
            if (window.location.hash === this.$route.hash) {
                const el = document.getElementById(this.$route.hash.slice(1))
                if (el) {
                    window.scrollTo(0, el.offsetTop)
                }
            }
        },
    },

    mounted() {
        this.anchorHashCheck()
    },

};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>