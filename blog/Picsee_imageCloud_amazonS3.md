---
layout: BlogPost
date: 2018-11-22
title: Picsee中Amazon S3图床配置
tags: ["图床"]
---

[Amazon S3](https://amazonaws-china.com/cn/s3/)专为从任意位置存储和检索任意数量的数据而构建的对象存储。.....<!-- more -->

![amazon](./images/Picsee_imageCloud_AmazonS3/Amazon.png)

## 配置说明
配置前，先注册，在[官方首页](https://amazonaws-china.com/cn/s3/)注册登录成功后，进入AWS管理控制台。获取相关的配置信息。

![register](./images/Picsee_imageCloud_AmazonS3/register.png)

### 名称：
**名称**：可以填入任何字符，唯一标识这个配置。

### AccessKey和SecretKey
**AccessKey**和**SecretKey**:AWS API请求的重要凭证，进入控制台后，在账户名称下拉菜单中点击**My Security Credentials**进入安全凭证管理面板。在访问密匙中，创建新的访问秘匙，并请记录访问秘钥ID(AccessKey)和私有访问密匙(SecretKey).**注意保管，不要泄露**。

![keys](./images/Picsee_imageCloud_AmazonS3/keys.png)

## 存储空间和地域节点
**存储空间**和**地域节点**：Amazon S3以存储桶的形式管理存储空间，并以它为容器管理上传的图片文件。因此，需要创建存储桶，每个存储桶有一个区域。进入控制台后，在所有服务中找到存储，在存储中找到S3，点击进入，在Amazon S3的左侧导航面板中，点击存储桶,在右侧弹出的管理面板中，可以创建存储桶和查看以往创建的存储桶的信息。在创建对话框中，设置存储桶名称（**存储空间**）的名称，并选择相应的区域(**地域节点**)，勾选相应的公开访问策略，创建存储桶后，记录名称和所属区域，填入Picsee的配置中。

![bucket](./images/Picsee_imageCloud_AmazonS3/bucket.png)

### 目录
**目录**：可空，即上传的图片文件在存储桶哪个的文件夹中。

### 域名
**域名**，Amazon S3为每一个存储桶提供了一个域名，以访问上传的图片。域名可以在存储桶的属性面板中找到。

![domain](./images/Picsee_imageCloud_AmazonS3/domain.png)

## 效果：
添加Amazon S3账户后，在Picsee偏好设置的导出配置中，设置为默认导出，导出图片文件后，在Amazon S3的存储桶/对象面板中，可以找到相应的图片。

![result](./images/Picsee_imageCloud_AmazonS3/result.png)

## 联系
- 详细介绍：[https://picsee.chitaner.com](https://picsee.chitaner.com)
- 邮件联系：[office.chitaner@gmail.com](mailto:office.chitaner@gmail.com)
- Telegram: [(https://t.me/joinchat/LLvGKBYvdMtz6z7SgYxJUQ)](https://t.me/joinchat/LLvGKBYvdMtz6z7SgYxJUQ)
- QQ群：663988917