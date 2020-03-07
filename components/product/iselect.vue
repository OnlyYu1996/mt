<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt
        v-for="(item,index) in list"
        :key="index"
        @mouseenter="mouseenter(item)"
        @mouseleave="mouseleave"
        :class="{'more':item.details&&item.details[0]}"
      >
        <span>{{ item.name }}</span>
        <div
          class="detail-box"
          v-if="activeData.details&&activeData.details[0]&&item.name===activeData.name"
        >
          <div class="arrow"></div>
          <div class="content">
            <div class="popover-content">
              <span class="title">{{activeData.name}}</span>
              <div class="tag-group">
                <div class="tag" v-for="tag in activeData.details" :key="tag">{{tag}}</div>
              </div>
            </div>
          </div>
        </div>
      </dt>
    </dl>
  </div>
</template>

<script>
export default {
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
      activeData: {},
      index: 0
    };
  },
  methods: {
    mouseleave() {
      this.activeData = {};
    },
    mouseenter(item) {
      this.activeData = item;
    }
  }
};
</script>
<style lang="less">
.m-product-select {
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  .tab {
    display: inline-block;
    vertical-align: top;
    dt {
      min-width: 120px;
      display: inline-block;
      line-height: 28px;
      position: relative;
      span {
        cursor: pointer;
      }
      .detail-box {
        width: 510px;
        display: block;
        position: absolute;
        top: 26px;
        left: 0px;
        z-index: 1000;
        cursor: auto;
        user-select: text;
        white-space: normal;
        font-size: 12px;
        line-height: 1.5;
        font-weight: 500;
        text-align: left;
        background: #fff;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        .arrow {
          position: relative;
          left: 10px;
          top: -15px;
          z-index: 1001;
          &::after {
            content: " ";
            position: absolute;
            border-color: transparent;
            border-style: solid;
            border-width: 8px;
            border-bottom-color: #fff;
          }
        }
        .content {
          background-color: #fff;
          background-clip: padding-box;
          border-radius: 4px;
          width: 100%;
          .popover-content {
            padding: 19px 15px;
            padding-bottom: 9px;
            width: 100%;
            .title {
              color: #ccc;
              font-size: 16px;
              margin-bottom: 11px;
              cursor: default;
            }
            .tag-group {
              padding: 10px 0 0 5px;
              width: 100%;
              vertical-align: top;
              .tag {
                min-width: 120px;
                display: inline-block;
                margin-bottom: 5px;
                margin-left: -5px;
                cursor: pointer;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .more {
      &::after {
        content: "";
        display: inline-block;
        margin-left: 4px;
        vertical-align: -2px;
        height: 0;
        width: 0;
        border: 4px solid transparent;
        border-top-color: #666;
      }
    }
  }
}
</style>
