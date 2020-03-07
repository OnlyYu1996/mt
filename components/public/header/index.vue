<template>
  <div class="m-header">
    <top-bar class="top-bar clearfix"/>
    <search-bar class=" search-bar clearfix"/>
  </div>
</template>

<script>
import TopBar from "./topbar.vue";
import SearchBar from "./searchbar.vue";
export default {
  components: {
    TopBar,
    SearchBar
  }
};
</script>
<style lang="less" scoped>
.m-header {
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
</style>