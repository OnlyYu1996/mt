<template>
  <div class="header-container">
    <el-row :gutter="0" class="m-header">
      <el-col :span="6" class="header-left">
        <geo />
      </el-col>
      <el-col :span="10">
        <user />
      </el-col>
      <el-col :span="8" class="header-right">
        <nav-bar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from "./geo.vue";
import User from "./user.vue";
import NavBar from "./nav.vue";
export default {
  components: {
    Geo,
    User,
    NavBar
  }
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  background: #f8f8f8;
.m-header {
    width: 1190px;
    height: 40px;
    margin: 0 auto;
    position: relative;
    .header-left {
      float: left;
    }
    .header-right {
      float: right;
    }
  }
}
</style>