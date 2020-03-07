<template>
  <div class="changeCity-page clearfix">
    <el-row class="select">
      <el-col :span="24">
        <iSelect />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
          <hot/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
          <categroy/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import iSelect from "@/components/changeCity/iselect";
import hot from "@/components/changeCity/hot";
import categroy from "@/components/changeCity/categroy";
export default {
  components: {
    iSelect,
    hot,
    categroy
  }
};
</script>
<style lang='less' scoped>
.changeCity-page {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
  .select {
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>