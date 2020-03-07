<template>
  <div class="m-hot">
    <h3>热门城市：</h3>
    <div class="hotContainer">
      <a
       href="/"
        v-for="item in list"
        :key="item.id"
        @click="changeCity(item)"
      >{{item.city==='市辖区'?item.province:item.city}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    changeCity(val) {
      let position={}
      if(val.city==='市辖区'){
        position.city=val.province
        position.id=val.id
        position.province=val.province
      }else{
        position=val
      }
      sessionStorage.setItem("position",JSON.stringify(position))
    }
  },
  async mounted() {
    let {
      status,
      data: { hots }
    } = await this.$axios.get("/geo/hotCity");
    if (status === 200) {
      this.list = hots.map(item=>{
          return {
              id:item.id,
              city:item.name,
              province:item.province
          }
      })
    }
  }
};
</script>
<style lang='less' scoped>
.m-hot {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
  h3 {
    font-size: 16px;
    color: #333;
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
  }
  .hotContainer {
    font-size: 14px;
    vertical-align: top;
    display: inline-block;
    margin-top: 2px;
    max-width: 900px;
    a {
      margin: 0 20px;
      color: #666;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>