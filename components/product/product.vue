<template>
  <dl class="s-item clearfix">
    <dt>
      <img :src="meta.img" alt="商品图片" />
    </dt>
    <dd>
      <h3>
        <nuxt-link
          :to="{path:'detail',query:{keyword:meta.name,type:meta.module,city}}"
        >{{ meta.name }}</nuxt-link>
      </h3>
      <el-rate
        v-model="meta.rate"
        :colors="['#ff9900', '#ff9900', '#FF9900']"
        class="rate"
        disabled
      />
      <span v-if="meta.rate>4" class="s-item-comment">很好</span>
      <span v-else-if="meta.rate>3" class="s-item-comment">一般</span>
      <span v-else class="s-item-comment">很差</span>
      <span class="s-item-value">{{ meta.rate }}分</span>
      <span class="s-item-comment-total">{{ meta.comment }}人评论</span>
      <p>
        <span class="s-item-type">{{ meta.type }}</span>
        <span class="s-item-addr">{{ meta.addr }}</span>
      </p>
      <p>
        <em class="s-item-price">￥{{ meta.price }}起</em>
        <!-- <b>{{ meta.status }}</b> -->
      </p>
      <ul>
        <li v-if="meta.scene&&meta.scene.length">
          <span class="detail-type">景酒 |</span>
          <span class="desrc">{{ meta.scene }}</span>
        </li>
        <li v-else>
          <span class="detail-type">景酒 |</span>
          <span class="desrc">暂无描述</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      city:''
    };
  },
  mounted() {
    this.city = sessionStorage.getItem("position")
      ? JSON.parse(sessionStorage.getItem("position")).city
      : this.$store.state.geo.position.city;
  }
};
</script>
<style lang="less" scope>
@import url("../../assets/css/default.less");
.s-item {
  padding: 20px 0 16px;
  min-height: 125px;
  border-top: 1px solid #e5e5e5;
  dt {
    position: absolute;
    height: 125px;
    width: 220px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  dd {
    margin-left: 220px;
    padding-left: 20px;
    font-size: 12px;
    color: #666;
    h3 {
      padding-bottom: 4px;
      a {
        color: #333;
      }
    }
    .s-item-comment-total {
      color: #ff9900;
    }
    .rate {
      display: inline-block;
    }
  }
  p {
    .s-item-price {
      font-size: 15px;
      color: #ff6600;
    }
  }
  ul {
    li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
