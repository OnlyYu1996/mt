<template>
  <div class="m-product-categroy">
    <dl class="classic" v-for="(item,index) in categroy" :key="index">
      <dt>分类</dt>
      <dt class="all">全部</dt>
      <dd>
        <iselect :list="item" />
      </dd>
    </dl>
  </div>
</template>

<script>
import iselect from "./iselect.vue";
import { categroy } from "@/mock/categroy";
export default {
  components: {
    iselect
  },
  props: {
    types: {
      type: Array,
      default() {
        return [];
      }
    },
    areas: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      categroy: categroy,
      activeData: {}
    };
  },
  methods: {
    getData(data) {
      this.activeData = data;
    }
  }
};
</script>

<style lang="less">
.m-product-categroy {
  padding: 15px 20px 0;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 10px 0;
  position: relative;
  .classic {
    display: flex;
    padding-bottom: 10px;
    dt {
      width: 80px;
    }
    .all {
      border-radius: 100px;
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      color: #222222;
      height: 22px;
      line-height: 22px;
      width: 52px;
      box-sizing: border-box;
      margin-right: 40px;
      text-align: center;
    }
    &:nth-child(1) {
      dd {
        border-bottom: 1px solid #ddd;
      }
    }
  }
}
</style>
