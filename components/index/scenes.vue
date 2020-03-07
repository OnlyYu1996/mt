<template>
  <div class="scenes-container">
    <div class="quality-container" v-for="(item,index) in qualityList" :key="index">
      <div
        :class="['index-nav-container',item.type=='quality'?'index-nav-color-qua':'index-nav-color-off']"
      >
        <ul class="clearfix">
          <li class="title nav-item">{{item.title}}</li>
          <li
            :class="['nav-item',{'active':li==(item.type=='quality'?qualityKind:offerKind)}]"
            v-for="(li,v) in item.itemTitles"
            :key="v"
            :qualityKind="li"
            @mouseenter="mouseenter(item.type,$event)"
          >{{li}}</li>
        </ul>
      </div>
      <div
        class="quality-area clearfix"
        v-for="(card,c) in item.items"
        :key="c"
        v-show="(item.type=='quality'?qualityKind:offerKind)==card.itemTitle"
      >
        <a
          :href="detail.target"
          target="_blank"
          :class="['quality-card',item.type=='quality'?'quality-card-width':'offer-card-width']"
          v-for="(detail,i) in card.details"
          :key="i"
        >
          <div :class="['quality-img',item.type=='quality'?'quality-img-size':'offer-img-size']">
            <img :src="detail.img" />
          </div>
          <div class="poi-info">
            <div class="title" :title="detail.mainTitle">{{detail.mainTitle}}</div>
            <div
              class="sub-title"
              :title="detail.subTitle"
              v-if="detail.subTitle"
            >{{detail.subTitle}}</div>
            <div class="tages-wrapper clearfix" v-else>
              <div class="tag" v-for="(tag,t) in detail.tags" :key="t">{{tag}}</div>
            </div>
            <div class="price-info">
              <span class="current-price-wrapper" v-if="detail.currentPrice">
                <span class="price-symbol">￥</span>
                <span class="current-pri">{{detail.currentPrice}}</span>
                <span class="old-price" v-if="detail.oldPrice">{{detail.tail}}{{detail.oldPrice}}</span>
                <span
                  class="current-price-type"
                  v-if="detail.currentPrice&&!detail.oldPrice"
                >{{detail.tail}}</span>
              </span>
              <span class="bottom-right-info">{{detail.botttomRightInfo}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { qualityList } from "@/mock/qualityList";

export default {
  name: "scenes",
  data() {
    return {
      qualityList: qualityList,
      qualityKind: "全部",
      offerKind:"全部"
    };
  },
  methods: {
    mouseenter(type,e) {
      if(type=='quality'){
      this.qualityKind = e.target.innerText;
      }else{
      this.offerKind = e.target.innerText;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.scenes-container {
  width: 1190px;
  margin: 40px auto;
  text-align: center;
  .quality-container {
    margin: 40px auto;
    .index-nav-color-qua {
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(
        to right,
        rgb(194, 176, 142) 3%,
        rgb(190, 164, 116) 100%
      );
    }
    .index-nav-color-off {
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(
        to right,
        rgb(255, 113, 74) 2%,
        rgb(252, 66, 66) 97%
      );
    }
    .index-nav-container {
      width: 100%;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
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
    }
    .quality-area {
      width: 100%;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
      }
      .quality-card-width{
        width: 33.3%;
        height: 314px;
      }
      .offer-card-width{
        width: 19.99%;
        height: 270px;
      }
      .quality-card {
        padding: 10px;
        box-sizing: border-box;
        float: left;
        background: #fff;
        -webkit-transition: background-color 500ms;
        -ms-transition: background-color 500ms;
        transition: background-color 500ms;
        &:hover {
          background: #f4f4f4;
          transition: background-color 500ms;
          border-radius: 4px;
        }
        .quality-img-size{
          height: 208px;
        }
        .offer-img-size{
          height: 120px;
        }
        .quality-img {
          background: url(//p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
          background-size: cover;
          background-position: 50% 50%;
          max-width: 100%;
          margin-bottom: 11px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
        .poi-info {
          text-align: left;
          .title {
            font-size: 16px;
            color: #222;
            height: 22px;
            line-height: 22px;
            margin-bottom: 8px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
          }
          .sub-title {
            font-size: 12px;
            color: #999;
            line-height: 18px;
            height: 18px;
            margin-bottom: 7px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .tages-wrapper {
            font-size: 12px;
            color: #999;
            height: 20px;
            overflow: hidden;
            margin-bottom: 5px;
            .tag {
              height: 18px;
              line-height: 18px;
              text-align: center;
              border: 1px solid #d8d8d8;
              border-radius: 2px;
              float: left;
              margin-right: 10px;
              margin-bottom: 5px;
              padding: 0 3px;
            }
          }
          .price-info {
            height: 27px;
            overflow: hidden;
            margin-bottom: 10px;
            .current-price-wrapper {
              cursor: pointer;
              .price-symbol {
                font-size: 14px;
                color: #be9e4d;
                font-weight: 500;
                font-family: "numbers" !important;
                letter-spacing: -0.5px;
              }
              .current-pri {
                font-size: 22px;
                color: #be9e4d;
                // margin-right: 6px;
                letter-spacing: -0.8px;
                font-family: "numbers" !important;
                cursor: pointer;
              }
              .old-price {
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
              }
              .current-price-type {
                font-size: 12px;
                letter-spacing: -0.6px;
                font-family: "numbers" !important;
                color: #be9e4d;
              }
            }

            .bottom-right-info {
              font-size: 12px;
              color: #999;
              float: right;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>