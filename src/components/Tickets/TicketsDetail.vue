<template>
  <div>
    <section id="wrapBoxa">
      <div class="scenicSpotInformation clearfix">
        <div class="pictureBox">
          <!--详情轮播1-->
          <swiper :options="swiperOptionTop" class="gallery-top">
            <swiper-slide :class="'slide-'+(index+1)"  v-for="item,index in ticketsDetailData.tm_ts_ShowImage" :key="index">
              <img width="100%" height="100%"  alt="" v-lazy="item">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" style="color: #fff"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
        </div>
        <div class="scenicSpotInformationContent">
          <h1>{{ticketsDetailData.tm_ts_Name}}</h1>
          <p class="money">
            <span>价格: ￥</span>
            <strong>{{ticketsDetailData.tm_ts_SuggestPrice}}</strong>
            起
          </p>
          <ul class="describe">
            <li><span>具体地址：</span>{{ticketsDetailData.tm_ts_Address}}<a href="javascript:;" style="width: 70px">查看地图</a></li>
            <li><span>开放时间：</span>{{ticketsDetailData.tm_ts_Opentime}}</li>
            <li>
              <span>服务承诺：</span>
              <button>入园保障</button>
              <strong>预订此门票无法入园且千里达旅游网10分钟内未解决完，可买门市价入园，千里达旅游网赔偿<i>门市价</i>与<i>千里达旅游网价</i>的差价</strong>
            </li>
          </ul>
          <div class="scoreContent">
            <div class="score clearfix">
              <span>满意度:<strong>100%</strong></span>
              <em></em>
              <span>来自<strong>5680</strong>名游客的点评</span>
            </div>
            <div class="evaluateContent clearfix">
              <img src="../../assets/img/Symbol.png" width="31" height="28">
              <p class="evaluate"><【千里达旅游网】西岭雪山后山门票+鸳鸯池索道往返 - 成人门票>▼</p>
              <img src="../../assets/img/Symbol.png" width="31" height="28" class="imgRotate">
            </div>
          </div>
        </div>
      </div>
      <div class="admissionTicketType">
        <div class="admissionTicketTypeContent">
          <ul class="titleList clearfix">
            <li class="admissionTicketName">产品名称</li>
            <li class="reserveTime">提前预订时间</li>
            <li class="marketValue">市场价</li>
            <li class="myPrice">千里达旅游网价</li>
            <li class="discount">优惠</li>
            <li class="paymentMethod">支付方式</li>
          </ul>
          <div class="productType">
            <h5>门票</h5>
            <div class="admissionTicketContent clearfix" v-for="item in ticketType_PriceMXList">
              <a href="javascript:;" class="widthCommentA">{{item.tm_tt_Name}}</a>
              <span class="reserveTime reserveTime">当天{{item.tm_tt_BeforeTime}}点前	</span>
              <span class="marketMoney marketValue">¥{{item.tm_tt_TicketPrice}}</span>
              <span class="myMoney myPrice">¥{{item.tm_tt_RealPrice}}起</span>
              <span class="quan discount">优惠券</span>
              <p class="payment paymentMethod" style="cursor: pointer" @click="clickPayment(item)">
                <span>网上支付</span>
                <a href="javascript:;">预订</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--主体部分-->
      <div id="infrometionWrap">
        <!--主体导航-->
        <ul id="infrometionWrapNav" ref="infrometionWrapNav" class="infrometionWrapNav clearfix">
          <li v-for="item,index in idName">
            <a href="javascript:;" @click="changeType(index)" :class="{active:index==n}">{{item.name}}</a>
          </li>
        </ul>
        <!--预定需知-->
        <div id="reserveContent" class="reserveContent clearfix" v-show="showList[0].isShow">
          <div class="discountIcon">
            <h3>预定需知</h3>
          </div>
          <div class="reservations">
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>景区开放时间：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_OpenTime}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>特殊人群政策：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_SpecialPolicy}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>预订提醒：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_Remind}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>温馨提示：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_HappyNotice}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>发票说明：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_TicketSay}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>退改规则：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_ReturnRule}}</p>
              </div>
            </div>
            <div class="openingHours">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>特殊信息：</h5>
              </div>
              <div class="openingHoursContent">
                <p>{{bookKnowObj.tm_bk_SpecialMessage}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--景点介绍-->
        <div id="introductionOfScenicSpots" class="introductionOfScenicSpots clearfix"  v-show="showList[1].isShow">
          <div class="discountIcon">
            <h3>景点介绍</h3>
          </div>
          <div class="introductionOfScenicSpotsContent">
            <div class="couponsActive clearfix">
              <span></span>
              <h5>景点详情</h5>
            </div>
            <div class="detailsOfTheScenicSpots">
              <div v-html="ticketsDetailData.tm_ts_Detailedintroduction"></div>
            </div>
          </div>
        </div>
        <!--交通信息-->
        <div id="trafficInformation" class="trafficInformation clearfix"  v-show="showList[2].isShow">
          <div class="discountIcon">
            <h3>交通指南</h3>
          </div>
          <div class="trafficInformationContent">
            <div class="couponsActive clearfix">
              <span></span>
              <h5>交通信息</h5>
            </div>
            <div class="trafficGuide">
              <div class="recommendRoute">
                <ul>
                  <li class="clearfix">
                    <strong>自驾线路 : </strong><span>{{transportMessage.tm_tm_Drive}}</span>
                  </li>
                  <li class="clearfix">
                    <strong>公交线路 : </strong><span>{{transportMessage.tm_tm_Bus}}</span>
                  </li>
                  <li class="clearfix">
                    <strong>景点地址 : </strong><span>{{transportMessage.tm_tm_Address}}</span>
                  </li>
                </ul>
              </div>
              <!--地图-->
              <div class="mapBoxWrap">
                <div class="mapJW">
                  <div id="allmap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import '@/assets/css/comment.css'
  import '@/assets/css/AdmissionTicket.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: '',
    components: {
      swiper,
      swiperSlide
    },
    computed: Object.assign({
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },mapGetters([
      'pictureList',
      'bookKnowObj',
      'ticketsDetailData',
      'getTourSiteList',
      'transportMessage',
      'ticketType_PriceMXList'
    ])),
    data() {
      return {
        showList:[
          {
            id:0,
            isShow:true
          },
          {
            id:1,
            isShow:false
          },
          {
            id:2,
            isShow:false
          },
          {
            id:3,
            isShow:false
          },
          {
            id:4,
            isShow:false
          }
        ],
        n: 0,
        swiperOptionTop: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        form: {
          x: '105.44397029',
          y: '24.8959298'
        },
        idName: [
          {
            name: '预定需知',
            id: 'reserveContent'
          },
          {
            name: '景点介绍',
            id: 'introductionOfScenicSpots'
          },
          {
            name: '交通指南',
            id: 'trafficInformation'
          }
        ]
      }
    },
    created() {
      let id = this.$route.params.id
//      this.$store.commit('showLoading')
      this.initData(id).then(()=>{
//        this.$store.commit('hideLoading')
        this.searchMap(this.ticketsDetailData)
      },err=>{
        this.$notify({
          message: err,
          type: 'error'
        });
      });
    },
    methods: {
      //点击立即预订
      clickPayment(item){
        sessionStorage.setItem('ticketsReserveDetail',JSON.stringify(item));
        this.$router.push({name:'TicketsReserve',params: {id: item.tm_tt_ID}})
      },
      async initData(id) {
        //景点详情
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tm_ts_Code": id,
        }
        await this.$store.dispatch('initTicketsDetailData',options)
      },
      //查询地图
      searchMap(ticketsDetailData) {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(ticketsDetailData.tm_ts_Longitude, ticketsDetailData.tm_ts_Latitude);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.centerAndZoom(point, 15);
        var opts = {
          width : 200,     // 信息窗口宽度
          height: 100,     // 信息窗口高度
          title : ticketsDetailData.tm_ts_Name , // 信息窗口标题
          enableMessage:true,//设置允许信息窗发送短息
          message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        }
        var infoWindow = new BMap.InfoWindow(`地址：${ticketsDetailData.tm_ts_Address}`, opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){
          map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
      },
      changeType(index){
       this.n = index
        for(var i=0;i<this.showList.length;i++){
          if(this.showList[i].id==index){
            this.showList[i].isShow=true
          }else{
            this.showList[i].isShow=false
          }
        }
      }
    },
    mounted() {

//      //滚动到一定距离变固定定位
//      (function () {
//        var w = ($(window).width() - 1188) / 2
//        var sTop = $('#infrometionWrapNav').get(0).offsetTop;
//        $(window).bind("scroll", function () {
//          var top = $(this).scrollTop(); // 当前窗口的滚动距离
//          if (top > sTop) {
//            $('#infrometionWrapNav').css({position: 'fixed', left: w - 6 + 'px', top: 0,})
//          } else {
//            $('#infrometionWrapNav').css({position: 'static', left: 'auto', top: 'auto',})
//          }
//        });
//      })()
    },

    update() {
//      let lisSearch = this.$refs.infrometionWrapNav.querySelectorAll('li')
//      if (lisSearch.length) {
//        for (var i = 0; i < lisSearch.length; i++) {
//          lisSearch[i].querySelector('a').className = ''
//        }
//        lisSearch[0].querySelector('a').className = 'active'
//      }
    }
  }
</script>
<style scoped>


  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 100%!important;
    width: 100%;
  }

</style>
