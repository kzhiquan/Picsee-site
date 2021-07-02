---
layout: BlogPost
date: 2021-07-01
title: Mac上设置默认打开程序
tags: ["看图"]
---

经常有用户问起，怎么设置图片的默认打开方式为Picsee。这里介绍两种方法，一种通过界面操作设置，但局限于一次只能设置一种格式，如果一次性想设置多个格式，是比较繁琐的。......<!-- more -->另一种方式通过命令行操作，支持一次设置多个格式的默认打开程序，比较灵活，但有点繁琐。

## 界面操作设置（一次只能设置一种格式）
鼠标移动到要修改默认打开程序的图片文件上，例如"例子.jpg", 鼠标右键，在弹出的菜单中点击”显示简介“，如下图。
![右键菜单.png](./images/Default_open/rightMenu.png)

在显示简介中，在打开方式中，选择Picsee.app, 然后点击全部更改，关闭显示简介，这样，这种格式设置成Picsee默认打开就设置完成，如下图。
![简介.png](./images/Default_open/fileIntroduce.png)

## 命令行设置（一次设置多个格式）
这种设置方式，需要借助命令行工具。步骤如下：

- 打开命令行（终端）工具。
- 安装包管理工具[Homebrew](https://brew.sh/index_zh-cn)，复制下面这行代码到终端中，回车执行。（安装过的请略过）

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 安装[duti](https://github.com/moretension/duti)工具，一个修改文件默认打开程序的命令行工具。复制下面这行代码到终端中，回车执行。（安装过的请略过）

```bash
brew install duti
```

- 点击配置文件:<a href="/blog/images/Default_open/duti_picsee.config" download>duti_picsee.config</a>，下载duti的执行参数配置文件。
- 执行duti命令，修改Picsee欲关联格式的默认打开方式。复制下面这行代码到终端中，并把“<.../duti_picsee.config>”替换为duti_picsee.config全路径名称，回车执行，或者直接在终端输入"duti "(注意duti后面有一个空格), 再直接拖拽下载到的duti_picsee.config到终端里，回车执行。

```bash
duti <.../duti_picsee.config>
```

- 设置完成。



### duti_picsee.config配置文件说明

[duti_picsee.config](./images/Default_open/duti_picsee.config)文件如下，也可根据自行需求修改。

```bash
# 一行代表一种格式的设置, 此文件最后一行必须是空行, # 表示注释行
# 编辑于2021/07/02
#
# 图片格式
#
# 格式: .dng
me.zhiquan.mac.Picsee    com.adobe.raw-image  all
#
# 格式: .psd  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    com.adobe.photoshop-image  all
#
# 格式: .cr2
me.zhiquan.mac.Picsee    com.canon.cr2-raw-image  all
#
# 格式: .ico
me.zhiquan.mac.Picsee    com.microsoft.ico  all
#
# 格式: .tga
me.zhiquan.mac.Picsee    com.truevision.tga-image  all
#
# 格式: .raf
me.zhiquan.mac.Picsee    com.fuji.raw-image  all
#
# 格式: .exr
me.zhiquan.mac.Picsee    com.ilm.openexr-image  all
#
# 格式: .tiff
me.zhiquan.mac.Picsee    public.tiff  all
#
# 格式: .pict
me.zhiquan.mac.Picsee    com.apple.pict  all
#
# 格式: .nef
me.zhiquan.mac.Picsee    com.nikon.raw-image  all
#
# 格式: .jpeg
me.zhiquan.mac.Picsee    public.jpeg  all
#
# 格式: .dds
me.zhiquan.mac.Picsee    com.microsoft.dds  all
#
# 格式: .pbm
me.zhiquan.mac.Picsee    public.pbm  all
#
# 格式: .heif
me.zhiquan.mac.Picsee    public.heif  all
#
# 格式: .jp2
me.zhiquan.mac.Picsee    public.jpeg-2000  all
#
# 格式: .pic
me.zhiquan.mac.Picsee    public.radiance  all
#
# 格式: .sgi
me.zhiquan.mac.Picsee    com.sgi.sgi-image  all
#
# 格式: .gif
me.zhiquan.mac.Picsee    com.compuserve.gif  all
#
# 格式: .nrw
me.zhiquan.mac.Picsee    com.nikon.nrw-raw-image  all
#
# 格式: .heic
me.zhiquan.mac.Picsee    public.heic  all
#
# 格式: .bmp
me.zhiquan.mac.Picsee    com.microsoft.bmp  all
#
# 格式: .pbm
me.zhiquan.mac.Picsee    net.sourceforge.netpbm.netpbm-image  all
#
# 格式: .rw2
me.zhiquan.mac.Picsee    com.panasonic.rw2-raw-image  all
#
# 格式: .png
me.zhiquan.mac.Picsee    public.png  all
#
# 格式: .pef
me.zhiquan.mac.Picsee    com.pentax.raw-image  all
#
# 格式: .orf
me.zhiquan.mac.Picsee    com.olympus.raw-image  all
#
# 格式: .webp
me.zhiquan.mac.Picsee    public.webp  all
#
# 格式: .svg
me.zhiquan.mac.Picsee    public.svg-image  all
#
# 视频格式: 默认都是关闭
#
# 格式: .mkv  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    io.iina.mkv  all
#
# 格式: .3gp  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.3gpp  all
#
# 格式: .mts  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.avchd-mpeg-2-transport-stream  all
#
# 格式: .avi  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.avi  all
#
# 格式: .mp4  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.mpeg-4  all
#
# 格式: .wtv  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    io.iina.wtv  all
#
# 格式: .ogm  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    org.xiph.ogv  all
#
# 格式: .mxf  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    org.smpte.mxf  all
#
# 格式: .hevc  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    io.mpv.hevc  all
#
# 格式: .mov  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    com.apple.quicktime-movie  all
#
# 格式: .vob  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    io.iina.vob  all
#
# 格式: .wmv  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    com.microsoft.windows-media-wmv  all
#
# 格式: .mpeg  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.mpeg  all
#
# 格式: .m4v  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    com.apple.m4v-video  all
#
# 格式: .flv  默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    com.adobe.flash.video  all
#
# 格式: .3g2 默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.3gpp2  all
#
# 格式: .webm 默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    org.webmproject.webm  all
#
# 格式: .m2v 默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.mpeg-2-video  all
#
# 格式: .ts 默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    public.mpeg-2-transport-stream  all
#
# 格式: .ogm 默认是关闭的, 如果想开启去掉"# "
# me.zhiquan.mac.Picsee    org.xiph.ogv  all
#
# 如果需要添加其他格式，复制一行，修改"public.png"为对应格式的UTI, UTI通过mdls命令获取
#


```

### 参考命令

1. 查看某个格式的默认打开程序：

```bash
duti -x sag
```

2. 查看某个文件的UTI：

```bash
mdls test.txt
```

### 参考文章

- [设置 Mac 下文件的默认打开程序 — duti 详解](https://segmentfault.com/a/1190000004395085)