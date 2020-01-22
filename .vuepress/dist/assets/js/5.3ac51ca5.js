(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,8],{122:function(t,s,i){"use strict";i.r(s);var l={name:"Footer",methods:{isActive:function(t){return t==this.$route.fullPath}}},e=(i(89),i(0)),a=Object(e.a)(l,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("header",{staticClass:"bg-black text-indigo-200"},[i("nav",{staticClass:"flex items-center lg:max-w-5xl mx-auto py-3 px-10"},[i("ul",{staticClass:"flex"},t._l(t.$site.themeConfig.nav,function(s){return i("li",[i("router-link",{staticClass:"mr-6 hover:text-white",class:[t.isActive(s.link)?"text-white":""],attrs:{to:s.link}},[t._v("\n          "+t._s(s.text)+"\n        ")])],1)}),0)])])},[],!1,null,"30cd4abe",null);s.default=a.exports},124:function(t,s,i){"use strict";i.r(s);i(90);var l=i(0),e=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"font-sans bg-black text-white py-8 px-4 absolute bottom-0 inset-x-0"},[s("div",{staticClass:"text-grey-darker text-center"},[this._v("Copyright @2019 Powered by Picsee")])])}],!1,null,"3781e0f6",null);s.default=e.exports},201:function(t,s,i){"use strict";var l=i(91);i.n(l).a},208:function(t,s,i){"use strict";i.r(s);var l=i(122),e=i(124),a={components:{Nav:l.default,Footer:e.default},name:"Layout",methods:{anchorHashCheck:function(){if(window.location.hash===this.$route.hash){var t=document.getElementById(this.$route.hash.slice(1));t&&window.scrollTo(0,t.offsetTop)}}},mounted:function(){this.anchorHashCheck()}},c=(i(201),i(0)),r=Object(c.a)(a,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"relative min-h-full"},[i("Nav"),t._v(" "),i("div",{staticClass:"w-full pb-24"},[i("div",{},[i("div",{staticStyle:{"background-Color":"#222222"}},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"flex justify-center items-center",staticStyle:{height:"21rem"}},[i("div",{staticClass:"px-10 lg:px-0"},[i("div",{staticClass:"flex items-center"},[i("img",{attrs:{src:t.$withBase("/product-logo.png"),alt:"product logo"}}),t._v(" "),i("div",{staticClass:"pl-3 lg:pl-8"},[i("div",{staticClass:"text-white text-xl lg:text-4xl"},[t._v("Picsee - 看图 & 截图 for MacOS")]),t._v(" "),i("div",{staticClass:"text-white text-sm lg:text-lg pt-3"},[t._v("专业的图片批量编辑器、照片整理、Markdown图床工具")]),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://apps.apple.com/cn/app/picsee-%E7%9C%8B%E5%9B%BE-%E6%88%AA%E5%9B%BE/id1454805783?mt=12"}},[i("img",{staticClass:"pt-4",attrs:{src:t.$withBase("/mac-app-store.png"),alt:"mac app store"}})])])])])])])]),t._v(" "),i("div",{},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"flex flex-col lg:flex-row justify-between items-center px-10 py-6"},[i("div",{staticClass:"flex justify-between lg:pr-8"},[i("router-link",{staticClass:"flex flex-col items-center pr-2 lg:pr-8",attrs:{to:{hash:"#photo_clearup"}},nativeOn:{click:function(s){return t.anchorHashCheck(s)}}},[i("img",{staticClass:"pt-3",staticStyle:{width:"42px"},attrs:{src:t.$withBase("/img_clearup.png"),alt:"clear up"}}),t._v(" "),i("div",{staticClass:"text-lg py-3"},[t._v("照片整理")]),t._v(" "),i("div",{staticClass:"text-base text-gray-600 text-center"},[t._v("通过标签、时间、地点、格式、任务、文件夹等快速的整理归类照片。")])]),t._v(" "),i("router-link",{staticClass:"flex flex-col items-center",attrs:{to:{hash:"#photo_snip"}},nativeOn:{click:function(s){return t.anchorHashCheck(s)}}},[i("img",{staticClass:"pt-3",staticStyle:{width:"40px"},attrs:{src:t.$withBase("/img_snip.png"),alt:"snip"}}),t._v(" "),i("div",{staticClass:"text-lg py-3"},[t._v("屏幕截图")]),t._v(" "),i("div",{staticClass:"text-base text-gray-600 text-center"},[t._v("快速截图、标注、添加箭头，马赛克、滚动截图，进行分享，提高工作效率。")])])],1),t._v(" "),i("div",{staticClass:"flex justify-between items-center"},[i("router-link",{staticClass:"flex flex-col items-center pr-2 lg:pr-8",attrs:{to:{hash:"#photo_edit"}},nativeOn:{click:function(s){return t.anchorHashCheck(s)}}},[i("img",{staticClass:"pt-3",staticStyle:{width:"36px"},attrs:{src:t.$withBase("/img_edit.png"),alt:"edit"}}),t._v(" "),i("div",{staticClass:"text-lg py-3"},[t._v("图片编辑")]),t._v(" "),i("div",{staticClass:"text-base text-gray-600 text-center"},[t._v("修改尺寸、GPS、拍摄时间，进行裁剪、加外壳、水印，批量编辑导出，一流的生产力工具。")])]),t._v(" "),i("router-link",{staticClass:"flex flex-col items-center",attrs:{to:{hash:"#photo_bed"}},nativeOn:{click:function(s){return t.anchorHashCheck(s)}}},[i("img",{staticClass:"pt-3",staticStyle:{width:"46.3px"},attrs:{src:t.$withBase("/img_bed.png"),alt:"bed"}}),t._v(" "),i("div",{staticClass:"text-lg pt-5 pb-3"},[t._v("图床分享")]),t._v(" "),i("div",{staticClass:"text-base text-gray-600 text-center"},[t._v("自动上传图片、保存Markdown链接，给你前所未有的插图体验，名副其实的图床神器。")])])],1)])])]),t._v(" "),i("div",{attrs:{id:"photo_clearup"}},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"border-solid border-t"}),t._v(" "),i("div",{staticClass:"flex flex-col lg:flex-row justify-between items-start"},[i("img",{staticClass:"pb-0 pt-5 lg:py-5",attrs:{src:t.$withBase("/photo_clearup.png"),alt:"clearup"}}),t._v(" "),t._m(0)])])]),t._v(" "),i("div",{attrs:{id:"photo_snip"}},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"border-solid border-t"}),t._v(" "),i("div",{staticClass:"flex flex-col lg:flex-row justify-between items-start px-2"},[t._m(1),t._v(" "),i("img",{staticClass:"py-5 lg:py-8",attrs:{src:t.$withBase("/photo_snip.png"),alt:"clearup"}})])])]),t._v(" "),i("div",{attrs:{id:"photo_edit"}},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"border-solid border-t"}),t._v(" "),i("div",{staticClass:"flex flex-col lg:flex-row justify-between items-start"},[i("img",{staticClass:"pb-0 pt-5 lg:py-5",attrs:{src:t.$withBase("/photo_edit.png"),alt:"clearup"}}),t._v(" "),t._m(2)])])]),t._v(" "),i("div",{attrs:{id:"photo_bed"}},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"border-solid border-t"}),t._v(" "),i("div",{staticClass:"flex flex-col lg:flex-row justify-between items-start"},[t._m(3),t._v(" "),i("img",{staticClass:"py-4",attrs:{src:t.$withBase("/photo_bed.png"),alt:"clearup"}})])])]),t._v(" "),t._m(4)])]),t._v(" "),i("Footer")],1)},[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pt-0 pb-5 lg:pt-8 pl-4"},[i("div",{staticClass:"text-2xl"},[t._v("照片整理")]),t._v(" "),i("ul",{staticClass:"list-disc text-base text-gray-700 pl-10 pt-3"},[i("li",[t._v("以时间、地理、类型的方式展示和浏览图片")]),t._v(" "),i("li",[t._v("支持按文件名、扩展对图片进行搜索")]),t._v(" "),i("li",[t._v("以文件夹、标签对图片进行树状式的组织管理")]),t._v(" "),i("li",{staticClass:"font-bold"},[t._v("支持自定义标签")]),t._v(" "),i("li",[t._v("支持对系统图库、手机、相机等PTP设备中照片的管理")]),t._v(" "),i("li",[t._v("支持图片在空间、时间、大小、重复等维度归类整理导出")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pt-5 pl-2 lg:pt-8"},[i("div",{staticClass:"text-2xl"},[t._v("屏幕截图")]),t._v(" "),i("ul",{staticClass:"list-disc text-base text-gray-700 pl-10 pt-3"},[i("li",[t._v("丰富的画图工具\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("矩形、椭圆")]),t._v(" "),i("li",[t._v("直线、箭头")]),t._v(" "),i("li",[t._v("画笔、文字")])])]),t._v(" "),i("li",[t._v("高级标注工具\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("直线、矩形、椭圆马赛克")]),t._v(" "),i("li",[t._v("直线、矩形、椭圆高亮")]),t._v(" "),i("li",[t._v("距离、区域、文字、颜色标注")])])]),t._v(" "),i("li",{staticClass:"font-bold"},[t._v("撤销、重做、删除图元")]),t._v(" "),i("li",{staticClass:"font-bold"},[t._v("支持长截图，即滚动截图")]),t._v(" "),i("li",[t._v("支持重复调整截图区域、窗口截图")]),t._v(" "),i("li",[t._v("复制到剪切板、保存截图、分享截图生成链接")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"py-5 lg:pt-8 pl-4"},[i("div",{staticClass:"text-2xl"},[t._v("图片编辑")]),t._v(" "),i("ul",{staticClass:"list-disc text-base text-gray-700 pl-10 pt-3"},[i("li",[t._v("图片EXIF属性查看和修改")]),t._v(" "),i("li",[t._v("图片旋转、翻转")]),t._v(" "),i("li",[t._v("丰富的编辑工具\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("矩形、椭圆")]),t._v(" "),i("li",[t._v("直线、箭头")]),t._v(" "),i("li",[t._v("画笔、文字")])])]),t._v(" "),i("li",[t._v("高级的操作工具\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("水印、马塞克、高亮")]),t._v(" "),i("li",[t._v("裁剪、放大镜、外壳")]),t._v(" "),i("li",[t._v("距离、区域、文字、颜色标注")])])]),t._v(" "),i("li",{staticClass:"font-bold"},[t._v("所有对图片的操作都可保存成模版，且能批量应用")]),t._v(" "),i("li",[t._v("撤销、重做、导出")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pt-5 lg:pt-8 pl-4"},[i("div",{staticClass:"text-2xl"},[t._v("图床分享")]),t._v(" "),i("ul",{staticClass:"list-disc text-base text-gray-700 pl-10 pt-3"},[i("li",[t._v("灵活的图床导出方式\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("拖拽图片导出")]),t._v(" "),i("li",[t._v("使用服务导出")]),t._v(" "),i("li",[t._v("复制图片导出")])])]),t._v(" "),i("li",{staticClass:"font-bold"},[t._v("支持8种图床\n                              "),i("ul",{staticClass:"pl-5 text-sm",staticStyle:{"list-style-type":"circle"}},[i("li",[t._v("微博、七牛")]),t._v(" "),i("li",[t._v("腾讯云、阿里云、又拍云")]),t._v(" "),i("li",[t._v("Imgur、Flickr、Amazon S3")])])]),t._v(" "),i("li",[t._v("支持导出图床历史的查看和管理")]),t._v(" "),i("li",[t._v("支持导出格式、导出前压缩、清除EXIF元数据等个性化的设置")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[i("div",{staticClass:"lg:max-w-5xl mx-auto"},[i("div",{staticClass:"border-solid border-t"}),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"py-8 pl-4"},[i("div",{staticClass:"text-2xl"},[t._v("更多特性")]),t._v(" "),i("ul",{staticClass:"list-disc text-base text-gray-700 pl-10 pt-3"},[i("li",[t._v("支持拖拽移动图片、文件夹，有效率的归类管理图片")]),t._v(" "),i("li",[t._v("支持开机自启动；截图、导出、编辑等快捷键的设置")]),t._v(" "),i("li",[t._v("支持JPEG、JPEG2000、TIFF、BMP、PNG格式，以及各种RAW格式图片的查看处理")])])])])])])}],!1,null,"0578da58",null);s.default=r.exports},36:function(t,s,i){},37:function(t,s,i){},89:function(t,s,i){"use strict";var l=i(36);i.n(l).a},90:function(t,s,i){"use strict";var l=i(37);i.n(l).a},91:function(t,s,i){}}]);