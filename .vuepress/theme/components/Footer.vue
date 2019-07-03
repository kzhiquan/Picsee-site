<template>
  <footer class="font-sans bg-black text-white py-8 px-4">
    <div class="text-grey-darker text-center">©2019 Yours truely. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    formateDate(date) {
      return moment(date).format("MMM Do YYYY")
    },
  },
};
</script>