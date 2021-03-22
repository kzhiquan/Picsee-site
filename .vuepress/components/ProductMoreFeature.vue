<template>
<div class="lg:max-w-5xl mx-auto" style="">

 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="lg:text-center">
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        更多特性
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <img :src="$withBase('/feature_rename.png')" alt="rename">
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">批量重命名</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            支持根据尺寸、时间、光圈、焦距、镜头等属性，批量重命名。
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <img :src="$withBase('/feature_similarity.png')" alt="rename">
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">寻找相似图片</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            根据图片布局、纹理布局的相似度，寻找相近的图片。查看详情
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <img :src="$withBase('/feature_knife.png')" alt="rename">
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">支持众多格式</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            支持像素、矢量、RAW图片、视频、文档等50多种格式的预览或管理。查看详情。
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: outline/annotation -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile notifications</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
      </dl>
    </div>

  </div>
    
</div>
</template>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>