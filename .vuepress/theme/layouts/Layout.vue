<template>
  <div class="flex flex-col h-full">
    <Nav class="top-0"/>
    <!--<Content class="flex-1 max-w-xl mx-auto leading-normal"/>-->
    <Content class="w-full"/>
    <Footer class="bottom-0"/>
  </div>
</template>

<script>
import Nav from "@theme/components/Nav";
import Footer from "@theme/components/Footer";
export default {
  components: { Nav, Footer },
  name: "Layout"
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>