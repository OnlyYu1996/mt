<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="nav-list">
        <nuxt-link to="/">网站导航</nuxt-link>
        <div class="subContainer header-nav-site">
          <dl class="hotel header-nav-third">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
            <dd>公寓</dd>
            <dd>豪华酒店</dd>
            <dd>客栈</dd>
            <dd>青年旅社</dd>
            <dd>度假酒店</dd>
            <dd>别墅</dd>
            <dd>农家院</dd>
            <dd>其它</dd>
          </dl>
          <dl class="food header-nav-third">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>火锅</dd>
            <dd>代金券</dd>
          </dl>
          <dl class="movie header-nav-third">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>北美票房榜</dd>
            <dd>电影排行榜</dd>
          </dl>
          <dl class="app header-nav-third">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appIcon"
                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                class="appIcon"
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              />
            </dd>
            <dd>
              <img
                class="appIcon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="民宿app"
                alt="民宿app"
              />
            </dd>
            <dd>
              <img
                class="appIcon"
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              />
            </dd>
            <dd>
              <img
                class="appIcon"
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              />
            </dd>
          </dl>
        </div>
      </li>
      <li class="nav-list">
        <nuxt-link to="/">美团规则</nuxt-link>
      </li>
      <li class="nav-list">
        <nuxt-link to="/">商家中心</nuxt-link>
      </li>
      <li class="nav-list">
        <nuxt-link to="/">手机APP</nuxt-link>
      </li>
      <li class="nav-list">
        <nuxt-link to="/">我的美团</nuxt-link>
        <ul class="subContainer">
          <li>
            <nuxt-link to="/">我的订单</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">我的收藏</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">抵用券</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">帐户设置</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
@hoverColor: #fe8c00;
.m-nav {
  padding: 0;
  
  .nav{
    padding: 0;
    margin: 0;
    list-style: none;
    .nav-list {
    float: right;
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0px 14px;
    &:hover {
      color: @hoverColor;
      background-color: #fff;
      border-color: #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      .subContainer {
        display: inline;
        z-index: 1000;
      }
    }
    .subContainer {
      position: absolute;
      width: 76px;
      right: -1px;
      text-align: center;
      display: none;
      li {
        color: @hoverColor;
        background-color: #fff;
        border-color: #e5e5e5;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      }
    }
    .header-nav-site {
      width: 1200px;
      background-color: #999;
      box-sizing: border-box;
      padding: 30px 36px 36px 47px;
      position: absolute;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      text-align: center;
      z-index: 1000;
      right: -1px;
      top: 95%;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      .hotel {
        width: 234px;
        float: left;
        dd {
          width: 33%;
        }
      }
      .food {
        width: 156px;
        float: left;
        dd {
          width: 50%;
        }
      }
      .movie {
        width: 90px;
        float: left;
        dd {
          width: 100%;
          text-align: center;
        }
      }
      .app {
        float: right;
        dd {
          margin: 0 8px;
          .appIcon {
            width: 60px;
            height: 60px;
          }
        }
      }
      .header-nav-third {
        margin-right: 47px;
        dt {
          margin-bottom: 18px;
          font-size: 14px;
          color: #222222;
          font-size: 500;
          text-align: center;
        }
        dd {
          float: left;
          text-align: center;
          color: #999;
          margin-inline-start: 40px;
          height: 30px;
          &:hover {
            color: @hoverColor;
          }
        }
      }
    }
  }
  }
}
</style>