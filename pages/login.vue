<template>
  <div class="login-container">
    <header class="header clearfix">
      <a href="/" class="site-logo">美团网</a>
    </header>
    <div class="site-body-wrapper">
      <div class="site-body">
        <div class="promotion-banner clearfix">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt="美团网"
            width="480"
            height="370"
          />
        </div>
        <div class="login-section clearfix">
          <div class="validate-info"></div>
          <span class="login-type">
            <a href="#">
              手机动态码登录
              <i class="iconfont icon-phone"></i>
            </a>
            账户登陆
          </span>
          <div :class="['form-field',{'focus':changeBorderPhone}]">
            <span class="country-area">
              <span class="plus"></span>
              <span>86</span>
              <i class="right-arrow"></i>
            </span>
            <input
              type="text"
              placeholder="手机号"
              v-model="sendForm.phone"
              class="phone-input"
              @focus="changeBorderPhone=true"
              @blur="changeBorderPhone=false"
            />
          </div>
          <div :class="['form-field',{'focus':changeBorderPwd}]">
            <i class="iconfont icon-lock lock"></i>
            <input
              type="password"
              placeholder="密码"
              maxlength="15"
              v-model="sendForm.pwd"
              class="phone-input"
              @focus="changeBorderPwd=true"
              @blur="changeBorderPwd=false"
              @keydown.enter="login"
            />
          </div>
          <div class="form-field form-field-forget">
            <a href="#" class="forget-password" target="_top">忘记密码？</a>
          </div>
          <div class="form-field form-field-login">
            <input type="submit" class="btn" value="登录" name="commit" @click="login" />
          </div>
          <p class="signup-guide">
            还没有账号？
            <a href="/register" target="_top">免费注册</a>
          </p>
          <div class="oauth-wrapper clearfix">
            <h3 class="title-wrapper">
              <span class="title">用合作网站账号登录</span>
            </h3>
            <div class="oauth">
              <span class="oauth__link oauth__link--qq"></span>
              <span class="oauth__link oauth__link--weibo"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="site-info-nav clearfix">
        <ul>
          <li class="first">
            <a href="#" rel="nofllow">关于美团</a>
          </li>
          <li>
            <a href="#" rel="nofllow">加入我们</a>
          </li>
          <li>
            <a href="#" rel="nofllow">商家入驻</a>
          </li>
          <li>
            <a href="#" rel="nofllow">帮助中心</a>
          </li>
          <li class="last">
            <a href="#" rel="nofllow">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©
          <span>2020</span>
          <a href="#">美团网团购</a>
          meituan.com
          <a href="#">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import cryptJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      sendForm: { pwd: "", phone: "" },
      changeBorderPhone: false,
      changeBorderPwd: false
    };
  },
  methods: {
    login() {
      const self = this;
      if (self.sendForm.phone && self.sendForm.pwd) {
        self.$axios
          .post("/users/signin", {
            phone: self.sendForm.phone,
            password: cryptJS.MD5(self.sendForm.pwd).toString()
          })
          .then(({ status, data }) => {
            if (status === 200) {
              if (data && data.code === 0) {
                self.$router.go(-1);
              } else {
                self.$message.error(data.msg || "请求失败");
              }
            } else {
              self.$message.error("服务器出错");
            }
          });
      } else {
        self.$message.error("请输入正确的用户名以及密码");
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.fullPath === "/register") {
      this.$router.push("/");
    } else {
      next();
    }
  }
};
</script>
<style lang='less' scoped>
@import "../assets/css/default.less";
.login-container {
  .header {
    width: 980px;
    height: auto;
    margin: 40px auto 30px;
    position: relative;
    display: block;
    zoom: 1;
    .site-logo {
      margin: 0;
      display: block;
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      background-repeat: no-repeat;
      background-size: initial;
      float: left;
      display: inline;
      text-indent: -9999px;
      overflow: hidden;
    }
  }
  .site-body-wrapper {
    .site-body {
      margin: 0 auto 70px;
      width: 980px;
      zoom: 1;
      .promotion-banner {
        float: left;
        height: 370px;
        margin: 0 115px 0 0;
        width: 480px;
      }
      .login-section {
        float: left;
        padding-top: 0;
        margin: 0 auto;
        width: 270px;
        background: #fff;
        .el-input-group__prepend {
          color: red;
        }
        .validate-info {
          min-height: 18px;
          margin-top: 0;
          margin: 10px auto;
        }
        .login-type {
          font-weight: 400;
          color: #666;
          a {
            position: relative;
            padding-right: 16px;
            color: #666;
            float: right;
            font-size: 12px;
            height: 17px;
            line-height: 17px;
            i {
              width: 14px;
              height: 14px;
            }
          }
        }
        .form-field {
          box-sizing: border-box;
          width: 270px;
          height: auto;
          padding: 0;
          border: 1px solid #aaa;
          background-color: #fff;
          margin: 12px 0;
          // overflow: hidden;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          position: relative;
          zoom: 1;
          .btn {
            width: 100%;
            color: #222;
            background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
            border-width: 0;
            box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
            background-size: 100%;
            display: block;
            vertical-align: middle;
            padding: 7px 20px 6px;
            font-size: 14px;
            font-weight: 700;
            -webkit-font-smoothing: antialiased;
            line-height: 1.5;
            letter-spacing: 0.1em;
            text-align: center;
            text-decoration: none;
            border-width: 0 0 1px;
            border-style: solid;
            background-repeat: repeat-x;
            border-radius: 2px;
            -moz-user-select: -moz-none;
            -ms-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            cursor: pointer;
            height: 35px;
          }
          .forget-password {
            float: right;
            font-size: 12px;
            color: #fe8c00;
          }
          .lock {
            width: 18px;
            height: 18px;
            position: relative;
            left: 3px;
            right: 1px;
          }
          .country-area {
            color: #646464;
            display: inline-block;
            text-decoration: none;
            .plus {
              box-sizing: border-box;
              display: inline-block;
              width: 10px;
              height: 10px;
              position: relative;
              &::before {
                width: 8px;
                height: 1px;
                pointer-events: none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                box-shadow: inset 0 0 0 1px;
                content: "";
              }
              &::after {
                pointer-events: none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                box-shadow: inset 0 0 0 1px;
                content: "";
                height: 8px;
                width: 1px;
              }
            }
            .right-arrow {
              width: 5px;
              height: 5px;
              display: inline-block;
              border-right: 1px solid #646464;
              border-top: 1px solid #646464;
              transform: rotate(45deg);
              margin-right: 4px;
              position: relative;
              bottom: 2px;
            }
          }
          .phone-input {
            width: 180px;
            padding-left: 5px;
            border: none;
            max-width: 200px !important;
            width: 248px;
            height: 24px;
            padding: 5px;
            line-height: 24px;
            vertical-align: top;
            font-size: 14px;
            &:focus {
              border-color: #ffc300;
              outline: 0;
              outline-offset: -2px;
            }
          }
        }
        .form-field-forget {
          border: none;
          display: inline;
          padding-bottom: 8px;
        }
        .form-field-login {
          border: none;
          padding: 8px 0;
        }
        .signup-guide {
          color: #666;
          a {
            color: #fe8c00;
            text-decoration: none;
          }
        }
        .focus {
          border-color: #ffc300;
        }
      }
      .oauth-wrapper {
        margin-top: 20px;
        .title-wrapper {
          position: relative;
          margin-bottom: 30px;
          border-bottom: 1px solid #ccc;
          width: 100%;
          height: 0;
          overflow: visible;
          .title {
            position: absolute;
            top: -10px;
            left: 50%;
            margin-left: -75px;
            width: 150px;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            color: #666;
            background: #fff;
          }
        }
        .oauth {
          padding-left: 88px;
          zoom: 1;
          .oauth__link {
            float: left;
            margin-right: 20px;
            width: 18px;
            height: 18px;
            background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
            cursor: pointer;
          }
          .oauth__link--qq {
            background-position: -1250px -491px;
          }
          .oauth__link--weibo {
            background-position: -1250px -599px;
          }
        }
      }
    }
  }
  .footer {
    margin: 0 auto 30px;
    clear: both;
    width: 980px;
    font-size: 12px;
    color: #999;
    .site-info-nav {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      ul {
        float: left;
        width: 594px;
        color: #eee;
        li {
          float: left;
          margin: 5px 0;
          padding: 0 16px;
          line-height: 14px;
          border-right: 1px solid #eee;
        }
        .first {
          padding-left: 0;
        }
        .last {
          padding-right: 0;
        }
      }
    }
    .copyright {
      text-align: left;
      clear: both;
      font-size: 12px;
    }
  }
}
</style>