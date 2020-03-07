<template>
  <div class="discount-page">
    <h4>1张代金券</h4>
    <div>
      <div class="item">
        <div class="price">
          <span>
            <b>￥</b>95
          </span>
          代100元代金券
        </div>
        <div class="name">
          <a href="#" class="buy">立即抢购</a>
          <a href="#">
            <p>95元 代100元代金券</p>
          </a>
          已售20813
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang='less' scoped>
.discount-page {
  margin-bottom: 40px;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 20px;
  h4 {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
  }
  .item {
    padding-bottom: 20px;
    margin-top: 17px;
    &::after{
        clear: both;
    content: '';
    display: block;
    width: 0;
    height: 0;
    }
    .price {
      float: left;
      width: 140px;
      height: 89px;
      background-image: url(https://s0.meituan.net/bs/file/?f=meis/meishi.web:assets/74f33f3125908576.png@53635fc);
      background-size: 100% 100%;
      text-align: center;
      padding: 11px 10px 0;
      color: #333;
      font-size: 14px;
      span {
        display: block;
        font-size: 30px;
        color: #f60;
        border-bottom: 1px dashed #ccc;
        line-height: 36px;
        margin-bottom: 9px;
        padding-bottom: 8px;
        b {
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
    .name {
      float: left;
      width: 718px;
      padding-left: 20px;
      font-size: 12px;
      a {
        text-decoration: none;
        cursor: pointer;
        color: #222;
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 1px;
        }
      }
      .buy {
        width: 120px;
        height: 40px;
        font-size: 14px;
        background-color: #f90;
        text-align: center;
        line-height: 40px;
        color: #fff;
        float: right;
        display: inline-block;
        margin-top: 30px;
        border-radius: 100px;
      }
    }
  }
}
</style>