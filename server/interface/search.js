import Router from "koa-router";
import axios from "axios";
import poi from "../dbs/models/poi";

let router = new Router({
  prefix: "/search"
});
const url = "http://cp-tools.cn/search/";

router.get("/top", async ctx => {
  let {
    status,
    data: { top }
  } = await axios.get(`${url}top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
    }
  });
  ctx.body = {
    top: status === 200 ? top : []
  };
});
router.get('/hotPlace',async ctx=>{
    let {status,data:{result}}=await axios.get(`${url}hotPlace`,{
        params:{
            city:ctx.query.city
        }
    })
    ctx.body={
        result:status===200?result:[],
        code:0
    }
})
router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get(`${url}resultsByKeywords`, {
    params: {
      city,
      keyword,
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
  }
})

router.get('/products', async (ctx) => {
  let keyword = ctx.query.keyword || '旅游'
  let city = ctx.query.city || '北京'
  let {
    status,
    data: {
      product,
      more
    }
  } = await axios.get(`${url}products`, {
    params: {
      keyword,
      city,
    }
  })
  if (status === 200) {
    ctx.body = {
      product,
      more: ctx.isAuthenticated() ? more: [],
      login: ctx.isAuthenticated()
    }
  }else{
    ctx.body = {
      product: {},
      more: ctx.isAuthenticated() ? more: [],
      login: ctx.isAuthenticated()
    }
  }
})
export default router;
