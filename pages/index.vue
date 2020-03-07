<template>
  <div class="container">
    <el-row>
      <el-col :span="5">
        <emenu />
      </el-col>
      <el-col :span="19">
        <eleft />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <escenes />
        <emaoyan />
        <ezhenguo/>
        <erecommend/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from "@/components/index/menu.vue";
import Eleft from "@/components/index/left.vue";
import Escenes from "@/components/index/scenes.vue";
import Emaoyan from "@/components/index/maoyan.vue";
import Ezhenguo from "@/components/index/zhenguo.vue";
import Erecommend from "@/components/index/recommend.vue";
export default {
  components: {
    Emenu,
    Eleft,
    Escenes,
    Emaoyan,
    Ezhenguo,
    Erecommend
  }
};
</script>

<style lang="less">
@import "../assets/css/default.less";
@import "../assets/icon/iconfont.css";
.container {
  width: 1190px;
  margin: 0 auto;
}
</style>
