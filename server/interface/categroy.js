import Router from "koa-router";
import axios from "./utils/axios";

let router = new Router({
  prefix: "/categroy"
});
const url = "http://cp-tools.cn/categroy/";

router.get("/crumbs", async ctx => {
  let {
    status,
    data: { areas, types }
  } = await axios.get(`${url}crumbs`, {
    params: {
      city: ctx.query.city?ctx.query.city.replace("市", "") : "北京"
    }
  });
  ctx.body = {
    areas: status === 200 ? areas : [],
    types: status === 200 ? types : []
  };
});
export default router;
