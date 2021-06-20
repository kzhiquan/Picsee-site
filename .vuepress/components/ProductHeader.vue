<template>
<div style="background-Color: #222222">
    <div class="lg:max-w-5xl mx-auto">
        <div class="flex justify-center items-center" style="height: 21rem">
            <div class="px-10 lg:px-0">
                <div class="flex items-center">
                    <img :src="$withBase('/logo.png')" alt="product logo">
                    <div class="pl-3 lg:pl-8">
                        <div class="text-white text-xl lg:text-4xl">Picsee - 看图 & 截图</div>
                        <div class="text-white text-sm lg:text-lg pt-3">专业的图片采集收藏、照片整理标记、查找查看、分享协同软件</div>
                        <div class="flex items-center">
                            <a target="_blank" href="https://apps.apple.com/cn/app/picsee-%E7%9C%8B%E5%9B%BE-%E6%88%AA%E5%9B%BE/id1454805783?mt=12">
                                <img class="pt-4" :src="$withBase('/app_mac_store.png')" alt="mac app store">
                            </a>
                            <!-- <a target="_blank" class="pl-4">
                                <img class="pt-4" :src="$withBase('/app_win_store.png')" alt="win app store">
                            </a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>