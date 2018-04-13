<template>
  <div>
    <div class="AdmissionTickeHomePageWrap">
      <!--头部-->
      <div class="AdmissionTickeHomePageWrapNavAndPicture clearfix">
        <!--头部左面导航-->
        <div class="AdmissionTickeHomePageWrapNav">
          <ul class="AdmissionTickeHomePageWrapNavList">
            <li class="seasonSelection">
              <h5><img src="../../assets/img/icon-star.png" width="14" height="14">当季精选</h5>
              <div class="clearfix">
                <a href="javascript:;" v-show="featuredList.length" v-for="item in featuredList" @click="clickFeaturedList(item)">{{item.tm_ts_Name}}</a>
              </div>
            </li>
            <li class="surroundingCities">
              <h5><img src="../../assets/img/icon-location.png" width="12" height="15">周边城市</h5>
              <div class="clearfix">
                <a href="javascript:;" v-for="item in cityList" @click="clickCityList(item)">{{item.sm_af_AreaName}}</a>
              </div>
            </li>
            <li class="hotCities">
              <h5><img src="../../assets/img/icon-fire.png" width="12" height="15">热门城市</h5>
              <div class="clearfix">
                <a href="javascript:;" v-for="item in hotCityList" @click="clickHotCityList(item)">{{item.sm_af_AreaName}}</a>
                <a href="javascript:;">更多城市>></a>
              </div>
            </li>
            <li class="themeOfPlay">
              <h5><img src="../../assets/img/icon-baloon.png" width="11" height="13">游玩主题</h5>
              <div class="clearfix">
                <a href="javascript:;" v-for="item in themeTypeNameList" @click="clickThemeTypeNameList(item)">{{item}}</a>
              </div>
            </li>
          </ul>
        </div>
        <!--头部右面轮播-->
        <div class="AdmissionTickeHomePageWrapPicture">
          <div class="block">
            <el-carousel height="370px">
              <el-carousel-item v-for="item,index in topBigImageList" :key="index">
                <img alt="" v-lazy="item.tm_tbi_Image[0]" style="height: 100%" @click="clickTopBigImageList(item)"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!--内容-->
      <section class="AdmissionTickeHomePageWrapContent">
        <!--身边景点-->
        <div class="AdmissionTickeAsightsAround">
          <!--标题和导航-->
          <div class="AdmissionTickeAsightsAroundTitel clearfix">
            <h2>身边景点</h2>
            <ul class="AdmissionTickeAsightsAroundTitelList">
              <li v-show="nearList.length" v-for="item,index in nearList" @mouseover="clickTourSiteMXList(item,index)">
                <a href="javascript:;" :class="{active:index==n}">{{item.hotcity}}</a>
              </li>
            </ul>
            <div class="AdmissionTickeAsightsAroundTitelMore">
              <a href="javascript:;" @click="MoreSite">更多景点</a>
            </div>
          </div>
          <!--类型与展示-->
          <div class="AdmissionTickeAsightsAroundContent clearfix">
            <!--门票类型-->
            <div class="AdmissionTickeAsightsAroundContentType">
              <ul>
                <li class="hotSpring">
                  <a href="javascript:;">{{themeTypeNameList[0]}}</a>
                </li>
                <li class="ancientTownGarden">
                  <a href="javascript:;">{{themeTypeNameList[1]}}</a>
                </li>
                <li class="aScenicSpot">
                  <a href="javascript:;">{{themeTypeNameList[2]}}</a>
                </li>
              </ul>
              <ul>
                <li class="themePark">
                  <a href="javascript:;">{{themeTypeNameList[3]}}</a>
                </li>
                <li class="performance">
                  <a href="javascript:;">{{themeTypeNameList[4]}}</a>
                </li>
                <li class="lookAtMore">
                  <a href="javascript:;"><img src="../../assets/img/icon-readmore.png" width="50" height="60">查看更多</a>
                </li>
              </ul>
            </div>
            <!--门票展示-->
            <div class="AdmissionTickeAsightsAroundContentShow">
              <ul class="AdmissionTickeAsightsAroundContentShowList clearfix">
                <router-link tag="li" :to="{name:'TicketsDetail', params: { id: item.tm_ts_Code }}" v-for="item,index in adminNearTickeFilterObj.hcTourSiteList" :key="index">
                  <!--img部分-->
                  <div class="AdmissionTickeAsightsAroundContentShowImgBox">
                    <img  width="188" height="110" v-lazy="item.tm_ts_ShowImage[0]">
                    <div></div>
                    <span>满意度:100%</span>
                  </div>
                  <!--简介-->
                  <div class="AdmissionTickeAsightsAroundContentShowContentBox">
                    <strong>{{item.tm_ts_Name}}</strong>
                    <span>￥{{item.tm_ts_SuggestPrice}}起</span>
                  </div>
                </router-link>
                <!--<li v-for="item in admAdmissionTickeAsightsAroundTitel inNearTickeFilterObj.hcTourSiteList">-->
                  <!--&lt;!&ndash;img部分&ndash;&gt;-->
                  <!--<div class="AdmissionTickeAsightsAroundContentShowImgBox">-->
                    <!--<img  width="188" height="110" v-lazy="item.tm_ts_ShowImage[0]">-->
                    <!--<div></div>-->
                    <!--<span>满意度:100%</span>-->
                  <!--</div>-->
                  <!--&lt;!&ndash;简介&ndash;&gt;-->
                  <!--<div class="AdmissionTickeAsightsAroundContentShowContentBox">-->
                    <!--<strong>{{item.tm_ts_Name}}</strong>-->
                    <!--<span>￥{{item.tm_ts_SuggestPrice}}起</span>-->
                  <!--</div>-->
                <!--</li>-->
              </ul>
            </div>
          </div>
        </div>
        <!--热门目的地-->
        <div class="AdmissionTickeHotDestination">
          <div class="AdmissionTickeHotDestinationTitle">
            <h2>热门目的地</h2>
          </div>
          <div class="AdmissionTickeHotDestinationContent">
            <ul class="AdmissionTickeHotDestinationList clearfix">
              <li v-for="item in hotList" @click="clickHotList(item)">
                <img width="390" height="160" v-lazy="item.tm_ts_ShowImage[0]">
                <div></div>
                <span>{{item.tm_ts_Name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--境外景点-->
        <div class="overseasScenicSpots">
          <div class="overseasScenicSpotsTitle clearfix">
            <h2>境外景点</h2>
            <ul class="overseasScenicSpotsTitleNavList">
              <li @mouseover="clickOutList(item,index)" v-for="item,index in outList"><a href="javascript:;" :class="{active:index==m}">{{item.tm_ts_GreatName}}</a></li>
            </ul>
            <div class="overseasScenicSpotsTitleMore">
              <a href="javascript:;" @click="OutsideSite">更多景点</a>
              <!--<router-link to="/comment/AdmissionTicketMore">更多景点</router-link>-->
            </div>
          </div>
          <!--境外景点展示-->
          <div class="overseasScenicSpotsContent">
            <ul class="overseasScenicSpotsContentList clearfix">
              <li v-for="item in outListObj.gtTourSiteList" @click="clickGtTourSiteList(item)">
                <div class="overseasScenicSpotsContentImgBox">
                  <img  width="188" height="110" v-lazy="item.tm_ts_ShowImage[0]">
                  <strong></strong>
                  <span>满意度:99%</span>
                </div>
                <div class="overseasScenicSpotsContentcontentBox">
                  <strong>{{item.tm_ts_Name}}</strong>
                  <span>￥{{item.tm_ts_SuggestPrice}}起</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--合作景区-->
        <div class="cooperativeScenicSpot">
          <div class="cooperativeScenicSpotTitle">
            <h2>合作景区</h2>
          </div>
          <div class="cooperativeScenicSpotContent">
            <ul class="cooperativeScenicSpotContentList clearfix">
              <li v-for="item in cooperationList">
                <a href="javascript:;">
                  <img  width="188" height="98" v-lazy="item.tm_cs_ShowImage[0]">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'admissionTicketHomePageObj',
      'nearList',
      'themeTypeNameList',
      'adminNearTickeFilterObj',
      'hotList',
      'outList',
      'cityList',
      'outListObj',
      'featuredList',
      'hotCityList',
      'cooperationList',
      'topBigImageList'
    ]),
    data() {
      return {
        id:'',
        m:0,
        n:0
      }
    },
    created(){
      //获取所有省
      let options = {
        "areaPid": 3337
      };

//      this.$store.commit('showLoading')
      this.initCity()
      .then(name => {
        this.$store.dispatch('initProvice',options)
        .then(data=>{
          let id = data.filter(item=>{
            if(item.sm_af_AreaName==(name+'省')){
              return true
            }
            return false
          })[0].sm_af_AreaID
          this.id = id
          this.initData(id).then(() => {
//          this.$store.commit('hideLoading');
          })
          let cityOptions = {
            "areaPid": id
          };
          this.$store.dispatch('initProvice',cityOptions)
          .then(data=>{
            this.$store.commit('initCityList',data)
          })
        })
      })
    },
    methods: {
      //点击更多景点
      MoreSite(){
        this.$router.push({name: 'AdmissionTicketMore', params: {id: this.id}})
      },
      OutsideSite(){
        this.$router.push({name: 'AdmissionTicketMore', params: {id: 32}})
      },
      //点击上面的周边城市
      clickCityList(item){
        this.$router.push({name: 'AdmissionTicketMore', params: {id: item.sm_af_AreaID}})
      },
      //点击上面的热门城市
      clickHotCityList(item){
        this.$router.push({name: 'AdmissionTicketMore', params: {id: item.sm_af_AreaID}})
      },
      //点击上面的游玩主题
      clickThemeTypeNameList(item){
        this.$router.push({name: 'AdmissionTicketMore', params: {id: item.sm_af_AreaID}})
      },
      //点击轮播图
      clickTopBigImageList(item){
        console.log(item)
      },
      //点击热门目的地
      clickHotList(item){
        this.$router.push({name: 'TicketsDetail', params: {id: item.tm_ts_Code}})
      },
      //点击境外景点
      clickGtTourSiteList(item){
        this.$router.push({name: 'TicketsDetail', params: {id: item.tm_ts_Code}})
      },
      //点击当季精选
      clickFeaturedList(item){
        this.$router.push({name: 'TicketsDetail', params: {id: item.tm_ts_Code}})
      },
      //选中境外景点
      clickOutList(item,index){
        this.m = index;
        this.$store.commit('setOutList',item)
      },
      initCity() {
        return new Promise((relove, reject) => {
          var city = ['北京', '上海', '重庆', '宁夏', '新疆', '台湾', '香港', '澳门'];
          $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
            let newCity = '';
            for (var i = 0; i < city.length; i++) {
              if (city[i] == remote_ip_info.province) {
                newCity = remote_ip_info.province + '市'
              } else {
                newCity = remote_ip_info.province;
              }
            }
            relove(newCity)
          });
        })
      },
      async initData(id) {
        let initOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tm_ts_ProviceID": id
        };
        await this.$store.dispatch('initAdmissionTicketHomePage',initOptions)
      },
      clickTourSiteMXList(item,index){
        this.n = index;
        this.$store.commit('setAdminNearTickeFilterObj',item)
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  .AdmissionTickeHomePageWrap {
    width: 1190px;
    margin: 20px auto;
    padding-bottom:100px;
  }

  /*头部左边导航开始*/
  .AdmissionTickeHomePageWrapNav {
    float: left;
    width: 268px;
    height: 370px;
    padding: 4px 20px 10px;
    border: 2px solid #ff6600;
    background-color: #fff3ed;
  }

  .AdmissionTickeHomePageWrapNav a {
    color: #666;
    margin-right: 10px;
    float: left;
    font: 12px/26px "宋体";
  }

  .AdmissionTickeHomePageWrapNav a:hover {
    color: #f60;
  }

  .AdmissionTickeHomePageWrapNav h5 {
    font: bold 14px/20px "微软雅黑";
    color: #ab4400;
  }

  .AdmissionTickeHomePageWrapNavList li {
    margin-top: 10px;
    max-height: 75px;
    overflow: hidden;
  }

  .AdmissionTickeHomePageWrapNavList img {
    margin: -4px 5px 0 0;
  }

  /*头部左边导航结束*/
  /*头部右边轮播开始*/
  .AdmissionTickeHomePageWrapPicture {
    float: right;
    height: 370px;
    width: 888px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*头部右边轮播结束*/

  /*头部结束*/

  /*内容部分*/
  .AdmissionTickeHomePageWrapContent {
    margin-top: 35px;
  }

  /*身边景点*/
  /*身边景点Title开始*/
  .AdmissionTickeAsightsAroundTitel {
    border-bottom: 2px solid #07afab;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .AdmissionTickeAsightsAroundTitel h2 {
    font: bold 20px/24px "微软雅黑";
    color: #07afab;
    float: left;
  }

  .AdmissionTickeAsightsAroundTitelList {
    float: left;
    margin-left: 90px;
    font: 14px/24px "宋体";
  }

  .AdmissionTickeAsightsAroundTitelList li {
    float: left;
    margin-right: 5px;
  }

  .AdmissionTickeAsightsAroundTitelList .active {
    font-weight: bold;
    color: #fff;
    background-color: #07afab;
  }

  .AdmissionTickeAsightsAroundTitelList a {
    padding: 0 20px;
    color: #666;
  }

  .AdmissionTickeAsightsAroundTitelMore {
    float: right;
    font: 12px/20px "微软雅黑";
  }

  .AdmissionTickeAsightsAroundTitelMore a {
    color: #999;
  }

  /*身边景点Title结束*/

  /*身边景点内容开始*/
  .AdmissionTickeAsightsAroundContentType {
    float: left;
    height: 365px;
  }

  .AdmissionTickeAsightsAroundContentType ul {
    float: left;
    width: 95px;
  }

  .AdmissionTickeAsightsAroundContentType a {
    color: #fff;
    width: 100%;
    font-size: 16px;
    text-align: center;
  }

  .AdmissionTickeAsightsAroundContentType a:hover {
    opacity: .5;
  }

  .AdmissionTickeAsightsAroundContentType .hotSpring {
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
    background-color: #24adc6;
    line-height: 94px;
  }

  .AdmissionTickeAsightsAroundContentType .ancientTownGarden {
    line-height: 134px;
    background-color: #0fa8a9;
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .aScenicSpot {
    line-height: 134px;
    background-color: #50c389;
    border-bottom: 1px dashed #166877;
    border-right: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .themePark {
    line-height: 134px;
    background-color: #0abda6;
    border-bottom: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .performance {
    line-height: 134px;
    background-color: #24adc6;
    border-bottom: 1px dashed #166877;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore {
    height: 95px;
    border-bottom: 1px dashed #166877;
    line-height: 1;
    background: url("../../assets/img/readmore-bg.png") no-repeat -40px -80px;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore a {
    height: 100%;
    font-size: 12px;
  }

  .AdmissionTickeAsightsAroundContentType .lookAtMore img {
    display: block;
    padding-top: 10px;
    margin: 0 auto;
  }

  /*景点门票类型结束*/

  /*门票展示开始*/

  .AdmissionTickeAsightsAroundContentShow {
    width: 990px;
    float: left;
    margin-left: 7px;
  }

  .AdmissionTickeAsightsAroundContentShowList li {
    width: 188px;
    height: 175px;
    margin: 0 0 15px 10px;
    box-shadow: 3px 3px #ccc;
    float: left;
  }

  .AdmissionTickeAsightsAroundContentShowList li:hover {
    cursor: pointer;
  }

  .AdmissionTickeAsightsAroundContentShowList li:hover .AdmissionTickeAsightsAroundContentShowContentBox strong {
    color: #f60;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox {
    position: relative;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    opacity: .2;
    height: 24px;
  }

  .AdmissionTickeAsightsAroundContentShowImgBox span {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #cccccc;
    font: 12px/2 "微软雅黑";
    margin-left: 10px;

  }

  .AdmissionTickeAsightsAroundContentShowContentBox {
    padding: 7px 0 0 10px;
    font: 15px/2 "微软雅黑";
    background-color: #fff;
  }

  .AdmissionTickeAsightsAroundContentShowContentBox strong {
    display: block;
    color: #404040;
  }

  .AdmissionTickeAsightsAroundContentShowContentBox span {
    display: block;
    color: #ff6600;
  }

  /*门票展示开始结束*/

  /*身边景点结束*/

  /*热门目的地开始*/

  .AdmissionTickeHotDestinationTitle {
    font: bold 20px/35px "微软雅黑";
    color: #e15b38;
    border-bottom: 2px solid #e15b38;
  }

  .AdmissionTickeHotDestinationContent {
    width: 1190px;
    overflow: hidden;
  }

  .AdmissionTickeHotDestinationList {
    width: 1200px;
  }

  .AdmissionTickeHotDestinationList li {
    margin: 10px 10px 0 0;
    float: left;
    position: relative;
  }

  .AdmissionTickeHotDestinationList div {
    width: 100%;
    height: 32px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    opacity: .3;
  }

  .AdmissionTickeHotDestinationList span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font: 12px/32px "微软雅黑";
    text-align: center;
  }

  .AdmissionTickeHotDestinationList li:hover {
    cursor: pointer;
  }

  .AdmissionTickeHotDestinationList li:hover span {
    color: #f60;
  }

  /*热门目的地结束*/

  /*境外景点开始*/

  .overseasScenicSpots {
    margin-top: 24px;
  }

  .overseasScenicSpotsTitle {
    border-bottom: 2px solid #935db1;
    padding-bottom: 10px;
  }

  .overseasScenicSpotsTitle h2 {
    float: left;
    font: bold 20px/24px "微软雅黑";
    color: #935db1;
  }

  .overseasScenicSpotsTitleNavList {
    float: left;
    margin-left: 90px;
    font: 14px/24px "宋体";
  }

  .overseasScenicSpotsTitleNavList li {
    float: left;
    margin-right: 5px;
  }

  .overseasScenicSpotsTitleNavList li .active {
    background-color: #935db1;
    color: #fff;
    font-weight: bold;
  }

  .overseasScenicSpotsTitleNavList li a {
    padding: 0 20px;
    color: #666;
  }

  .overseasScenicSpotsTitleMore {
    float: right;
    font: 12px/20px "微软雅黑";
  }

  .overseasScenicSpotsTitleMore a {
    color: #999;
  }

  /*境外景点标题结束*/

  /*境外景点图片开始*/

  .overseasScenicSpotsContent {
    margin-top: 10px;
    width: 1190px;
    }

  .overseasScenicSpotsContentList {
    width: 1200px;
  }

  .overseasScenicSpotsContentList li {
    border: 1px solid #ccc;
    width: 188px;
    box-sizing: content-box;
    margin-right: 10px;
    box-shadow: 2px 3px #ccc;
    float: left;
  }

  .overseasScenicSpotsContentList li:hover {
    border-color: #f60;
    cursor: pointer;
  }
  .overseasScenicSpotsContentcontentBox strong{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overseasScenicSpotsContentList li:hover .overseasScenicSpotsContentcontentBox strong {
    color: #f60;
  }

  .overseasScenicSpotsContentImgBox {
    position: relative;
  }

  .overseasScenicSpotsContentImgBox strong {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .3;
    height: 24px;
  }

  .overseasScenicSpotsContentImgBox span {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #ccc;
    font: 12px/2 "宋体";
    margin-left: 10px;
  }

  .overseasScenicSpotsContentcontentBox {
    padding-left: 10px;
  }

  .overseasScenicSpotsContentcontentBox strong {
    display: block;
    font: 15px/2 "微软雅黑";
    color: #404040;
  }

  .overseasScenicSpotsContentcontentBox span {
    font: 14px/2 "微软雅黑";
    color: #fe6600;
  }

  /*境外景点结束*/

  /*合作景区开始*/

  .cooperativeScenicSpot {
    margin-top: 20px;
  }

  .cooperativeScenicSpotTitle {
    border-bottom: 2px solid #333;
    margin-bottom: 15px;
  }

  .cooperativeScenicSpotTitle h2 {
    font: bold 20px/2 "微软雅黑";
    color: #333;
  }

  .cooperativeScenicSpotContent {
    width: 1190px;
  }

  .cooperativeScenicSpotContentList {
    width: 1200px;
  }

  .cooperativeScenicSpotContentList li {
    float: left;
    margin-right:10px;
    box-shadow: 2px 2px #ccc;
  }

  .cooperativeScenicSpotContentList li a {
    border: 1px solid #ccc;
  }

  .cooperativeScenicSpotContentList li a:hover {
    border-color: #f60;
  }

  /*合作景区结束*/
</style>
