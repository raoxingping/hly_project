<template>
  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2 @click="goHomePage">
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>亲子酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--内容-->
    <section class="parentChildContent">
      <div class="topImageBox">
        <img src="../../assets/img/children.png" width="100%" height="440">
      </div>
      <ul class="playTheBeach">
        <li>
          <h4>玩海滩</h4>
          <ul class="hotelTypeList clearfix">
            <li v-for="item,index in wHTCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)">
              <!--<strong class="backNow">返现5元</strong>-->
              <img v-lazy="item.ht_ht_ImageUrl" width="231" height="175" alt="">
              <a href="javascript:;" class="title">{{item.ht_ht_HotelName}}</a>
              <div class="pricePurchase clearfix">
                <strong>￥<em>{{item.ht_ht_RecommendPrice}}</em>起</strong>
                <button>立即购买</button>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h4>游乐园</h4>
          <ul class="hotelTypeList clearfix">
            <li v-for="item,index in yLYCityHotelData" @click="clickCityData(item.ht_ht_hotelID)">
              <!--<strong class="backNow">返现5元</strong>-->
              <img v-lazy="item.ht_ht_ImageUrl" width="231" height="175" alt="">
              <a href="javascript:;" class="title">{{item.ht_ht_HotelName}}</a>
              <div class="pricePurchase clearfix">
                <strong>￥<em>{{item.ht_ht_RecommendPrice}}</em>起</strong>
                <button>立即购买</button>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h4>探历史</h4>
          <ul class="hotelTypeList clearfix">
            <li v-for="item,index in tLSCityHotelData" @click="clickCityData(item.ht_ht_hotelID)">
              <!--<strong class="backNow">返现5元</strong>-->
              <img v-lazy="item.ht_ht_ImageUrl" width="231" height="175" alt="">
              <a href="javascript:;" class="title">{{item.ht_ht_HotelName}}</a>
              <div class="pricePurchase clearfix">
                <strong>￥<em>{{item.ht_ht_RecommendPrice}}</em>起</strong>
                <button>立即购买</button>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h4>尝美食</h4>
          <ul class="hotelTypeList clearfix">
            <li v-for="item,index in cMSCityHotelData" @click="clickCityData(item.ht_ht_hotelID)">
              <!--<strong class="backNow">返现5元</strong>-->
              <img v-lazy="item.ht_ht_ImageUrl" width="231" height="175" alt="">
              <a href="javascript:;" class="title">{{item.ht_ht_HotelName}}</a>
              <div class="pricePurchase clearfix">
                <strong>￥<em>{{item.ht_ht_RecommendPrice}}</em>起</strong>
                <button>立即购买</button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'wHTCityHotelData',
      'yLYCityHotelData',
      'tLSCityHotelData',
      'cMSCityHotelData'
    ]),
    data() {
      return {
        titleList:[
          '玩海滩',
          '探历史',
          '尝美食'
        ]
      }
    },
    created(){
      this.initData().then(()=>{
      },err=>{
        this.$notify({
          message:err,
          type: 'error'
        });
      })
    },
    methods: {
      //点击酒店跳转
      clickCityData(id){
        this.$router.push({name:'HotelDetalis', params: {id: id}})
      },
      //初始化
      async initData(){
        //玩海滩
        let Woptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":30,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        await this.$store.dispatch('initWHTCityHotelData',Woptions);

        //游乐园
        let YLYoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":25,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        await this.$store.dispatch('initYLYCityHotelData',YLYoptions);

        //探历史
        let TLSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":31,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        await this.$store.dispatch('initTLSCityHotelData',TLSoptions);

        //尝美食
        let CMSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":32,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        await this.$store.dispatch('initCMSCityHotelData',CMSoptions);
      },
      goHomePage() {
        this.$router.push({name: 'HotelHomePage'})
      }
    },
  }
</script>
<style scoped>
  /*头部*/
  .parentChildHeaderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .parentChildHeader {
    width: 1000px;
    margin: 0 auto;
  }

  .parentChildHeader > h2 {
    float: left;
  }

  .parentChildHeader > h2:hover {
    cursor: pointer;
  }

  .parentChildHeader strong {
    font: bold 30px/1 "宋体";
    vertical-align: bottom;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .parentChildHeader > a {
    float: right;
    font: 16px/2 "微软雅黑";
    padding: 0 15px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    border: 1px solid #999;
    color: #999;
    margin-top: 10px;
  }

  .parentChildHeader > a:hover {
    border-color: #f60;
    color: #f60;
  }

  /*头部结束*/

  /*内容*/
  .parentChildContent {
    width: 100%;
    background-color: #fee2f1;
  }

  .topImageBox {
    width: 100%;
  }

  .playTheBeach {
    width: 1000px;
    margin: 0 auto;
  }

  .playTheBeach > li {
    cursor: pointer;
    margin-bottom: 14px;
  }

  .playTheBeach h4 {
    font: 25px/50px "微软雅黑";
    color: #fd78b1;
    background-color: #f3d9f6;
    text-align: center;
  }

  .hotelTypeList {
    padding: 13px 7px;
  }

  .hotelTypeList > li {
    position: relative;
    width: 231px;
    margin: 7px;
    background-color: #fff;
    padding-bottom: 20px;
    float: left;
  }

  .hotelTypeList > li > .backNow {
    position: absolute;
    left: 0;
    top: 0;
    width: 54px;
    height: 57px;
    background-color: #fd78b1;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font: 20px/28px "宋体";
    text-align: center;
    color: #fff;
  }

  .hotelTypeList > li > .title {
    font: 12px/42px "微软雅黑";
    color: #404040;
    text-indent: 5px;
  }

  .hotelTypeList > li > .title:hover {
    color: #f60;
  }

  .hotelTypeList > li > .pricePurchase {
    margin-top: 26px;

  }

  .hotelTypeList .pricePurchase > strong{
    font: 12px/20px "微软雅黑";
    color: #fd78b1;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
  }

  .pricePurchase > strong > em {
    font-size: 20px;
  }

  .pricePurchase > button {
    float: right;
    margin-right: 5px;
    font: 20px/36px "微软雅黑";
    color: #fff;
    background-color: #fd78b1;
    padding: 0 10px;
  }
</style>
