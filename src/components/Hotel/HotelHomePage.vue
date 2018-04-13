<template>
  <div>
    <div class="HotelHomePageWrap">
      <!--头部功能-->
      <div class="HotelHomePageWrapHeader">
        <!--轮播图-->
        <div class="HotelHomePageWrapHeaderCarouselFigure">
          <div class="block">
            <el-carousel height="550px">
              <el-carousel-item v-for="item in images" :key="item">
                <a href="javascript:;" :style="{background:'url('+item+')'}"></a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!--轮播图介绍-->
        <div class="PictureInfromtionWrap">
          <div class="PictureInfromtion">
            <span class="PictureInfromtionNum"><strong>4</strong>/9</span>
            <strong class="PictureInfromtionName">大连金石滩</strong>
            <span class="PictureInfromtionDetails">一座神力雕塑公园</span>
          </div>
        </div>
        <!--服务保障-->
        <div class="serviceAndGuarantee">
          <div class="serviceAndGuaranteeMask"></div>
          <ul class="serviceAndGuaranteeList clearfix">
            <li>
              <a href="javascript:;" class="serviceHaveGuarantee"><i></i>服务有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="priceHaveGuarantee"><i></i>价格有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="checkHaveGuarantee"><i></i>入住有保障</a>
            </li>
            <li>
              <a href="javascript:;" class="typeHaveGuarantee"><i></i>种类有保障</a>
            </li>
          </ul>
        </div>
        <!--酒店收索框-->
        <div class="HotelQuery">
          <div class="HotelQueryMask"></div>
          <div class="HotelQueryBox">
            <div class="HotelQueryRadioButton">
              <el-radio v-model="radio" label="1">境内</el-radio>
              <el-radio v-model="radio" label="2">国际/地区</el-radio>
            </div>
            <div class="HotelQueryInputBox clearfix">
              <input type="text" placeholder="目的地/景点/酒店">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
      <!--内容部分-->
      <section class="HotelHomePageWrapContent">
        <div class="HotelHomePageWrapContentBox">
          <!--推荐地点-->
          <ul class="recommendPlaceList clearfix">
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/homePageImage.jpg" width="390" height="120">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/homePageImage.jpg" width="390" height="120">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../../assets/img/homePageImage.jpg" width="390" height="120">
              </a>
            </li>
          </ul>
          <!--发现·当季游玩-->
          <div class="findPlayTheSeason">
            <div class="findPlayTheSeasonTitle">
              <h2>发现·当季游玩</h2>
              <strong>SEASONAL TOURISM</strong>
            </div>
            <!--当季玩导航-->
            <ul class="findPlayTheSeasonDescribeList">
              <li v-for="item,index in HotPlayData  ">
                <a href="javascript:;" :class="{active:index == hotPlayNum}"
                   @click="changeHotPlay(item,index)">{{item.ht_it_Name}}</a>
              </li>
            </ul>
            <!--当季玩图片-->
            <ul class="findPlayTheSeasonPictureList clearfix">
              <li v-for="item,index in HotPlayList">
                <a href="javascript:;" @click="changeHotlImg(item)">
                  <img width="390" height="230" v-lazy="item.ht_ai_Image">
                  <span>{{item.sm_af_AreaName}}</span>
                </a>
              </li>
            </ul>
          </div>
          <!--精选·特色推荐-->
          <div class="selectedCharacteristicRecommend">
            <div class="findPlayTheSeasonTitle">
              <h2>精选·特色推荐</h2>
              <strong>CHARACTERISTIC RECOMMEND</strong>
            </div>
            <!--特色推荐图片展示-->
            <ul class="selectedCharacteristicRecommendPictureList clearfix" ref="recommendType">
              <li v-for="item,index in characteristicRecommendList" :key="index" @click="changeRecommendType(item,index)" @mouseover="hoverRecommendType(index)" @mouseout="outRecommendType(index)">
                <div class="selectedCharacteristicRecommendImageMask">
                  <h6>{{item.ht_it_Name}}</h6>
                </div>
                <div class="selectedCharacteristicRecommendBg"
                     :style="{backgroundImage: `url(${item.ht_it_ImagePath})`}"></div>
                <strong class="selectedCharacteristicRecommendDetails">{{item.ht_it_Describe}}</strong>
              </li>
            </ul>
          </div>
          <!--探索·当季热门-->
          <div class="exploreSeasonHot">
            <div class="findPlayTheSeasonTitle">
              <h2>探索·当季热门</h2>
              <strong>HOT DESTINATION</strong>
            </div>
            <ul class="exploreSeasonHotPictureList clearfix">
              <li v-for="item,index in hotDestinationList" @click="changeHotDestination(item)">
                <img v-lazy="item.ht_hl_HotelImage"
                     :class="{one:index==0,two:index==1,three:index==2,four:index==3,five:index==4,six:index==5,seven:index==6 }"
                     height="250">
                <div class="exploreSeasonHotPictureListMask"></div>
                <div class="exploreSeasonHotPictureListMaskContent">
                  <span>{{item.ht_hl_HotelName}}</span>
                  <span>外滩地区/5星级</span>
                  <span>￥1621元</span>
                  <a href="javascript:;" class="order">马上预定</a>
                </div>
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
      'HotPlayData',
      'HotPlayList',
      'characteristicRecommendList',
      'hotDestinationList'
    ]),
    data() {
      return {
        images:['https://m2.tuniucdn.com/fb2/t1/G5/M00/97/93/Cii-tFqyZUKII51oAAzZeQoA-DEAAEjjAGU224ADNmR40.jpeg','http://img4.tuniucdn.com/hotelnewpc/banner/guilin.jpg','http://img4.tuniucdn.com/hotelnewpc/banner/chongqing.jpg','https://m.tuniucdn.com/fb2/t1/G5/M00/99/15/Cii-tFqzo6qIJU2FAArGQ_6bDWIAAEmkQFbJpEACsZb91.jpeg'],
        radio: '1',
        hotPlayNum: 0,
      }
    },
    methods: {
      //鼠标移入
      hoverRecommendType(index){
        let thisLi = this.$refs.recommendType.children[index];
        let selectedCharacteristicRecommendImageMask = this.$refs.recommendType.children[index].querySelector('.selectedCharacteristicRecommendImageMask');
        selectedCharacteristicRecommendImageMask.style.display = 'none';
        thisLi.style.width = '390px';
        let arr = [];
        for(var i=0;i<this.characteristicRecommendList.length;i++){
          arr.push(i);
        }
        let newArr = arr.filter(item=>{
          if(item==index){
            return false
          }
          return true
        });
        for(var i=0;i<newArr.length;i++){
          let thisNewLi = this.$refs.recommendType.children[newArr[i]];
          let newSelectedCharacteristicRecommendImageMask = this.$refs.recommendType.children[newArr[i]].querySelector('.selectedCharacteristicRecommendImageMask');
          thisNewLi.style.width = '160px';
        }
      },
      //鼠标移出
      outRecommendType(index){
        let thisLi = this.$refs.recommendType.children[index]
        let selectedCharacteristicRecommendImageMask = this.$refs.recommendType.children[index].querySelector('.selectedCharacteristicRecommendImageMask');
        selectedCharacteristicRecommendImageMask.style.display = 'block'
        thisLi.style.width = '198px'
        let arr = [];
        for(var i=0;i<this.characteristicRecommendList.length;i++){
          arr.push(i);
        }
        let newArr = arr.filter(item=>{
          if(item==index){
            return false
          }
          return true
        });
        for(var i=0;i<newArr.length;i++){
          let thisNewLi = this.$refs.recommendType.children[newArr[i]];
          thisNewLi.style.width = (1190-198)/5+'px';
        }
      },
      async initData() {
        //首页数据
        let HotelIndexInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
        }
        await this.$store.dispatch('initHotelHomePageData', HotelIndexInfo)
      },
      changeHotPlay(item, index) {
        this.hotPlayNum = index;
        this.$store.commit('initHotPlayList', item.CityList)
      },
      //选中跳转到酒店详情搜索
      changeHotlImg(item) {
        this.$router.push({name: 'HotelSearchMore', params: {id: item.sm_af_AreaID}})
      },
      //点击当季热门
      changeHotDestination(item){
        this.$router.push({name:'HotelDetalis', params: {id: item.ht_ht_hotelID}})
      },
      changeRecommendType(item,index) {
        if (index == 0) {
          this.$router.push({name: 'HotelQingLv', params: {id: item.ht_it_ID}})
        }
        if (index == 1) {
          this.$router.push({name: 'HotelAncientTown', params: {id: item.ht_it_ID}})
        }
        if (index == 2) {
          this.$router.push({name: 'HotelParentChildTour', params: {id: item.ht_it_ID}})
        }
        if (index == 3) {
          this.$router.push({name: 'HotelMountaineering', params: {id: item.ht_it_ID}})
        }
        if (index == 5) {
          this.$router.push({name: 'HotelLovers', params: {id: item.ht_it_ID}})
        }
        if (index == 4) {
          this.$router.push({name: 'HotelInn', params: {id: item.ht_it_ID}})
        }
      },
    },
    mounted() {
    },
    created() {
//      this.$store.commit('showLoading')
      this.initData()
        .then(() => {
//          this.$store.commit('hideLoading')
        }, err => {
          this.$notify({
            message: err,
            type: 'error'
          });
        });
    }
  }
</script>
<style scoped>
  .one {
    width: 390px;
  }

  .two {
    width: 790px;
  }

  .three {
    width: 390px;
  }

  .four {
    width: 390px;
  }

  .five {
    width: 390px;
  }

  .six {
    width: 790px;
  }

  .seven {
    width: 390px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .HotelHomePageWrap {
    width: 100%;
    overflow: hidden;
  }

  .HotelHomePageWrapHeader {
    height: 550px;
    position: relative;
  }

  /*轮播图*/

  .HotelHomePageWrapHeaderCarouselFigure {
    width: 100%;
  }

  .HotelHomePageWrapHeaderCarouselFigure > .block {
    position: relative;
    z-index: 0;
  }

  .HotelHomePageWrapHeaderCarouselFigureList li {
    width: 100%;
    float: left;
  }

  .HotelHomePageWrapHeaderCarouselFigure > .block a {
    display: block;
    width: 100%;
    height: 550px;
    background: url("../../assets/img/hotelBg.jpg") no-repeat center top;
    -webkit-background-size: cover;
    background-size: cover;
  }
  /*轮播图片介绍*/

  .PictureInfromtionWrap {
    width: 100%;
    position: absolute;
    bottom: 70px;
    left: 0;
  }

  .PictureInfromtion {
    text-align: right;
    float: right;
    margin-right: 20px;
  }

  .PictureInfromtionNum {
    color: #fff;
    font: 16px/1.5 "微软雅黑";
    display: block;
  }

  .PictureInfromtionNum strong {
    font-size: 25px;
    font-weight: bold;
  }

  .PictureInfromtionName {
    font: bold 16px/26px "微软雅黑";
    color: #fff;
    display: block;
  }

  .PictureInfromtionDetails {
    font: 16px/26px "微软雅黑";
    color: #fff;
    display: block;
  }

  /*服务保障*/

  .serviceAndGuarantee {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .serviceAndGuaranteeMask {
    height: 50px;
    width: 100%;
    background-color: #000;
    opacity: .3;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .serviceAndGuaranteeList {
    text-align: center;
    width: 1190px;
    margin: 0 auto;
    font: 18px/50px "宋体";
  }

  .serviceAndGuaranteeList li {
    display: inline-block;
    margin-left: 85px;
  }

  .serviceAndGuaranteeList a {
    position: relative;
    color: #fff;
    padding-left: 45px;
  }

  .serviceAndGuaranteeList a i {
    position: absolute;
    top: 5px;
    left: 0;
    width: 38px;
    height: 38px;
    background-image: url("../../assets/img/hotelServiceAndGuarantee-icon.png");
    background-repeat: no-repeat;
  }

  .serviceAndGuaranteeList a:hover {
    color: #4ece5a;
  }

  .serviceAndGuaranteeList a:hover i {
    background-position-y: -56px;
  }

  .serviceHaveGuarantee i {
    background-position: -4px -2px;
  }

  .priceHaveGuarantee i {
    background-position: -53px -2px;
  }

  .checkHaveGuarantee i {
    background-position: -102px -2px;
  }

  .typeHaveGuarantee i {

    background-position: -151px -2px;
  }

  /*服务保障结束*/

  /*酒店输入框*/

  .HotelQuery {
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
  }

  .HotelQueryMask {
    width: 526px;
    height: 100px;
    background-color: rgba(0, 0, 0, .5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .HotelQueryBox {
    position: absolute;
    top: 0;
    left: 0;
  }

  .HotelQueryRadioButton {
    margin: 15px 0 12px 25px;
  }

  .HotelQueryInputBox {
    margin-left: 25px;
    position: relative;
  }

  .HotelQueryInputBox input {
    width: 425px;
    height: 40px;
    background-color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 5px 0 50px;
    font: 16px/40px "微软雅黑";
    float: left;
  }

  .HotelQueryInputBox a {
    float: left;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background: #f60 url("../../assets/img/HotelImage-icon.png") no-repeat -163px -65px;

  }

  .HotelQueryInputBox:before {
    position: absolute;
    top: 8px;
    left: 16px;
    width: 20px;
    height: 25px;
    content: '';
    background: url("../../assets/img/HotelImage-icon.png") no-repeat -174px 0;
  }

  /*头部结束*/

  /*内容开始*/

  .HotelHomePageWrapContent {
    width: 100%;
    background-color: #fff;
    margin-top: 30px;
  }

  .HotelHomePageWrapContentBox {
    width: 1190px;
    margin: 0 auto;
  }

  /*推荐地点*/

  .recommendPlaceList {
    width: 1200px;
    margin-bottom: 70px;
  }

  .recommendPlaceList li {
    float: left;
    margin-right: 10px;
  }

  /*当季玩*/

  .findPlayTheSeason {
    margin-bottom: 40px;
  }

  .findPlayTheSeasonTitle {
    text-align: center;
  }

  .findPlayTheSeasonTitle h2 {
    font: bold 30px/1 "微软雅黑";
  }

  .findPlayTheSeasonTitle strong {
    font: bold 20px/2 Arial;
    color: #999;
  }

  .findPlayTheSeasonDescribeList {
    text-align: center;
    font: 18px/50px "微软雅黑";
    margin-bottom: 17px;
  }

  .findPlayTheSeasonDescribeList li {
    display: inline-block;
    margin: 0 15px;
  }

  .findPlayTheSeasonDescribeList li a {
    color: #404040;
    display: block;
    border-bottom: 3px solid transparent;
  }

  .findPlayTheSeasonDescribeList .active {
    border-bottom: 3px solid #2dbb55;
    color: #2dbb55;
  }

  .findPlayTheSeasonPictureList {
    width: 1200px;
  }

  .findPlayTheSeasonPictureList li {
    float: left;
    position: relative;
    margin-right: 10px;
  }

  .findPlayTheSeasonPictureList li a:hover {
    box-shadow: 0 0 10px #000;
  }

  .findPlayTheSeasonPictureList li span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
  }

  /*当季玩结束*/

  /*特色推荐开始*/

  .selectedCharacteristicRecommendPictureList {
    width: 1190px;
    margin-top: 20px;
    overflow: hidden;
  }

  .selectedCharacteristicRecommendPictureList li {
    float: left;
    width: 198px;
    height: 325px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .3s linear;
  }

  .selectedCharacteristicRecommendPictureList li:hover .selectedCharacteristicRecommendDetails {
    display: block;
  }

  .selectedCharacteristicRecommendBg {
    width: 100%;
    height: 100%;
    background: url("../../assets/img/homePageImage.jpg") no-repeat center center;
    -webkit-background-size: 487px 325px;
    background-size: 487px 325px;
    position: relative;
  }

  .selectedCharacteristicRecommendImageMask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 3;
  }

  .selectedCharacteristicRecommendImageMask h6 {
    font: 25px/35px "微软雅黑";
    color: #fff;
    width: 25px;
    margin: 30px auto 0;
  }

  .selectedCharacteristicRecommendDetails {
    width: 370px;
    text-indent: 12px;
    font: bold 16px/2 "微软雅黑";
    color: #fff;
    position: absolute;
    bottom: 25px;
    left: 5px;
    background: rgba(0, 0, 0, .3);
    display: none;
    z-index: 4;
  }

  /*特色推荐结束*/

  /*当季热门开始*/

  .exploreSeasonHot {
    margin-top: 40px;
  }

  .exploreSeasonHotPictureList {
    width: 1200px;
    margin-top: 15px;
    font: 18px/2 "微软雅黑";
  }

  .exploreSeasonHotPictureList li {
    margin: 10px 10px 0 0;
    position: relative;
    float: left;
    overflow: hidden;
  }

  .exploreSeasonHotPictureList li:hover {
    cursor: pointer;
    box-shadow: 0 0 20px #000;
  }

  .exploreSeasonHotPictureList li:hover a {
    display: block;
  }

  .exploreSeasonHotPictureList li:hover > img {
    transform: scale(1.25);
  }

  .exploreSeasonHotPictureList li > img {
    transition: .5s;
  }

  .exploreSeasonHotPictureListMask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
  }

  .exploreSeasonHotPictureListMaskContent {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    margin-top: 45px;
    color: #fff;
  }

  .exploreSeasonHotPictureListMaskContent > * {
    display: block;
  }

  .exploreSeasonHotPictureListMaskContent > a {
    color: #fff;
    width: 156px;
    border: 1px solid #fff;
    margin: 20px auto 0;
    display: none;
  }

  /*当季热门结束*/


</style>
