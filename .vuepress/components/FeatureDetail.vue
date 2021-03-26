<template>
    <div class="relative py-1" v-on:click="$emit('gotoFeature', num)">
        <dt>
            <div class="absolute flex items-center justify-center h-12 w-12">
                <img :src="$withBase(thumb)" alt="rename">
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{title}}</p>
        </dt>
        <dd class="mt-1 ml-16 text-sm text-gray-800">
            {{description}}
        </dd>
    </div>
</template>

<script>
export default {
    props: {
        num: Number,
        thumb: String,
        title: String,
        description: String
    },
};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
</style>