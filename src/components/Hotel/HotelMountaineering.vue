<template>
  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2 @click="goHomePage">
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>依山酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--content-->
    <section>
      <div class="imageBox"></div>
      <div class="contentSection">
        <!--出发城市-->
        <div class="goCity clearfix">
          <strong>出发地城市</strong>
          <div class="goCityList">
            <a href="javascript:;" v-for="item,index in cityList" :key="index">{{item}}</a>
          </div>
        </div>
        <!--地方展示-->
        <ul class="scenicSpotList">
          <li>
            <h1>安徽黄山</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in aHHSCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>泰安泰山</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in tATSCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>青岛崂山</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in qDLSCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>南京紫金山</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in zJSCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>迪庆香格里拉</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in dQXGCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>三亚凤凰岭</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in sYFHLCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>厦门五老峰</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in wLFCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h1>舟山普陀山</h1>
            <ul class="scenicSpotHotelList clearfix">
              <li v-for="item,index in pTSCityHotelData"  @click="clickCityData(item.ht_ht_hotelID)" >
                <img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
                <div class="title">
                  <a href="javascript:;">{{item.ht_ht_HotelName}}</a>
                </div>
                <div class="priceAndSubmit clearfix">
                  <strong>￥<span>{{item.ht_ht_RecommendPrice}}</span>起</strong>
                  <a href="javascript:;">立即购买</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'aHHSCityHotelData',
      'tATSCityHotelData',
      'qDLSCityHotelData',
      'zJSCityHotelData',
      'dQXGCityHotelData',
      'sYFHLCityHotelData',
      'wLFCityHotelData',
      'pTSCityHotelData',
    ]),
    data() {
      return {
        id:'',
        cityList: [
          '华东',
          '华北',
          '华南',
          '西部',
          '华中'
        ],
        scenicSpotList: [
          '安徽黄山',
          '泰安泰山',
          '青岛崂山',
          '南京紫金山',
          '迪庆香格里拉',
          '三亚凤凰岭',
          '厦门五老峰',
          '舟山普陀山'
        ],
      }
    },
    created(){
      this.id = this.$route.params.id
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
        //安徽黄山
        let AHHSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'140', //城市
          "ht_ht_HotelName":'黄山',
          "page":"1", //页面编号  默认为
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initAHHSCityHotelData',AHHSoptions)
        //泰安泰山
        let TATSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'177', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initTATSCityHotelData',TATSoptions)
        //青岛崂山
        let QDLSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'170', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initQDLSCityHotelData',QDLSoptions)
        //南京紫金山
        let ZJSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'108', //城市
          "ht_ht_HotelName":'紫金山',
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initZJSCityHotelData',ZJSoptions)
        //迪庆香格里拉
        let DQXGoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'314', //城市
          "ht_ht_HotelName":'香格里拉',
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initDQXGCityHotelData',DQXGoptions)
        //三亚凤凰岭
        let SYFHLoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'267', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initSYFHLCityHotelData',SYFHLoptions)
        //厦门五老峰
        let WLFoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'150', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initWLFCityHotelData',WLFoptions)
        //舟山普陀山
        let PTSoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":this.id,//推荐类型
          "sm_af_AreaID":'129', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };

        await this.$store.dispatch('initPTSCityHotelData',PTSoptions)

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

  /*contentSectionStart*/

  section {
    width: 100%;
    background-color: #4fb1f2;
    padding-bottom: 20px;
  }

  .imageBox {
    width: 100%;
    height: 626px;
    background: url("../../assets/img/dengshan.jpg") no-repeat center;
  }

  .contentSection {
    width: 1000px;
    margin: 0 auto;
  }

  .goCity {
    padding: 10px 0 0 18px;
    font: 20px/30px "微软雅黑";
  }

  .goCity > strong {
    float: left;
    color: #fff;
    background-color: #DA305D;
    padding: 0 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .goCity > .goCityList {
    float: left;
  }

  .goCity > .goCityList > a {
    float: left;
    margin: 0 10px;
    color: #000;
    padding: 0 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .goCity > .goCityList > .active {
    color: #fff;
    background-color: #0E1A4C;
  }

  .scenicSpotList h1 {
    width: 100%;
    font: 26px/50px "微软雅黑";
    background-color: #0d58ab;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .scenicSpotHotelList > li {
    width: 312px;
    cursor: pointer;
    background-color: #fff;
    float: left;
    margin: 0 10px;
  }

  .scenicSpotHotelList .title {
    font: 18px/1 "微软雅黑";
    padding:5px 0 0 10px;
    height: 60px;
  }

  .scenicSpotHotelList .title a {
    color: #404040;
    display: inline;
  }

  .scenicSpotHotelList .title a:hover {
    color: #f60;
  }

  .priceAndSubmit > strong  {
    float: left;
    color: #1d4970;
    font: 16px/65px "微软雅黑";
    text-indent: 5px;
  }

  .priceAndSubmit > strong > span {
    color: #f60;
  }

  .priceAndSubmit > a {
    margin-right: 5px;
    float: right;
    background: #1d4970;
    margin-top: 12px;
    color: #fff;
    font: bold 20px/36px "微软雅黑";
    text-align: center;
    padding: 0 20px;
  }
</style>
