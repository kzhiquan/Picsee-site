---
layout: BlogPost
date: 2018-11-22
title: Picsee中码云gitee图床配置
tags: ["图床"]
---

[码云gitee](https://gitee.com)是国内的代码托管平台，被挖掘出来做图床，可以免费使用，没有容量的限制，配置较简单，速度也比较快，但请不要滥用。.....
<!-- more -->

![gitee](./images/Picsee_imageCloud_gitee/gitee.png)

## 配置说明

### 名称
**名称**：可以填入任何字符，唯一标识这个配置。

### 用户名
**用户名**：gitee的用户名。注册码云gitee成功后的用户名称。例如我的个人主页[https://gitee.com/chitaner](https://gitee.com/chitaner), 用户名就是：**chitaner**。

![profile](./images/Picsee_imageCloud_gitee/profile.png)

### 仓库名
**仓库名**：存储上传文件的仓库名称。如果没有，则需先创建。在https://gitee.com页面，点击**创建仓库**按钮，出来创建页面，输入仓库名称，点击创建。

![仓库名](./images/Picsee_imageCloud_gitee/repository.png)

### 分支
**分支**：是选定仓库的分支名称，默认是**master**, 在仓库的主页面，例如我创建的仓库名为：**image-cloud**, 则仓库的主页面为[https://gitee.com/chitaner/image-cloud](https://gitee.com/chitaner/image-cloud),可以找到对应的分支名称。

![branch](./images/Picsee_imageCloud_gitee/branch.png)

### Token
**Token**: gitee私人令牌。可以在[https://gitee.com/profile/personal_access_tokens/new](https://gitee.com/profile/personal_access_tokens/new)创建，输入描述, 勾选projects权限, 点击提交，复制生成的token填入。**注意token的存储，不要泄露**

![token](./images/Picsee_imageCloud_gitee/token.png)

### 域名
**域名**：默认为空，不用设置。如果配置了自定义的域名，可以填入。

### 保存路径
**保存路径**：图片文件在仓库中的存储路径和名称设置。

## 效果：
添加码云gitee配置后，在Picsee偏好设置的导出配置中，设置为默认导出，导出图片文件后，在gitee仓库中，可以找到相应的图片。

![result](./images/Picsee_imageCloud_gitee/result.png)

## 联系
- 详细介绍：[https://picsee.chitaner.com](https://picsee.chitaner.com)
- 邮件联系：[office.chitaner@gmail.com](mailto:office.chitaner@gmail.com)
- Telegram: [(https://t.me/joinchat/LLvGKBYvdMtz6z7SgYxJUQ)](https://t.me/joinchat/LLvGKBYvdMtz6z7SgYxJUQ)
- QQ群：663988917