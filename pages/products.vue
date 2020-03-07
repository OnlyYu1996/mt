<template>
  <el-row class="page-product">
    <el-col :span="19" class="crumb">
      <crumbs :keyword="keyword" :city="city" />
      <categroy :types="types" :areas="areas" />
      <list :list="list" />
    </el-col>
    <el-col :span="5">
      <amap v-if="point.length" :width="230" :height="230" :point="point" />
    </el-col>
  </el-row>
</template>

<script>
import Crumbs from "@/components/product/crumbs.vue";
import Categroy from "@/components/product/categroy.vue";
import List from "@/components/product/list.vue";
import Amap from "@/components/public/map.vue";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Amap
  },
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: "",
      point: [],
      city: ""
    };
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios
  }) {
    let keyword = query.keyword;
    let city = query.city;
    let {
      status,
      data: { count, pois }
    } = await $axios.get("/search/resultsByKeywords", {
      params: {
        keyword,
        city
      }
    });
    let {
      status: status2,
      data: { areas, types }
    } = await $axios.get("/categroy/crumbs", {
      params: {
        city
      }
    });
    if (status === 200 && count > 0 && status2 === 200) {
      return {
        list: pois
          .filter(item => item.photos.length)
          .map(item => {
            return {
              type: item.type,
              img: item.photos[0].url,
              name: item.name,
              comment: Math.floor(Math.random() * 10000),
              rate: Number(item.biz_ext.rating),
              price: Number(item.biz_ext.cost),
              scene: item.tag,
              tel: item.tel,
              status: "可订明日",
              location: item.location,
              module: item.type.split(";")[0]
            };
          }),
        keyword,
        city,
        areas: areas.filter(item => item.type !== "").slice(0, 5),
        types: types.filter(item => item.type !== "").slice(0, 5),
        point: (pois.find(item => item.location).location || "").split(",")
      };
    }
  }
};
</script>
<style lang='less' scoped>
.page-product {
  margin: 0 auto;
  width: 1190px;
  padding-top: 10px;
  .crumb {
    margin: 10px 0;
    color: #222;
  }
}
</style>