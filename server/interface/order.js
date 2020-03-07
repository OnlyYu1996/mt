import axios from "axios";
import Router from "koa-router";
import Cart from "../dbs/models/cart";
import Order from "../dbs/models/order";
import md5 from "crypto-js/md5";

let router = new Router({ prefix: "/order" });

router.post("/createOrder", async ctx => {
  let { id, price, count } = ctx.request.body;
  let time = Date();
  let orderID = md5(Math.random() * 1000 + time).toString();
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: "please login"
    };
  } else {
    let findCart = await Cart.findOne({
      cartNo: id
    });
    let order = new Order({
      id: orderID,
      count,
      total: price * count,
      time: ctx.session.passport.user,
      name: findCart.detail[0].name,
      imgs: findCart.detail[0].imgs,
      status: 0
    });
    try {
      let result = await order.save();
      if (result) {
        await findCart.remove();
        ctx.body = {
          code: 0,
          id: orderID
        };
      } else {
        ctx.body = {
          code: -1,
          msg: "购物车保存失败"
        };
      }
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: error
      };
    }
  }
});

router.post("/getOrders", async ctx => {
  if (ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      list: [],
      msg: "请登陆"
    };
  } else {
    try {
      let result = await Order.find().limit(15);
      if (result) {
        ctx.body = {
          code: 0,
          list: result
        };
      } else {
        ctx.body = {
          code: -1,
          msg: "查询失败",
          list: []
        };
      }
    } catch (error) {
      ctx.body = {
        code: -1,
        msg: "查询异常",
        list: []
      };
    }
  }
});
export default router;
