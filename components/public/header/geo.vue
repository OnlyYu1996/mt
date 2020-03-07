<template>
  <div class="m-geo">
    <i class="el-icon-location-outline" />
    {{city}}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[东莞 广州 佛山]
  </div>
</template>

<script>
export default {
  data(){
    return {
      city:""
    }
  },
  mounted(){
    this.city=sessionStorage.getItem("position")? JSON.parse(sessionStorage.getItem("position")).city: this.$store.state.geo.position.city
  },
};
</script>

<style lang="less" scoped>
.m-geo {
  padding-top: 12px;
  .changeCity {
    background: #f4f4f4;
    border: 1px solid #e5e5e5;
    padding: 0 2px;
    margin: 0 4px;
    border-radius: 2px;
  }
}
</style>