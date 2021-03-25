<template>
  <div class="relative min-h-full">
    <Nav/>
    <div class="w-full pb-24">
      <div class="">
        <ProductHeader/>
        <ProductBriefFunc/>
        <ProductCarousel class="mt-8"/>
        <ProductFeatureDetailL class="mt-20"/>
        <ProductFeatureDetailR class="mt-20"/>
        <!-- photo clear up -->
        <div class="" id="photo_clearup">
            <div class="lg:max-w-5xl mx-auto">
                <div class="border-solid border-t"></div>
                <div class="flex flex-col lg:flex-row justify-between items-start">
                    <img class="pb-0 pt-5 lg:py-5" :src="$withBase('/photo_clearup.png')" alt="clearup">
                    <div class="pt-0 pb-5 lg:pt-8 pl-4">
                        <div class="text-2xl">照片整理</div>
                        <ul class="list-disc text-base text-gray-700 pl-10 pt-3">
                            <li>以时间、地理、类型的方式展示和浏览图片</li>
                            <li>支持按文件名、扩展对图片进行搜索</li>
                            <li>以文件夹、标签对图片进行树状式的组织管理</li>
                            <li class="font-bold">支持自定义标签</li>
                            <li>支持对系统图库、手机、相机等PTP设备中照片的管理</li>
                            <li>支持图片在空间、时间、大小、重复等维度归类整理导出</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- photo snip -->
        <div class="" id="photo_snip">
            <div class="lg:max-w-5xl mx-auto">
                <div class="border-solid border-t"></div>
                <div class="flex flex-col lg:flex-row justify-between items-start px-2">
                    <div class="pt-5 pl-2 lg:pt-8">
                        <div class="text-2xl">屏幕截图</div>
                        <ul class="list-disc text-base text-gray-700 pl-10 pt-3">
                            <li>丰富的画图工具
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>矩形、椭圆</li>
                                    <li>直线、箭头</li>
                                    <li>画笔、文字</li>
                                </ul>
                            </li>
                            <li>高级标注工具
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>直线、矩形、椭圆马赛克</li>
                                    <li>直线、矩形、椭圆高亮</li>
                                    <li>距离、区域、文字、颜色标注</li>
                                </ul>
                            </li>
                            <li class="font-bold">撤销、重做、删除图元</li>
                            <li class="font-bold">支持长截图，即滚动截图</li>
                            <li>支持重复调整截图区域、窗口截图</li>
                            <li>复制到剪切板、保存截图、分享截图生成链接</li>
                        </ul>
                    </div>
                    <img class="py-5 lg:py-8" :src="$withBase('/photo_snip.png')" alt="clearup">
                </div>
            </div>
        </div>
        <!-- photo edit -->
        <div class="" id="photo_edit">
            <div class="lg:max-w-5xl mx-auto">
                <div class="border-solid border-t"></div>
                <div class="flex flex-col lg:flex-row justify-between items-start">
                    <img class="pb-0 pt-5 lg:py-5" :src="$withBase('/photo_edit.png')" alt="clearup">
                    <div class="py-5 lg:pt-8 pl-4">
                        <div class="text-2xl">图片编辑</div>
                        <ul class="list-disc text-base text-gray-700 pl-10 pt-3">
                            <li>图片EXIF属性查看和修改</li>
                            <li>图片旋转、翻转</li>
                            <li>丰富的编辑工具
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>矩形、椭圆</li>
                                    <li>直线、箭头</li>
                                    <li>画笔、文字</li>
                                </ul>
                            </li>
                            <li>高级的操作工具
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>水印、马塞克、高亮</li>
                                    <li>裁剪、放大镜、外壳</li>
                                    <li>距离、区域、文字、颜色标注</li>
                                </ul>
                            </li>
                            <li class="font-bold">所有对图片的操作都可保存成模版，且能批量应用</li>
                            <li>撤销、重做、导出</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- photo bed -->
        <div class="" id="photo_bed">
            <div class="lg:max-w-5xl mx-auto">
                <div class="border-solid border-t"></div>
                <div class="flex flex-col lg:flex-row justify-between items-start">
                    <div class="pt-5 lg:pt-8 pl-4">
                        <div class="text-2xl">图床分享</div>
                        <ul class="list-disc text-base text-gray-700 pl-10 pt-3">
                            <li>灵活的图床导出方式
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>拖拽图片导出</li>
                                    <li>使用服务导出</li>
                                    <li>复制图片导出</li>
                                </ul>
                            </li>
                            <li class="font-bold">支持11种图床
                                <ul class="pl-5 text-sm" style="list-style-type: circle">
                                    <li>微博、七牛</li>
                                    <li>腾讯云、阿里云、又拍云</li>
                                    <li>Imgur、Flickr、Amazon S3</li>
                                    <li>Github、SM.MS、码云Gitee</li>
                                </ul>
                            </li>
                            <li>支持导出图床历史的查看和管理</li>
                            <li>支持导出格式、导出前压缩、清除EXIF元数据等个性化的设置</li>
                        </ul>
                    </div>
                    <img class="py-4" :src="$withBase('/photo_bed.png')" alt="clearup">
                </div>
            </div>
        </div>
        <ProductMoreFeature/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Nav from "./Nav";
import Footer from "./Footer";
import ProductHeader from "./ProductHeader"
import ProductBriefFunc from "./ProductBriefFunc"
import ProductCarousel from "./ProductCarousel"
import ProductMoreFeature from "./ProductMoreFeature"
import ProductFeatureDetailR from "./ProductFeatureDetailR"
import ProductFeatureDetailL from "./ProductFeatureDetailL"

export default {
  components: { Nav, Footer, ProductHeader, ProductBriefFunc, ProductCarousel, ProductMoreFeature, ProductFeatureDetailR, ProductFeatureDetailL },
  name: "Layout",
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