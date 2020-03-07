<template>
  <div class="zhenguo-container clearfix">
    <div class="index-nav-container" v-for="(item,index) in zhenguoList" :key="index">
      <div class="li-container">
        <ul class="clearfix">
          <li class="title nav-item">{{item.title}}</li>
          <li
            :class="['nav-item',kind==li?'active':'']"
            v-for="(li,l) in item.itemTitles"
            :key="l"
            :name="li"
            @mouseenter="kind=li"
          >{{li}}</li>
          <li class="total nav-item">
            <a href="https://maoyan.com/" class="link">
              全部
              <span class="icon-right" />
            </a>
          </li>
        </ul>
      </div>
      <div class="minsu-container">
        <div class="products" :name="minsu.itemTitle" v-for="(minsu,mu) in item.items" :key="mu" v-show="kind==minsu.itemTitle">
          <div class="minsu-item" v-for="(card,ca) in minsu.details" :key="ca">
            <a :href="card.target" target="_blank">
              <div class="product-card-header">
                <img :src="card.img" class="product-img" />
                <img :src="card.headImg" class="head-img" />
              </div>
              <div class="product-info">
                <p class="product-title">{{card.title}}</p>
                <p class="product-sub-title">{{card.subTitle}}</p>
                <p class="price-number">
                  <span class="price-icon">￥</span>
                  {{card.price}}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { zhenguoList } from "@/mock/zhenguo";
export default {
  name: "zhenguo",
  data() {
    return {
      zhenguoList: zhenguoList,
      kind: "广州"
    };
  }
};
</script>
<style lang='less' scoped>
.zhenguo-container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  .index-nav-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    .li-container {
      background: linear-gradient(
          to right,
          rgb(243, 182, 74) 2%,
          rgb(242, 197, 69) 97%
        )
        rgb(243, 182, 74);
      width: 100%;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      .active::after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
      .title {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
      }
      .nav-item {
        float: left;
        padding: 0 5px;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
      }
      .total {
        float: right;
        margin-right: 18px;
        a {
          color: #fff;
          .icon-right {
            top: 0;
            bottom: 0;
            right: -6px;
            margin: auto;
            border-bottom: 1px solid #fff;
            border-right: 1px solid #fff;
          }
        }
      }
    }
    .minsu-container {
      padding: 20px;
    padding-right: 0;
    padding-bottom: 0;
    border-top: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff;
      .products {
        .minsu-item {
          float: left;
          margin-right: 18px;
          a {
            text-decoration: none;
            .product-card-header {
              position: relative;
              .product-img {
                width: 370px;
                height: 208px;
                border-radius: 4px;
                background: url(//p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
                background-size: cover;
                background-position: 50%;
                max-width: 100%;
                height: 208px;
                margin-bottom: 11px;
                cursor: pointer;
              }
              .head-img {
                border: 2px solid #ffffff;
                height: 48px;
                width: 48px;
                position: absolute;
                bottom: -12px;
                right: 15px;
                z-index: 9;
                border-radius: 40px;
                background-image: url(https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png);
                background-size: 100%;
                background-position: 50% 50%;
                background-repeat: no-repeat;
              }
            }
            .product-info {
              text-align: left;
              padding-bottom: 25px;
              .product-title {
                font-size: 16px;
                color: #222222;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 7px 0;
                font-weight: 400;
                width: 297px;
                line-height: 1;
              }
              .product-sub-title {
                font-size: 12px;
                color: #999999;
                text-align: left;
                
              }
              .price-number {
                font-weight: 500;
                font-size: 22px;
                color: #ff6600;
                letter-spacing: -0.8px;
                padding: 4px 0;
                font-family: "numbers" !important;
                .price-icon {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>