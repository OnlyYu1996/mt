<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="cart.length" :span="24" class="m-cart">
        <list :cart-data="cart" />
        <p>
          应付金额：
          <em class="money">￥{{ total }}</em>
        </p>
        <div class="post">
          <el-button type="primary" @click="submit">提交订单</el-button>
        </div>
      </el-col>
      <el-col v-else class="empty">购物车为空</el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/cart/list.vue";
export default {
  components: {
    List
  },
  data() {
    return {
      cart: []
    };
  },
  computed: {
    total() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  },
  methods: {
    submit: async function() {
      let {
        status,
        data: { code, id }
      } = await this.$axios.post("/order/createOrder", {
        count: this.cart[0].count,
        price: this.cart[0].price,
        id: this.cartNo
      });
      if (status == 200 && code === 0) {
        this.$alert(`恭喜您，已成功下单，订单号:${id}`, "下单成功", {
          confirmButtonText: "确定",
          callback: action => {
            location.href = "/order";
          }
        });
      }
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: {
        code,
        data: { name, price }
      }
    } = await ctx.$axios.post("/cart/getCart", {
      id: ctx.query.id
    });
    if (status === 200 && code === 0 && name) {
      return {
        cart: [
          {
            name,
            price,
            count: 1
          }
        ],
        cartNo: ctx.query.id
      };
    }
  }
};
</script>

<style lang="less" scope>
.page-cart {
  width: 980px;
  margin: 20px auto;
  .m-cart {
    > p {
      text-align: right;
      width: 980px;
    }
    .post {
      width: 980px;
    }
  }
  .empty {
    background: #fff;
    padding: 20px;
    text-align: center;
  }
  .m-cart {
    background: #f8f8f8;
    width: 1190px;
    margin: 0 auto;
    padding-top: 10px;
    > section {
      width: 950px;
    }
    > p {
      text-align: right;
      font-size: 12px;
      font-weight: bolder;
      color: #666;
      line-height: 30px;
    }
    > div.post {
      text-align: right;
    }
    .money {
      font-size: 20px;
      color: #f76120;
      font-style: normal;
    }
  }
  div[role="dialog"] {
    z-index: 99999 !important;
  }
  .v-modal {
    z-index: 99995 !important;
  }
}

.el-mail {
  width: 980px;
}
</style>
