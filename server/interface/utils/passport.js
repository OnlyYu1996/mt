import passport from "koa-passport"; // 用于登陆验证
import LocalStrategy from "passport-local"; // passport的本地策略
import UserModel from "../../dbs/models/users";

passport.use(
  // usernameField 为登录时传过来的字段，默认为username
  new LocalStrategy(
    {
      usernameField: "phone",
      passwordField: "password"
    },
    async function(phone, password, done) {
      let where = {
        phone
      };
      let result = await UserModel.findOne(where);
      if (result != null) {
        if (result.password === password) {
          return done(null, result);
        } else {
          return done(null, false, "密码错误");
        }
      } else {
        return done(null, false, "用户不存在");
      }
    }
  )
);

// 用户登陆后，把用户数据存储在session中,序列化ctx.login()触发
passport.serializeUser(function(user, done) {
  done(null, user);
});
// 每次请求的时候，会从session中读取用户,反序列化（请求时,session中存在"passport":{"user":"1"}触发
passport.deserializeUser(function(user, done) {
  return done(null, user);
});

export default passport;
