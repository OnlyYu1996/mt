<template>
  <div class="order-page"></div>
</template>

<script>
export default {
  async asyncData(ctx) {
    let {
      status,
      data: { code, list }
    } = await ctx.$axios.post("/oder/getOrders");
    if (status === 200 && code === 0 && list.length) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款"
          };
        }),
        cur: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款"
          };
        })
      };
    }
  }
};
</script>
<style lang='less' scoped>
</style>