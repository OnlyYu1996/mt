<template>
  <div class="mu-container">
    <div class="nav-title">
      <span>全部分类</span>
    </div>
    <dl class="nav-left" @mouseleave="mouseleave">
      <dd v-for="(item,index) in menu" :key="index" @mouseenter="mouseenter">
        <i :class="['iconfont',item.type]" :name="item.name[0]"/>
        <span class="nav-item">
          <span v-for="(title,t) in item.name" :key="t">
            <span>{{title}}</span>
            <span class="nav-separate" v-if="item.name.length>0&&t!=item.name.length-1">/</span>
          </span>
        </span>
        <span class="icon-right" />
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,index) in curdetail.childs">
        <div class="cagetory-nav-detail" :key="index">
          <div class="detail-area">
            <div class="detail-title">
              <h2>{{item.title}}</h2>
              <a class="detail-more">更多
                <span class="icon-right" />
              </a>
            </div>
            <div class="detail-container">
              <span v-for="v in item.details" :key="v">{{v}}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind:"",
     
    };
  },
  computed:{
    curdetail:function(){
      const result=this.menu.filter((item)=>item.name[0]===this.kind)
      if(!result[0]){
        result[0]=[{childs:[{details:[]}]}]
      }
      return result[0]
    },
    menu:function(){
      return this.$store.state.home.menu
    }
  },
  methods:{
    // 鼠标离开列表时
    mouseleave(){
      let self=this
      self._timer=setTimeout(() => {
        self.kind=""
      }, 150);
    },
    // 鼠标悬浮在列表时
    mouseenter(e){
      this.kind=e.target.querySelector('i').attributes["name"].value
    },
    // 鼠标悬浮在详情时
    sover(){
      clearTimeout(this._timer)
    },
    // 鼠标离开详情时
    sout(){
      this.kind=""
    }
  }
};
</script>

<style lang="less" scoped>
.icon-food{
  color: #FE8C00;
}
@hoverColor: #222222;
.mu-container {
  height: 475px;
  border: 1px solid #e5e5e5;
  background-color: white;
  position: relative;
  margin-top: -70px;
  .nav-title {
    height: 60px;
    padding-top: 15px;
    box-sizing: border-box;
    span {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
    }
  }
  .nav-left {
    .icon-right {
      right: 13px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    
    dd {
      height: 26px;
      line-height: 26px;
      padding: 2px 12px;
      box-sizing: border-box;
      position: relative;
      color: #646464;
      .nav-item {
        margin-left: 5px;
        .nav-separate{
          padding: 0 2px;
        }
      }
    }
    dd:hover {
      background: rgba(255, 150, 0, 0.08);
      color: @hoverColor;
      font-weight: 500;
      .icon-right {
        color: @hoverColor;
        border-bottom: 1px solid @hoverColor;
        border-right: 1px solid @hoverColor;
      }
    }
  }
  .detail{
    position: absolute;
    top: 60px;
    left: 246px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 199;
    color: #666;
    overflow: hidden;
    .cagetory-nav-detail{
      color: #666;
      .detail-area{
        padding: 0 30px;
        .detail-title{
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;
          h2{
            display: inline-block;
          }
          .detail-more{
            font-size: 12px;
            color: #999;
            font-weight: 400;
            float: right;
            margin-right: 6px;
            position: relative;
            cursor: pointer;
            .icon-right{
              top: 0;
              bottom: 0;
              right: -6px;
              margin: auto;
            }
          }
        }
        .detail-container{
          span{
            color: #999;
            font-size: 12px;
            line-height: 15px;
            display: inline-block;
            margin-right: 16px;
            margin-top: 10px;
            cursor: pointer;
            &:hover{
              color: #FE8C00;
            }
          }
        }
      }
    }
  }
}
</style>