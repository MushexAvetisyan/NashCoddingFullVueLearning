<template>
  <div class="app">
    <div class="bind">
      <h1>BINDING LINK</h1>
      <h3><a v-bind:href="linkUrl" target="_blank">Go To Google with v-bind:href</a></h3>
      <h3><a v-bind:href="linkUrl" target="_blank">Go To Google with short binding syntax :href</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkUrl: "https://google.com",
  }),
};
</script>

<style scoped lang="scss">
.bind{
  margin-top: 50px;
}
</style>
