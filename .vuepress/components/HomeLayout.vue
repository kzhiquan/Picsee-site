<template>
  <div class="relative min-h-full">
    <Nav/>
    <div class="w-full pb-24">
      <div class="">

        <ProductHeader/>

        <ProductBriefFunc/>

        <ProductCarousel class="mt-8"/>

        <ProductFeatureDetail
            v-for="productFunc in productFuncs"
            v-bind:title="productFunc.title"
            v-bind:description="productFunc.description"
            v-bind:position="productFunc.position"
            v-bind:routerHash="productFunc.routerHash"
            v-bind:features="productFunc.features"
            class="mt-16"
        />

        <ProductMoreFeature 
            v-bind:title="moreFeatures.title"
            v-bind:items="moreFeatures.items"
            class="mt-20" />
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
import ProductFeatureDetail from "./ProductFeatureDetail"

export default {
    components: { Nav, Footer, ProductHeader, ProductBriefFunc, ProductCarousel, ProductMoreFeature, ProductFeatureDetail },
    name: "Layout",
    data: function () {
        return {
            productFuncs: [
                { 
                    title: '采集收藏', 
                    description: '支持各种各式的收藏采集，随时定格你眼前的画面，保存灵感。', 
                    position: 'Left',
                    routerHash: 'home_collect',
                    features: [
                        { 
                            num: 0, 
                            thumb: '/featureDetail/collect/collect_chrome.png', 
                            title: '收藏插件', 
                            show: '/featureDetail/collect/collect_chrome.gif', 
                            showPlaceHolder: '/featureDetail/collect/collect_chrome_s.jpg', 
                            description: '安装浏览器插件，支持在网页上拖拽、右键、全页面、批量收藏，高效便捷。'
                        },
                        {
                            num: 1, 
                            thumb: '/featureDetail/collect/collect_screenshot.png', 
                            show: '/featureDetail/collect/collect_screenshot.gif', 
                            showPlaceHolder: '/featureDetail/collect/collect_screenshot_s.jpg', 
                            title: '截图标注', 
                            description: '截图标注随时记录下漂亮的设计想法，支持长截图，即滚动截图、马赛克、高亮、测距等。'
                        },
                        {
                            num: 2, 
                            thumb: '/featureDetail/collect/collect_drag.png', 
                            title: '拖拽添加', 
                            show: '/featureDetail/collect/collect_drag.gif', 
                            showPlaceHolder: '/featureDetail/collect/collect_drag_s.jpg', 
                            description: '直接拖放素材到Picsee, 进行快速的收藏。'
                        },
                        {
                            num: 3, 
                            thumb: '/featureDetail/collect/collect_import.png', 
                            show: '/featureDetail/collect/collect_import.gif', 
                            showPlaceHolder: '/featureDetail/collect/collect_import_s.jpg', 
                            title: '导入外部资源', 
                            description: '支持本地/网路文件夹、eagle素材包、花瓣面板的直接导入。'
                        },
                    ]
                },
                { 
                    title: '整理标记', 
                    description: '针对繁杂而庞多的素材，Picsee通过多种分类方法，归并整理后，井井有条。', 
                    position: 'Left',
                    routerHash: 'home_tidy',
                    features: [
                        { 
                            num: 0, 
                            thumb: '/featureDetail/tidy/tidy_tag.png', 
                            title: '标签', 
                            show: '/featureDetail/tidy/tidy_tag.gif', 
                            showPlaceHolder: '/featureDetail/tidy/tidy_tag_s.jpg', 
                            description: '建立标签体系，为素材添加标签，快速定位, 支持“一对多”的整理方法。'
                        },
                        {
                            num: 1, 
                            thumb: '/featureDetail/tidy/tidy_folder.png', 
                            show: '/featureDetail/tidy/tidy_folder.gif', 
                            showPlaceHolder: '/featureDetail/tidy/tidy_folder_s.jpg', 
                            title: '文件夹', 
                            description: '与资源管理器融合，不拷贝，监听文件变化，双向同步关联，支持“一对一”的整理方式。'
                        },
                        {
                            num: 2, 
                            thumb: '/featureDetail/tidy/tidy_star.png', 
                            title: '标星/注释', 
                            show: '/featureDetail/tidy/tidy_star.gif', 
                            showPlaceHolder: '/featureDetail/tidy/tidy_star_s.jpg', 
                            description: '在素材旁记录所思所想，标明星级。'
                        },
                        {
                            num: 3, 
                            thumb: '/featureDetail/tidy/tidy_smartFolder.png', 
                            show: '/featureDetail/tidy/tidy_smartFolder.gif', 
                            showPlaceHolder: '/featureDetail/tidy/tidy_smartFolder_s.jpg', 
                            title: '智能文件夹/任务', 
                            description: '根据名称、标签、颜色、尺寸、相似性等属性建立规则分类，提供快速入口。'
                        },
                    ]
                },
                { 
                    title: '查找查看', 
                    description: '搜索、排序、多条件筛选、多属性分栏、一触即达，沉浸、漫画式浏览。', 
                    position: 'Left',
                    routerHash: 'home_look',
                    features: [
                        { 
                            num: 0, 
                            thumb: '/featureDetail/look/look_search.png', 
                            title: '搜索', 
                            show: '/featureDetail/look/look_search.gif', 
                            showPlaceHolder: '/featureDetail/look/look_search_s.jpg', 
                            description: '支持通过关键字、颜色查找图片。'
                        },
                        {
                            num: 1, 
                            thumb: '/featureDetail/look/look_filter.png', 
                            show: '/featureDetail/look/look_filter.gif', 
                            showPlaceHolder: '/featureDetail/look/look_filter_s.jpg', 
                            title: '筛选', 
                            description: '支持形状、尺寸、格式、来源、注释、标签等维度进行组合筛选。'
                        },
                        {
                            num: 2, 
                            thumb: '/featureDetail/look/look_section.png', 
                            title: '分栏', 
                            show: '/featureDetail/look/look_section.gif', 
                            showPlaceHolder: '/featureDetail/look/look_section_s.jpg', 
                            description: '支持首字母、格式、年、月、日、城市、国家、大小分栏。'
                        },
                        {
                            num: 3, 
                            thumb: '/featureDetail/look/look_browser.png', 
                            show: '/featureDetail/look/look_browser.gif', 
                            showPlaceHolder: '/featureDetail/look/look_browser_s.jpg', 
                            title: '浏览', 
                            description: '支持网格/自适应/瀑布流式布局，沉浸式、漫画式看图。'
                        },
                    ]
                },
                { 
                    title: '分享协同', 
                    description: '图床分享素材链接，简单高效，云盘、iCloud同步素材，跨设备协作。', 
                    position: 'Left',
                    routerHash: 'home_share',
                    features: [
                        { 
                            num: 0, 
                            thumb: '/featureDetail/share/share_bed.png', 
                            title: '图床', 
                            show: '/featureDetail/share/share_bed.gif', 
                            showPlaceHolder: '/featureDetail/share/share_bed_s.jpg', 
                            description: '支持阿里云、七牛云、SM.MS等10种图床，分享链接、撰写Markdown插入图片的得力助手。'
                        },
                        {
                            num: 1, 
                            thumb: '/featureDetail/share/share_disk.png', 
                            show: '/featureDetail/placeHolder_feature_show.jpg', 
                            title: '云盘', 
                            description: '通过坚果云、Dropbox等云盘同步文件中的素材资源，不增减同步内容。'
                        },
                        {
                            num: 2, 
                            thumb: '/featureDetail/share/share_icloud.png', 
                            title: 'iCloud', 
                            show: '/featureDetail/placeHolder_feature_show.jpg', 
                            description: '标签、星级、注释、管理文件夹等描述信息，数据量小，iCloud同步后，重新绑定，多机协同。'
                        }
                    ]
                }
            ],

            moreFeatures: {
                title: '更多特性',
                items: [
                    {
                        title: '批量重命名',
                        thumb: '/featureMore/feature_rename.png', 
                        description: '支持根据尺寸、时间、光圈、焦距、镜头等属性，批量重命名。',
                    },
                    {
                        title: '寻找相似图片',
                        thumb: '/featureMore/feature_similarity.png', 
                        description: '根据图片布局、纹理布局的相似度，寻找相近的图片.',
                    },
                    {
                        title: '支持众多格式',
                        thumb: '/featureMore/feature_knife.png',
                        description: '支持像素、矢量、RAW图片、视频、文档等50多种格式的预览或管理。',
                        link:'/blog/支持格式说明.html'
                    },
                    {
                        title: '设置默认打开程序',
                        thumb: '/featureMore/feature_open.png',
                        description: '怎么设置默认打开程序为Picsee？',
                        link:'/blog/Mac上设置默认打开程序.html'
                    }

                ]
            }
        }
    },
};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>