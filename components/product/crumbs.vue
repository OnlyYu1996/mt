<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a :href="'/products?keyword='+keyword+'&city='+city">{{ city }}{{ decodeURIComponent(keyword) }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="less" scope>
.m-crumbs {
  span {
    font-size: 12px;
    font-weight: 400;
    .el-breadcrumb__inner {
      &:hover {
        color: #fe8c00;
      }
    }
  }
}
</style>
