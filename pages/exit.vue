<template>
  <div class="exit"></div>
</template>

<script>
export default {
  layout: "blank",
  middleware: async self => {
    let { status, data } = await self.$axios.get("/users/exit");
    if (status === 200 && data.code === 0) {
      // self.app.router.go(-1)
      location.href='/'
    }
  }
};
</script>
<style lang='less' scoped>
</style>