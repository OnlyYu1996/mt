import Router from "koa-router";
import axios from "./utils/axios";
import Province from "../dbs/models/province";

let router = new Router({ prefix: "/geo" });
const url = "http://cp-tools.cn/geo/";
// 获取当前城市位置
router.get("/getPosition", async ctx => {
  let {
    status,
    data: { province, city }
  } = await axios.get(`${url}getPosition`);
  if (status === 200) {
    ctx.body = {
      province,
      city,
      code: 0
    };
  } else {
    ctx.body = {
      province: "",
      ciry: "",
      msg: data.msg,
      code: -1
    };
  }
});
// 获取全部省份
router.get("/province", async ctx => {
  // let province =await Province.find()
  // ctx.body={
  //     province:province.map(item=>{
  //         return {
  //             id:item.id,
  //             name:item.value[0]
  //         }
  //     })
  // }
  let {
    status,
    data: { province }
  } = await axios.get(`${url}province`);
  ctx.body = {
    province: status === 200 ? province : []
  };
});
// 获取省份的全部城市
router.get("/province/:id", async ctx => {
  // let city = await City.findOne({id: ctx.params.id})
  //
  // ctx.body = {
  //   code: 0,
  //   city: city.value.map(item => {
  //     return {province: item.province, id: item.id, name: item.name}
  //   })
  // }
  let {
    status,
    data: { city }
  } = await axios.get(`${url}province/${ctx.params.id}`);
  if (status === 200) {
    ctx.body = {
      city
    };
  } else {
    ctx.body = {
      city: []
    };
  }
});
// 获取热门城市
router.get("/hotCity", async ctx => {
  // let list = [
  //   '北京市',
  //   '上海市',
  //   '广州市',
  //   '深圳市',
  //   '天津市',
  //   '西安市',
  //   '杭州市',
  //   '南京市',
  //   '武汉市',
  //   '成都市'
  // ]
  // let result = await City.find()
  // let nList = []
  // result.forEach(item => {
  //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  // })
  // ctx.body = {
  //   hots: nList
  // }
  let {
    status,
    data: { hots }
  } = await axios.get(`${url}hotCity`);
  if (status === 200) {
    ctx.body = {
      hots
    };
  } else {
    ctx.body = {
      hots: []
    };
  }
});
// 获取全部城市
router.get("/city", async ctx => {
  let {
    status,
    data: { city }
  } = await axios.get(`${url}city`);
  if (status === 200) {
    ctx.body = {
      city
    };
  } else {
    ctx.body = {
      city: []
    };
  }
});
export default router;
