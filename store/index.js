import Vue from "vue";
import Vuex from "vuex";
import geo from "./geo";
import home from "./home";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      // 用于在服务端操作 store ,Nuxt,js调用它的时候会将页面的context上下文对象作为第2个参数传给它（服务端调用）
      async nuxtServerInit({ commit }, { req, app }) {
        const {
          status,
          data: { province, city }
        } = await app.$axios.get("/geo/getPosition");
        commit(
          "geo/setPosition",
          status === 200 ? { city, province } : { city: "", province: "" }
        );
        const {
          status: status2,
          data: { result }
        } = await app.$axios.get("/search/hotPlace", {
          params: {
            city: app.store.state.geo.position.city.replace("市", "")
          }
        });
        commit("home/setHotPlace", status2 === 200 ? result : []);
      }
    }
  });

export default store;
