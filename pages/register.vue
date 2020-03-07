<template>
  <div class="page-register">
    <article class="header-container">
      <header class="header clearfix">
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团帐号？</em>
          <a href="/login">
            <el-button type="warning" size="mini" class="loginBtn">登陆</el-button>
          </a>
        </span>
      </header>
    </article>
    <div class="content">
      <el-form ref="formRegister" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" type="email"></el-input>
        </el-form-item>
        <el-form-item class="sendCode">
          <el-button size="mini" @click="sendCode" :disabled="statusMsg!==''">发送验证码</el-button>
          <span>{{statusMsg}}</span>
        </el-form-item>
        <el-form-item label="动态验证码" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="pwd">
          <el-input v-model="form.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="form.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" class="subBtn" size="mini" @click="register">同意以下协议并注册</el-button>
        </el-form-item>
      </el-form>
      <div class="term">
        <a href="#" target="_blank">《美团点评用户服务协议》</a>
        <a href="#" target="_blank">《美团点评隐私政策》</a>
      </div>
    </div>
    <footer class="footer">
      <p class="copyright">
        ©
        <a
          href="https://www.meituan.com"
          class="f1"
          target="_blank"
          rel="noopener noreferrer"
        >meituan.com</a>
        &nbsp;
        <a
          href="http://www.miibeian.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          class="f1"
        >京ICP证070791号</a>
        &nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import cryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    let pwd = (rules, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      } else if (this.form.cpwd && value !== this.form.cpwd) {
        return callback(new Error("密码不一致"));
      } else {
        return callback();
      }
    };
    let cpwd = (rules, value, callback) => {
      if (!value) {
        return callback(new Error("请再次输入密码"));
      } else if (this.form.pwd !== value) {
        return callback(new Error("密码不一致"));
      } else {
        return callback();
      }
    };
    let checkEmail = (rules, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };
    let checkPhone = (rules, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      } else {
        if (value.length < 11) {
          return callback(new Error("手机号长度不正确"));
        } else {
          return callback();
        }
      }
    };
    return {
      form: {
        username: "",
        email: "",
        code: "",
        pwd: "",
        cpwd: "",
        phone: ""
      },
      rules: {
        username: [
          {
            required: true,
            type: "string",
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            type: "string",
            validator: checkPhone,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "string",
            validator: checkEmail,
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            type: "string",
            message: "请输入验证码",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            type: "string",
            trigger: "blur",
            validator: pwd
          }
        ],
        cpwd: [
          {
            required: true,
            type: "string",
            trigger: "blur",
            validator: cpwd
          }
        ]
      },
      statusMsg: ""
    };
  },
  methods: {
    register() {
      const self = this;
      self.$refs.formRegister.validate(valid => {
        if (valid) {
          self.$axios
            .post("/users/signup", {
              username: encodeURIComponent(self.form.username),
              password: cryptoJS.MD5(self.form.pwd).toString(),
              email: self.form.email,
              code: self.form.code,
              phone: self.form.phone
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = "/login";
                } else {
                  self.$message.error(data.msg || "错误");
                }
              } else {
                self.$message.error(`服务器出错，错误代码${status}`);
              }
            });
        }
      });
    },
    sendCode() {
      const self = this;
      self.$refs.formRegister.validateField("username", validByName => {
        if (!validByName) {
          self.$refs.formRegister.validateField("email", valid => {
            if (!valid) {
              self.$axios
                .post("/users/verify", {
                  username: encodeURIComponent(self.form.username),
                  email: self.form.email
                })
                .then(({ status, data }) => {
                  if (status === 200 && data.code === 0) {
                    let count = 60;
                    self.timerId = setInterval(function() {
                      if (count <= 0) {
                        clearInterval(self.timerId);
                        self.statusMsg = "";
                      } else {
                        self.statusMsg = `验证码已发送,剩余${count}秒`;
                        count--;
                      }
                    }, 1000);
                  } else {
                    self.statusMsg = data.msg;
                    setTimeout(() => {
                      self.statusMsg = "";
                    }, 2000);
                  }
                });
            } else {
              self.statusMsg = "";
              return false;
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
@import "../assets/css/default.less";
.header-container {
  border-bottom: 2px solid #d8d8d8;
  min-width: 980px;
  color: #666;
  .header {
    margin: 0 auto;
    padding: 10px 0;
    width: 980px;
    zoom: 1;
    .site-logo {
      width: 128px;
      background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
        no-repeat;
      background-size: contain;
      height: 36px;
      text-indent: -1000px;
      overflow: hidden;
      float: left;
    }
    .login {
      float: right;
      height: 36px;
      vertical-align: middle;
      .loginBtn {
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
      }
    }
  }
}
.content {
  margin: 0 auto 30px;
  padding-top: 30px;
  width: 500px;
  min-height: 300px;
  .sendCode {
    margin-bottom: 2px;
    margin-top: -10px;
    span {
      color: #fe8c00;
      font-size: 12px;
    }
  }
  form {
    width: 400px;
    .subBtn {
      color: #222;
      border-radius: 2px;
      line-height: 1.5;
      letter-spacing: 0.1em;
      font-weight: 700;
      font-size: 14px;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
    }
  }

  .term {
    position: relative;
    padding: 3px 10px 3px 110px;
    margin: 0 auto 8px;
    zoom: 1;
    a {
      font-size: 13px;
      color: #fe8c00;
      text-decoration: none;
    }
  }
}
.footer {
  border-top: 1px solid #eee;
  padding-top: 20px;
  text-align: center;
  .copyright {
    font-size: 12px;
    font-family: initial;
    .f1 {
      color: #999;
      font-size: 13px;
    }
  }
}
</style>