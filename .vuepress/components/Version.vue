<template>
  <div class="flex flex-col min-h-screen">
    <Nav/>
    <div style="max-width: 740px;margin: 0 auto;" class="py-8 px-6 pb-24 flex-grow content">

        <div>

            <button class="border-2 py-2 px-4 font-bold rounded" 
                    :class="{'bg-purple-500 text-white border-transparent': isSelected(0)}" 
                    v-on:click="clickOS(0)">Mac</button>

            <button class="ml-10 border-2 py-2 px-4 font-bold rounded" 
                    :class="{'bg-purple-500 text-white border-transparent': isSelected(1)}" 
                    v-on:click="clickOS(1)">Win</button>

        </div>

        <div>
            <Content slot-key="Mac" :class="{'hidden': !isSelected(0)}"/>
            <Content slot-key="Win" :class="{'hidden': !isSelected(1)}"/>
        </div>
        
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
    name: "Version",
    data: function () {
        return {
            os: 0
        }
    },
    methods: {
        clickOS(os) {
            this.os = os
        },
        isSelected(os) {
            return this.os == os
        }
    },
};
</script>

<style lang="stylus" scoped>
@import '../styles-1/custom.styl';
@media screen and (min-width: 960px){
    .content{
        min-width : 740px;
    }
}
</style>