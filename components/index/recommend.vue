<template>
  <div class="recommend-container">
    <div class="index-nav-container" v-for="(item,index) in recommendList" :key="index">
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
        </ul>
      </div>
      <div class="minsu-container clearfix">
        <div
          class="products"
          :name="minsu.itemTitle"
          v-for="(minsu,mu) in item.items"
          :key="mu"
          v-show="kind==minsu.itemTitle"
        >
          <a :href="card.target" target="_blank" v-for="(card,ca) in minsu.details" :key="ca">
            <div class="product-card-header">
              <img :src="card.img" class="product-img" />
            </div>
            <div class="product-info">
              <p class="product-title">{{card.title}}</p>
              <div class="score-line">
                <div class="score">
                  <ul class="rate-stars-dark">
                    <li v-for="stareDark in 5" :key="stareDark">
                      <i class="iconfont icon-stared"></i>
                    </li>
                  </ul>
                  <ul class="rate-stare-light" :style="{width:card.width}">
                    <li v-for="stareLight in 5" :key="stareLight">
                      <i class="iconfont icon-stared"></i>
                    </li>
                  </ul>
                </div>
                <div class="comment-number">{{card.comment}}</div>
              </div>
              <div class="desc-line">
                <div class="desc">{{card.desc}}</div>
              </div>
              <p class="price-container">
                <span class="price-icon">￥</span>
                <span class="price-number">{{card.price}}</span>
                <span class="price-desc">/起</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recommendList } from "@/mock/recommend";
export default {
  name: "recomend",
  data() {
    return {
      recommendList: recommendList,
      kind: "为你甄选最适合的"
    };
  }
};
</script>
<style lang='less' scoped>
.recommend-container {
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
          rgb(88, 174, 221) 2%,
          rgb(66, 191, 205) 97%
        )
        rgb(88, 174, 221);
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
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-top: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        max-height: 758px;
        padding: 10px 10px 20px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: hidden;
        text-align: left;
        a {
          display: inline-block;
          width: 20%;
          box-sizing: border-box;
          vertical-align: middle;
          padding: 10px;
          .product-card-header {
            height: 0;
            width: 100%;
            padding-bottom: 56.25%;
            background-color: #f4f4f4;
            background-image: url(//p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
            background-size: cover;
            background-position: 50% 50%;
            border-radius: 4px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .product-info {
            position: relative;
            margin-top: 10px;
            .product-title {
              font-size: 16px;
              line-height: 22px;
              width: 100%;
              height: 22px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #222222;
            }
            .score-line {
              height: 24px;
              .score {
                width: 92px;
                height: 24px;
                position: relative;
                display: inline-block;
                .rate-stars-dark {
                  color: #c3c3c3;
                  list-style: none;
                  padding: 0;
                  text-align: left;
                  margin: 3px 0;
                  white-space: nowrap;
                  li {
                    display: inline-block;
                    padding: 0px 2px;
                    list-style: none;
                    margin: 0;
                  }
                }
                .rate-stare-light {
                  color: #ff9900;
                  position: absolute;
                  top: 0px;
                  overflow: hidden;
                  list-style: none;
                  padding: 0;
                  text-align: left;
                  margin: 3px 0;
                  white-space: nowrap;
                  li {
                    display: inline-block;
                    padding: 0px 2px;
                    list-style: none;
                    margin: 0;
                  }
                }
              }
              .comment-number {
                display: inline-block;
                font-size: 12px;
                color: #999;
                height: 24px;
                line-height: 24px;
                margin-left: 10px;
              }
            }
            .desc-line {
              height: 18px;
              .desc {
                font-size: 12px;
                color: #999999;
                width: 100%;
                height: 18px;
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 4px;
              }
            }
            .price-container {
              height: 28px;
              position: relative;
              color: #ff6600;
              .price-icon {
                font-size: 14px;
                font-weight: 700;
              }
              .price-number {
                font-size: 22px;
                font-family: "numbers" !important;
                letter-spacing: -0.5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>