<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，
      <span class="username">{{user}}</span>
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登陆</nuxt-link>
      <nuxt-link to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  mounted() {
    this.$axios.get("/users/getUser").then(({ status, data: { user } }) => {
      if (status === 200) {
        this.user = user;
        this.$store.commit("geo/setUser", user);
      }
    });
  }
};
</script>
<style lang="less" scoped>
.m-user {
  padding-top: 12px;
  .username {
    color: #fe8c00;
  }
  .login {
    color: #fe8c00;
    margin-right: 4px;
  }
}
</style>