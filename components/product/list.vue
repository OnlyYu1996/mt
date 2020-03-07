<template>
  <div class="m-products-list">
    <div class="list">
      <div
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.name==activeTitle?'s-nav-active':'']"
        @click="navSelect(item)"
      >
        <span>{{ item.txt }}</span>
      </div>
    </div>
    <ul>
      <Item v-for="(item,idx) in list" :key="idx" :meta="item" />
    </ul>
  </div>
</template>

<script>
import Item from "./product.vue";
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          acitve: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ],
      activeTitle: "s-default"
    };
  },
  async asyncData({ app }) {
    let { data } = await app.$axios.get("searchList");
    return { items: data.list };
  },
  methods: {
    navSelect: function(item) {
      console.log(item);
      this.activeTitle = item.name;
    }
  }
};
</script>
<style lang="less" scope>
.m-products-list {
  margin-top: 10px;
  padding: 11px 20px;
  padding-bottom: 2px;
  border: 1px solid #e5e5e5;
  .list {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    .s-nav-active {
      span{
        color: #222;
      }
    }
    div {
      min-width: 60px;
      text-align: center;
      display: inline-block;
      font-weight: 500;
      color: #222222;
      margin-left: 0;
      padding: 11px 20px;
      span {
        font-size: 14px;
        color: #666;
        cursor: pointer;
      }
    }
    .s-price {
      position: relative;
      &::before {
        border: 3.2px solid transparent;
        content: "";
        right: 10px;
        top: 50%;
        position: absolute;
        border-bottom-width: 4px;
        border-bottom-color: #ccc;
        margin-top: -8px;
      }
      &::after {
        position: absolute;
        border: 3.2px solid transparent;
        content: "";
        right: 10px;
        top: 50%;
        border-top-width: 4px;
        border-top-color: #ccc;
        margin-top: 1px;
      }
    }
  }
}
</style>