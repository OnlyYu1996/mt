<template>
  <div class="categroyContainer">
    <h3>按拼音首字母选择：</h3>
    <p>
      <a :href="'#city-'+item" v-for="item in list" :key="item">
        <span>{{item}}</span>
      </a>
    </p>
    <dl class="city-area" v-for="item in block" :key="item.title">
      <span :id="'city-'+item.title" class="city-label">{{item.title}}</span>
      <span>
        <a href="/" @click="changeCity(c)" v-for="c in item.city" :key="c">{{c}}</a>
      </span>
    </dl>
  </div>
</template>

<script>
import pyjs from "js-pinyin";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQUVWXYZ".split(""),
      block: []
    };
  },
  methods: {
    changeCity(city) {
      const json = {
        city
      };
      sessionStorage.setItem("position", JSON.stringify(json));
    }
  },
  async mounted() {
    let self = this;
    let block = [];
    let {
      status,
      data: { city }
    } = await self.$axios.get("/geo/city");
    if (status === 200) {
      let p,
        c,
        d = {};
      city.forEach(item => {
        p = pyjs
          .getFullChars(item.name)
          .toLocaleLowerCase()
          .slice(0, 1);
        c = p.charCodeAt(0);
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = [];
          }
          d[p].push(item.name);
        }
      });
      // 把对象转变成数组
      for (let [k, v] of Object.entries(d)) {
        block.push({
          title: k.toUpperCase(),
          city: v
        });
      }
      // 排序
      block.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
      self.block = block;
    }
  }
};
</script>
<style lang='less' scoped>
.categroyContainer {
  vertical-align: middle;
  padding: 30px 0;
  .city-area {
    padding: 13px 30px 13px 10px;
    border-radius: 10px;
    -webkit-transition: background-color 500ms;
    -ms-transition: background-color 500ms;
    transition: background-color 500ms;
    span {
      display: inline-block;
      max-width: 1064px;
      a {
        margin: 10px 20px;
        color: #666;
        display: inline-block;
        font-size: 14px;
      }
    }
    .city-label {
      box-sizing: border-box;
      vertical-align: top;
      padding-top: 10px;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #222222;
      font-size: 16px;
      background: #ffd000;
    }
    &:hover {
      background: #f8f8f8;
    }
  }
  h3 {
    font-size: 16px;
    color: #333;
    font-weight: 500;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    position: relative;
    top: 4px;
  }
  p {
    max-width: 1000px;
    font-size: 14px;
    vertical-align: top;
    display: inline-block;
    margin-top: 2px;
    span {
      font-size: 15px;
      margin: 0 17px;
      color: #666;
      display: inline-block;
      margin: 0 10px;
      width: 23px;
      height: 25px;
      line-height: 25px;
      padding-top: 2px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50%;
      &:hover {
        font-weight: 500;
        color: #222222;
        background: #f8f8f8;
      }
    }
  }
}
</style>