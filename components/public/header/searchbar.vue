<template>
  <div class="searchContainer">
    <el-row class="m-header-searchbar">
      <el-col :span="12" class="search-left">
        <a href="/">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </el-col>
      <el-col :span="12" class="search-right">
        <el-input
          placeholder="搜索商家或地点"
          v-model="searchValue"
          @focus="showSearchList = true"
          @blur="showSearchList = false"
          @input="searchInput"
          @keyup.enter.native="search"
        ></el-input>
        <el-button type="primary" @click="search" class="searchBtn">
          <i class="el-icon-search"></i>
        </el-button>
        <div class="searchListContainet" v-show="showBlock">
          <dl class="hotPlace" v-show="!searchValue">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in $store.state.home.hotPlace" :key="index">
              <a
                :href="'/products?keyword='+encodeURIComponent(item.name)+'?city='+encodeURIComponent(city)"
              >{{item.name}}</a>
            </dd>
          </dl>
          <dl class="searchList" v-show="searchValue&&searchList[0]">
            <dd v-for="(item,index) in searchList" :key="index">
              <a
                :href="'/products?keyword='+encodeURIComponent(item.name)+'&city='+encodeURIComponent(city)"
              >{{item.name}}</a>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "searchbar",
  data() {
    return {
      // 搜索框搜索返回列表
      searchList: [],
      // 切换输入框搜索结果显示
      showSearchList: false,
      // 搜索框的内容
      searchValue: "",
      // 显示搜索内容
      showBlock: false,
      city: ""
    };
  },
  watch: {
    showSearchList(val) {
      const self = this;
      if (!val) {
        setTimeout(function() {
          self.showBlock = false;
        }, 200);
      } else {
        self.showBlock = true;
      }
    }
  },
  methods: {
    search() {
      const self = this;
      location.href =
        "/products?keyword=" +
        encodeURIComponent(self.searchValue) +
        "&city=" +
        encodeURIComponent(self.city);
    },
    searchInput: _.debounce(async function() {
      let self = this;
      let city = self.$store.state.geo.position.city.replace("市", "");
      self.searchList = [];
      let {
        status,
        data: { top }
      } = await self.$axios.get("/search/top", {
        params: {
          input: self.searchValue,
          city: "东莞"
        }
      });
      self.searchList = top.slice(0, 10);
    }, 300)
  },
  mounted() {
    this.city = sessionStorage.getItem("position")
      ? JSON.parse(sessionStorage.getItem("position")).city
      : this.$store.state.geo.position.city;
  }
};
</script>
<style lang="less" scoped>
.searchContainer {
  width: 1190px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 35px;
  .search-left {
    float: left;
    padding: 28px 60px 40px 0;
    font-size: 16px;
    min-width: 220px;
    height: 54px;
    box-sizing: content-box;
    vertical-align: sub;
    img {
      width: 126px;
      height: 46px;
    }
  }
  .search-right {
    float: left;
    padding-top: 28px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    .el-input {
      width: 85%;
      // border-radius: 10px;
      .el-input__inner {
        border-radius: 0px !important;
      }
    }
    .el-button {
      width: 14%;
      margin-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: #ffc300;
      border-color: #ffc300;
      position: relative;
      left: -4px;
      top: -1px;
      i {
        color: #000;
      }
    }
    .searchListContainet {
      border: 1px solid #999;
      margin-top: -1px;
      width: 81%;
      padding: 10px;
      font-size: 12px;
      color: #999;
      background-color: #fff;
      .hotPlace {
        dt {
          margin-bottom: 6px;
        }
        dd {
          padding-top: 5px;
          margin-bottom: 5px;
          padding-left: 0;
          overflow: hidden;
          height: 25px;
          box-sizing: border-box;
          line-height: 25px;
          &:hover {
            color: #ec6f09;
            background-color: #eee;
          }
        }
      }
      .searchList {
        margin-top: -10px;
        dd {
          padding: 3px 0px;
          color: #333;
          line-height: 1.6;
          &:hover {
            color: #ec6f09;
            background-color: #eee;
          }
          a {
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
}
</style>