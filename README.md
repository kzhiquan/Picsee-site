---
layout: HomeLayout
---
<div class="">
    <!-- product name -->
    <div style="background-Color: #222222">
        <div class="lg:max-w-5xl mx-auto">
            <div class="flex justify-center items-center" style="height: 21rem">
                <div class="px-10 lg:px-0">
                    <div class="flex items-center">
                        <img :src="$withBase('/product-logo.png')" alt="product logo">
                        <div class="pl-3 lg:pl-8">
                            <div class="text-white text-xl lg:text-4xl">Picsee - 看图 & 截图 for iMac</div>
                            <div class="text-white text-sm lg:text-lg pt-3">专业的图片批量编辑器、照片整理、Markdown图床工具</div>
                            <img class="pt-4" :src="$withBase('/mac-app-store.png')" alt="mac app store">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- product func breif -->
    <div class="" style="">
        <div class="lg:max-w-5xl mx-auto">
            <div class="flex flex-col lg:flex-row justify-between items-center px-10 py-6">
                <div style="" class="flex justify-between lg:pr-8">
                    <div style="" class="flex flex-col items-center pr-2 lg:pr-8">
                        <img style="width: 42px" class="pt-3" :src="$withBase('/img_clearup.png')" alt="clear up">
                        <div class="text-lg py-3">照片整理</div>
                        <div style="" class="text-base text-gray-600 text-center">通过标签、时间、地点、格式、任务、文件夹等快速的整理归类照片。</div>
                    </div>
                    <div style="" class="flex flex-col items-center">
                        <img style="width: 40px" class="pt-3" :src="$withBase('/img_snip.png')" alt="snip">
                        <div class="text-lg py-3">屏幕截图</div>
                        <div style="" class="text-base text-gray-600 text-center">快速截图、标注、添加箭头，马赛克，进行分享，提高工作效率。</div>
                    </div>
                </div>
                <div style="" class="flex justify-between items-center">
                    <div style="" class="flex flex-col items-center pr-2 lg:pr-8">
                        <img style="width: 36px" class="pt-3" :src="$withBase('/img_edit.png')" alt="edit">
                        <div class="text-lg py-3">图片编辑</div>
                        <div style="" class="text-base text-gray-600 text-center">修改尺寸、GPS、拍摄时间，进行裁剪、加外壳、水印，批量编辑导出，一流的生产力工具。</div>
                    </div>
                    <div style="" class="flex flex-col items-center">
                        <img style="width: 46.3px" class="pt-3" :src="$withBase('/img_bed.png')" alt="bed">
                        <div class="text-lg pt-5 pb-3">图床分享</div>
                        <div style="" class="text-base text-gray-600 text-center">自动上传图片、保存Markdown链接，给你前所未有的插图体验，名副其实的图床神器。</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- photo clear up -->
    <div class="">
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
    <div class="">
        <div class="lg:max-w-5xl mx-auto">
            <div class="border-solid border-t"></div>
            <div class="flex flex-col lg:flex-row justify-between items-start">
                <div class="pt-5 lg:pt-8 pl-4">
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
                        <li>支持重复调整截图区域、窗口截图</li>
                        <li>复制到剪切板、保存截图、分享截图生成链接</li>
                    </ul>
                </div>
                <img class="py-5 lg:py-8 px-4" :src="$withBase('/photo_snip.png')" alt="clearup">
            </div>
        </div>
    </div>
    <!-- photo edit -->
    <div class="">
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
    <div class="">
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
                        <li class="font-bold">支持8种图床
                            <ul class="pl-5 text-sm" style="list-style-type: circle">
                                <li>微博、七牛</li>
                                <li>腾讯云、阿里云、又拍云</li>
                                <li>Imgur、Flickr、Amazon S3</li>
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
    <!-- more feature -->
    <div class="">
        <div class="lg:max-w-5xl mx-auto">
            <div class="border-solid border-t"></div>
            <div class="flex">
                <div class="py-8 pl-4">
                    <div class="text-2xl">更多特性</div>
                    <ul class="list-disc text-base text-gray-700 pl-10 pt-3">
                        <li>支持拖拽移动图片、文件夹，有效率的归类管理图片</li>
                        <li>支持开机自启动；截图、导出、编辑等快捷键的设置</li>
                        <li>支持JPEG、JPEG2000、TIFF、BMP、PNG格式，以及各种RAW格式图片的查看处理</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>