<template>
  <div class="maoyan-container">
    <div class="index-nav-container" v-for="(item,index) in maoyanList" :key="index">
      <div class="li-container">
        <ul class="clearfix">
          <li class="title nav-item">{{item.title}}</li>
          <li :class="['nav-item',kind==li?'active':'']" v-for="(li,l) in item.itemTitles" :key="l" :name="li" @mouseenter="kind=li">{{li}}</li>
          <li class="total nav-item">
            <a href="https://maoyan.com/" class="link">
              全部
              <span class="icon-right" />
            </a>
          </li>
        </ul>
      </div>
      <div class="scenes-container">
        <el-carousel indicator-position="outside" v-for="(carousel,c) in item.items" :key="c" v-show="kind==carousel.itemTitle">
          <el-carousel-item v-for="(container,co) in carousel.container" :key="co">
            <div class="slider-item-film"  v-for="(card,ca) in carousel.details" :key="ca">
              <a :href="card.target" class="link">
                <img :src="card.img" class="film-img" />
                <img :src="card.tipImg" class="film-mark" />
                <div class="film-info">
                  <p class="film-score">
                    <span>{{card.expect}}</span>
                    <b>
                      {{card.subTitle}}
                      <span>{{card.score}}</span>
                    </b>
                  </p>
                  <p class="film-name">{{card.name}}</p>
                  <span class="buy-ticket" v-if="card.score">购票</span>
                </div>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { maoyanList } from "@/mock/maoyanList";
export default {
  name: "maoyan",
  data() {
    return {
      maoyanList: maoyanList,
      kind:"即将上映"
    };
  }
};
</script>
<style lang='less' scoped>
.maoyan-container {
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
          rgb(250, 60, 104) 2%,
          rgb(254, 70, 77) 97%
        )
        rgb(250, 60, 104);
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
    .scenes-container {
      background: #fff;
      padding: 20px 10px;
      border: 1px solid #e5e5e5;
      border-top: 0px;
      position: relative;
      .slider-item-film {
        box-sizing: border-box;
        height: 297px;
        width: 18.36%;
        float: left;
        margin-right: 19px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        position: relative;
        .film-img {
          border-radius: 4px;
          width: 100%;
          height: 100%;
          border: 0px;
        }
        .film-mark {
          position: absolute;
          top: 10px;
          z-index: 99;
          left: -6px;
          height: 20px;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
          width: auto;
          border: 0px;
        }
        .film-info {
          height: 100px;
          width: 100%;
          position: absolute;
          bottom: 0;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(29, 45, 55, 0.8) 99%
          );
          .film-score {
            font-size: 12px;
            color: #fff;
            text-align: left;
            margin-top: 36px;
            margin-bottom: 0;
            padding-bottom: 0;
            padding-left: 10px;
            font-weight: 500;
            span {
              font-size: 16px;
              color: #fd9827;
              font-weight: 500;
            }
          }
          .film-name {
            margin: 0;
            padding: 0;
            text-align: left;
            color: #fff;
            padding-left: 10px;
            font-size: 16px;
            white-space: nowrap;
            width: 6em;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
          }
          .buy-ticket {
            background: #ff4949;
            border-radius: 100px;
            color: #fff;
            padding: 2px 12px 3px 12px;
            font-size: 14px;
            position: relative;
            top: -24px;
            cursor: pointer;
            line-height: 20px;
            text-align: center;
            float: right;
            right: 10px;
          }
        }
      }
    }
  }
}
</style>