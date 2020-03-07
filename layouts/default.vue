<template>
  <el-container>
    <el-header class="com-header" height="auto">
      <my-header></my-header>
    </el-header>
    <el-main class="com-main">
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <my-footer/>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from "@/components/public/header/index.vue";
import MyFooter from "@/components/public/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>
<style lang="less" scoped>
@import "../assets/css/default.less";
@import "../assets/icon/iconfont.css";
.com-header {
  font-size: 12px;
  background: #f8f8f8;
  padding: 0;
}
.com-main {
  overflow: visible;
}
</style>
