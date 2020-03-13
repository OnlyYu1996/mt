import Router from 'koa-router';
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from "../dbs/models/users";
import Passport from "./utils/passport";
import Email from "../dbs/config";
import axios from "./utils/axios";

let router = new Router({
  prefix: "/users"
});

let Store = new Redis().client;

// 注册
router.post("/signup", async ctx => {
  const { username, password, email, code, phone } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, `code`);
    const saveExpire = await Store.hget(`nodemail:${username}`, `expire`);
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期，请重新尝试"
        };
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "请填写正确的验证码"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "请填写验证码"
    };
  }
  let findName = await User.find({
    username
  });
  let findPhone = await User.find({
    phone
  });
  let findEmail = await User.find({
    email
  });
  if (findName.length) {
    ctx.body = {
      code: -1,
      msg: "用户名已被注册"
    };
    return;
  }
  if (findPhone.length) {
    ctx.body = {
      code: -1,
      msg: "手机号已被注册"
    };
    return;
  }
  if (findEmail.length) {
    ctx.body = {
      code: -1,
      msg: "邮箱已被注册"
    };
    return;
  }
  let nuser = await User.create({
    username,
    phone,
    password,
    email,
    createTime: new Date().getTime()
  });
  if (nuser) {
    // let res = await axios.post("users/signin", {
    //   phone,
    //   password
    // });
    // if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功"
      };
    // } else {
    //   ctx.body = {
    //     code: -1,
    //     msg: "error"
    //   };
    // }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    };
  }
});
// 登陆
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
});
// 验证码
router.post("/verify", async (ctx, next) => {
  let username = ctx.request.body.username;
  const saveExpire = await Store.hget(`nodemail:${username}`, "expire");
  // if (saveExpire && new Date().getTime() - saveExpire < 0) {
  //   ctx.body = {
  //     code: -1,
  //     msg: "验证码请求过于频繁"
  //   };
  //   return false;
  // }
  // 邮件发送方
  let transporter = nodeMailer.createTransport({
    service: "qq",
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  });
  // 邮件接收方
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  };
  console.log(ko.code);
  // 邮件显示的内容
  let mailOptions = {
    from: `'认证邮件' <${Email.smtp.user}>`,
    to: ko.email,
    subject: "美团注册码",
    html: `您在美团中注册的邀请码是${ko.code}`
  };
  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("sendEmailError" + err);
    } else {
      Store.hmset(
        `nodemail:${ko.user}`,
        "code",
        ko.code,
        "expire",
        ko.expire,
        "email",
        ko.email
      );
    }
  });
  ctx.body = {
    code: 0,
    msg: "验证码发送成功"
  };
});
// 退出
router.get("/exit", async (ctx, next) => {
  // 注销
  await ctx.logout();
  // 验证注销动作
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    };
  } else {
    ctx.body = {
      code: -1
    };
  }
});
// 获取用户名
router.get("/getUser", async ctx => {
  if (ctx.isAuthenticated()) {
    const { username, phone, email } = ctx.session.passport.user;
    ctx.body = {
      user: username,
      phone,
      email
    };
  } else {
    ctx.body = {
      user: "",
      eamil: "",
      phone: ""
    };
  }
});
export default router;
