<template>
  <div class="food-container">
    <div class="botton-nav">
      <div class="title">美团导航</div>
      <dl class="b-n-content">
        <div class="b-n-container" v-for="(item,index) in bottonList" :key="index">
          <dt class="b-n-subTitle">{{item.title}}</dt>
          <div class="b-n-subList">
            <dd class="b-n-list-item" v-for="(dd,ddindex) in item.details" :key="ddindex">
              <a :href="dd.target">{{dd.name}}</a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
    <div class="com-footer">
      <div class="footer-content">
        <div class="footer-link clearfix">
          <div class="footer-column" v-for="(item,index) in footerList" :key="index">
            <dl v-for="(dl,dlInd) in item" :key="dlInd">
              <dt v-if="dl.target">
                <a :href="dl.target" rel="nofollow">{{dl.title}}</a>
              </dt>
              <dt v-else>{{dl.title}}</dt>
              <dd v-for="(dd,ddInd) in dl.details" :key="ddInd">
                {{dd.tip}}
                <a :href="dd.target" rel="nofollow">{{dd.name}}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="footer-copyright clearfix">
          <div class="footer-copyright-left">
            <p>
              ©美团网团购 meituan.com
              <a
                href="http://www.beian.miit.gov.cn/"
                target="_blank"
                style="margin-left: 20px;"
              >京ICP证070791号</a>
              <a
                href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
              >京ICP备10211739号</a>
            </p>
            <p>
              <a
                href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
                target="_blank"
              >广播电视节目制作经营许可证（京）字第03889号</a>
            </p>
            <p>
              <a
                href="https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense"
                target="_blank"
              >食品经营许可证</a>
              <a
                href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
                target="_blank"
              >互联网药品信息服务资格证</a>
            </p>
            <p>
              <a
                href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalequipment"
                target="_blank"
              >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
            </p>
          </div>
          <div class="footer-copyright-right">
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
              target="_blank"
            >京公网安备11010502025545号</a>
            <div class="footer-copyright-cert">
              <a
                href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
                title="营业执照"
                class="bus-license"
                target="_blank"
              >
                <img
                  src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"
                  alt
                />
                <p>北京三快科技有限公司</p>
              </a>
              <a
                href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
                target="_blank"
                title="备案信息"
                class="sp-ft sp-ft--record"
              >备案信息</a>
              <a
                href="http://t.knet.cn/tsearch/detail?keyword=meituan.com"
                title="可信网站认证"
                class="sp-ft sp-ft--knet"
                target="_blank"
              >可信网站认证</a>
              <a
                href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
                title="12315消费争议"
                class="sp-ft sp-ft--12315"
                target="_blank"
              >12315消费争议</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bottonList } from "@/mock/bottonList";
import { footerList } from "@/mock/footerList";
export default {
  name: "my-footer",
  data() {
    return {
      bottonList: bottonList,
      footerList: footerList
    };
  }
};
</script>
<style lang='less' scoped>
@import "../../../assets/css/default.less";
.food-container {
  margin: 40px auto 0;
  width: 1190px;
  height: auto;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: #ffffff;
  .botton-nav {
    .title {
      width: auto;
      height: 44px;
      font-size: 16px;
      font-weight: 500;
      color: #222222;
      text-align: left;
      padding-left: 20px;
      padding-top: 6px;
      line-height: 44px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    .b-n-content {
      width: 100%;
      height: auto;
      margin: 0;
      .b-n-container {
        width: 100%;
        height: auto;
        overflow: hidden;
        .b-n-subTitle {
          width: 100px;
          height: 100%;
          float: left;
          font-size: 14px;
          font-weight: 500;
          color: #222222;
          text-align: center;
          padding: 10px 0;
        }
        .b-n-subList {
          width: 1090px;
          height: auto;
          padding-top: 12px;
          float: left;
          border-bottom: 1px solid #e5e5e5;
          overflow: hidden;
          .b-n-list-item {
            width: 100px;
            height: 17px;
            font-size: 12px;
            text-align: left;
            margin-bottom: 13px;
            float: left;
            a {
              display: block;
              width: 80px;
              cursor: pointer;
              color: #666666;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              &:hover {
                color: #fe8c00;
              }
            }
          }
        }
      }
    }
  }
  .com-footer {
    background: #f8f8f8;
    margin-top: 40px;
    .footer-content {
      width: 1190px;
      margin: 0 auto;
      color: #333;
      font-size: 12px;
      line-height: 2;
      box-sizing: border-box;
      text-align: left;
      .footer-link {
        padding: 40px 45px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        .footer-column {
          width: 20%;
          float: left;
          dl {
            padding-bottom: 20px;
            color: #666;
            margin: 0;
            dt {
              color: #333;
              font-size: 14px;
              font-weight: 500;
            }
            dd {
              margin: 0;
            }
          }
        }
      }
      .footer-copyright {
        color: #999;
        padding-left: 20px;
        padding-top: 15px;
        padding-bottom: 30px;
        line-height: 1.6;
        .footer-copyright-left {
          float: left;
          a {
            margin-right: 20px;
          }
        }
      }
      .footer-copyright-right {
        float: right;
        text-align: right;
        .footer-copyright-cert {
          text-align: left;
          padding-top: 6px;
          text-align: left;
          .bus-license {
            img {
              float: left;
              width: 38px;
              height: 38px;
            }
            p {
              float: left;
              line-height: 38px;
              padding: 0 5px;
            }
          }
          .sp-ft {
            display: inline-block;
            overflow: hidden;
            text-indent: -1000px;
            height: 38px;
            background-image: url(https://s0.meituan.net/bs/fe-web-meituan/8a39c6b/img/sprites/footer.png);
            background-repeat: no-repeat;
            margin-right: 2px;
          }
          .sp-ft--record {
            width: 109px;
            background-position: 0 -167px;
          }
          .sp-ft--knet {
            width: 107px;
            background-position: 0 -127px;
          }
          .sp-ft--12315 {
            width: 107px;
            background-position: 0 -40px;
          }
        }
      }
    }
  }
}
</style>
