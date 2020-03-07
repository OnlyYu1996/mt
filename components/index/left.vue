<template>
  <div class="m-left">
    <div class="home-header-link">
      <span class="link" v-for="(item,index) in headerLink" :key="index">{{item}}</span>
    </div>
    <div class="bander-row clearfix">
      <el-row :gutter="10">
        <el-col :span="14">
          <eslider />
        </el-col>
        <el-col :span="4">
          <div class="m-life-pic"></div>
        </el-col>
        <el-col :span="6">
          <div class="m-life-login" v-show="!user">
            <div class="head-img-row">
              <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" />
            </div>
            <p class="user-name">Hi！您好</p>
            <a class="btn-login" href="/register">注册</a>
            <a class="btn-login" href="/login">立即登录</a>
          </div>
          <div class="m-life-login" v-show="user">
            <div class="setting">
              <a href="#" target="_blank">
                <div class="icon">
                  <i class="iconfont icon-setting"></i>
                </div>
              </a>
            </div>
            <div class="head-img-row">
              <a href="#" target="_blank">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt />
              </a>
            </div>
            <div class="nickname-row">
              <a href="#" target="_blank">
                <p class="user-name">{{user}}</p>
              </a>
            </div>
            <div class="fn-row clearfix">
              <div class="fn-item">
                <a href="#">
                  <div class="icon">
                    <i class="iconfont icon-dingdan"></i>
                    <p class="fn-name">我的订单</p>
                  </div>
                </a>
              </div>
              <div class="fn-item">
                <a href="#">
                  <div class="icon">
                    <i class="iconfont icon-shoucang"></i>
                    <p class="fn-name">我的收藏</p>
                  </div>
                </a>
              </div>
              <div class="fn-item">
                <a href="#">
                  <div class="icon">
                    <i class="iconfont icon-iconfanpiao"></i>
                    <p class="fn-name">抵用券</p>
                  </div>
                </a>
              </div>
              <div class="fn-item">
                <a href="#">
                  <div class="icon">
                    <i class="iconfont icon-yue"></i>
                    <p class="fn-name">余额</p>
                  </div>
                </a>
              </div>
              <div class="fn-item">
                <a href="#">
                  <div class="icon">
                    <i class="iconfont icon-gengduo"></i>
                    <p class="fn-name">更多</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="7">
          <div class="m-life-hotel"></div>
        </el-col>
        <el-col :span="7">
          <div class="m-life-music"></div>
        </el-col>
        <el-col :span="4">
          <div class="m-life-coop"></div>
        </el-col>
        <el-col :span="6">
          <div class="m-life-downapp">
            <div class="qrcode-box">
              <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" />
            </div>
            <p class="app-name">美团APP手机版</p>
            <p class="s1">
              <span class="red">1元起</span>
              <span class="gary">吃喝玩乐</span>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Eslider from "./slider.vue";
export default {
  name: "left",
  components: {
    Eslider
  },
  data() {
    return {
      headerLink: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿 / 公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.geo.user;
    }
  }
};
</script>
<style lang='less' scoped>
.m-left {
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  .home-header-link {
    position: absolute;
    top: -66px;
    left: 20px;
    .link {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      margin: 0 20px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #fbc700;
      }
    }
  }
  .bander-row {
    .m-life-pic {
      background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
      width: 100%;
      height: 240px;
      background-size: 150px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: #fff;
    }
    .m-life-login {
      padding-top: 30px;
      position: relative;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      text-align: center;
      .fn-row {
        padding: 5px 15px;
        .fn-item {
          width: 33.3%;
          float: left;
          i{
            color: #FFC300;
            font-size: 20px;
          }
          .fn-name {
            font-size: 12px;
            color: #222;
            margin: 5px 0;
          }
        }
      }
      .setting {
        position: absolute;
        top: 5px;
        right: 5px;
        .icon {
          float: left;
          margin-right: 5px;
        }
      }
      .nickname-row {
        position: relative;
        height: 30px;
        .user-name {
          font-size: 16px;
          color: #222;
          text-align: center;
          font-weight: 500;
          white-space: nowrap;
          width: 6em;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0 auto;
        }
      }
      .head-img-row {
        border-radius: 30px;
        margin: 0px auto 4px auto;
        img {
          width: 47px;
          height: 47px;
          border-radius: 50%;
          border: 4px solid #e5e5e5;
        }
      }
      .user-name {
        font-size: 16px;
        color: #222;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
      }
      .btn-login {
        width: 118px;
        text-align: center;
        margin: 10px auto 15px auto;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        color: #333;
        transition: background-color 0.5s;
        display: block;
        line-height: 38px;
        &:hover {
          background-color: #f6f6f6;
          transition: background-color 0.5s;
        }
      }
    }
    .m-life-hotel {
      background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
      width: 100%;
      height: 144px;
      background-size: 270px;
      background-position: 50%;
      background-repeat: no-repeat;
      margin-top: 10px;
      margin-right: 10px;
    }
    .m-life-music {
      background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
      width: 100%;
      height: 144px;
      background-size: 270px;
      background-position: 50%;
      background-repeat: no-repeat;
      margin-top: 10px;
      margin-right: 10px;
    }
    .m-life-coop {
      background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
      width: 100%;
      height: 144px;
      margin-top: 10px;
      margin-right: 10px;
      background-size: 150px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: #fff;
    }
    .m-life-downapp {
      text-align: center;
      width: 100%;
      height: 144px;
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      .qrcode-box {
        margin: 4px auto 0 auto;
        img {
          width: 85px;
          height: 85px;
        }
      }
      .app-name {
        font-size: 16px;
        color: #222222;
        font-weight: 500;
        margin: 0;
      }
      .s1 {
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
        .red {
          color: #ec5330;
          margin-right: 5px;
        }
        .gary {
          color: #3f3f3f;
        }
      }
    }
  }
}
</style>