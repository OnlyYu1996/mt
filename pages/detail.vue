<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <crumbs :keyword="keyword" :type="type" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summa :meta="product" />
      </el-col>
    </el-row>
    <el-row class="m-title" v-if="login">
      <el-col :span="19">
        <h3>商家团购及优惠</h3>
        <Discount />
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <list v-if="login" :list="list" />
        <div v-else class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看" />
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/detail/crumbs.vue";
import Summa from "@/components/detail/summary.vue";
import List from "@/components/detail/list.vue";
import Discount from "@/components/detail/discount.vue";
export default {
  components: {
    Crumbs,
    Summa,
    List,
    Discount
  },
  computed: {
    canOrder: function() {
      return this.list.filter(item => item.photos.length).length;
    }
  },
  async asyncData(ctx){
    let { keyword, type,city } = ctx.query;
    let {
      status,
      data: { product, more: list, login }
    } = await ctx.$axios.get("/search/products", {
      params: {
        keyword,
        type,
        city
      }
    });
    if (status === 200) {
      return {
        keyword,
        product,
        type,
        list,
        login
      };
    } else {
      return {
        keyword,
        product: {},
        type,
        list: [],
        login: false
      };
    }
  }
};
</script>

<style lang="less" scope>
.page-detail {
  width: 1190px;
  margin: auto;
  .m-crumbs {
    margin: 20px 0;
  }
  .m-sum-card {
    display: flex;
    background: #fff;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    dt {
      flex: 1;
      padding-bottom: 5px;
      h1 {
        font-size: 26px;
        font-weight: 500;
        color: #222;
      }
      .el-rate {
        display: inline-block;
        .el-rate__icon {
          font-size: 12px;
        }
      }
      > span {
        font-size: 12px;
        margin-right: 10px;
      }
      > ul {
        border-top: 1px solid #e5e5e5;
        list-style: none;
        padding-top: 5px;
        margin-top: 10px;
        li {
          font-size: 14px;
          color: #666;
          padding: 7px 0;
        }
      }
    }
    dd {
      width: 383px;
    }
  }
  .m-detail-list {
    margin-top: 34px;
    h3 {
      margin: 8px 0;
    }
    ul {
      list-style: none;
      background-color: #fff;
      padding: 20px 20px 0;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
    }
  }
  .m-detail-item {
    .section {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      align-items: center;
      dd {
        &:nth-child(1) {
          img {
            width: 100px;
            height: 100px;
            border-radius: 4px;
          }
          padding-right: 20px;
        }
        &:nth-child(2) {
          flex: 1;
        }
        > h4 {
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 480px;
          font-size: 16px;
          color: #222;
          font-weight: 500;
          height: 22px;
          line-height: 22px;
          margin-bottom: 4px;
          cursor: pointer;
        }
        > p {
          font-size: 12px;
          color: #666;
          height: 17px;
          line-height: 17px;
          margin-bottom: 22px;
          .price {
            font-size: 30px;
            color: #f60;
            margin-right: 10px;
            &:before {
              content: "￥";
              font-size: 14px;
            }
          }
        }
      }
    }
    li:last-child {
      .section {
        border-bottom: none;
      }
    }
  }
  .m-title {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
    margin-top: 40px;
    h3 {
      font-weight: 900;
    }
  }
  .deal-need-login {
    padding: 30px 0;
    margin-bottom: 40px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    > img {
      display: inline-block;
      width: 160px;
      height: 120px;
      border-radius: 4px;
    }
    > span {
      display: block;
      margin: 10px 0 14px;
      color: #666;
      font-size: 16px;
      line-height: 26px;
    }
    > button {
      background-color: #13d1be;
      border-color: #13d1be;
      a {
        color: #fff;
      }
    }
  }
}
</style>
