<template>
  <div>
    <!--主体-->
    <section id="wrap" v-show="iswrap">
      <!--旅游内容-->
      <div class="productBody">
        <h3>{{productDetailsObj.ts_pt_Name}}</h3>
        <div class="tourismType clearfix">
          <strong>跟团游</strong>
          <!--本产品由云南乐视国际旅行社有限公司直售，并提供咨询/预订/售后服务，合同需与商家直接签-->
          <span><i>编号{{productDetailsObj.ts_pt_GoodsListID}}：</i></span>
        </div>
        <div class="productBodyIntroduce clearfix">
          <div class="pictureShowAndTime">
            <div class="pictureShow">
              <div class="pictureShowList">
                <div class="block">
                  <el-carousel height="280px">
                    <el-carousel-item v-for="item,index in pictureList" :key="index">
                      <img height="280" width="500" v-lazy="item">
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
              <!--日历和城市选择-->
              <div class="calendarWrap">
                <ul class="monthSelecte clearfix">
                  <li v-for="(item,i) in searchMonth" @click="changeSearchMonth(item)">
                    <a href="javascript:;" :class="{active:n==i}">
                      <strong>{{item.name}}</strong>
                      <span>￥{{price}}起</span>
                    </a>
                  </li>
                </ul>
                <div class="calendarList">
                  <ul class="weekList clearfix">
                    <li>日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li>六</li>
                  </ul>
                  <ul class="calendarContentList clearfix" id="calendarContentList" v-loading="isSalendar">
                    <li style="color: #ccc" v-for="item in arr1">{{item}}</li>
                    <li v-for="item in arr4">{{item}}</li>
                    <!--今天-->
                    <li v-for="item in arr3" @click="changeTime(item.day)" v-show="arr3.length">{{"今天"}}
                      <div v-show="item.isJ">
                        <span>充足</span>
                        <strong>￥{{item.day.ts_pp_Price}}起</strong>
                        <div class="mask">
                          <i></i>
                          <div class="maskContent clearfix">
                            <div>
                              <strong>成人票:</strong>
                              <span>￥{{item.day.ts_pp_Price}}起</span>
                            </div>
                            <div>
                              <strong>日期:</strong>
                              <span>{{item.day.ts_pp_Date}}</span>
                            </div>
                            <div>
                              <strong>儿童票:</strong>
                              <span>￥{{item.day.ts_pp_ChildPrice}}起</span>
                            </div>
                            <div>
                              <strong>出发城市:</strong>
                              <span>{{item.day.ts_pp_FromPlace}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!--有价格的-->
                    <li v-for="item in arr5" @click="changeTime(item)">{{item.n==day.d?"今天":item.n}}
                      <div v-show="item.ts_pp_Price">
                        <span v-if="item.ts_pp_Person>10">充足</span>
                        <span v-else>不多</span>
                        <strong>￥{{item.ts_pp_Price}}起</strong>
                        <div class="mask">
                          <i></i>
                          <div class="maskContent clearfix">
                            <div>
                              <strong>成人票:</strong>
                              <span>￥{{item.ts_pp_Price}}起</span>
                            </div>
                            <div>
                              <strong>日期:</strong>
                              <span>{{item.ts_pp_Date}}</span>
                            </div>
                            <div>
                              <strong>儿童票:</strong>
                              <span>￥{{item.ts_pp_ChildPrice}}起</span>
                            </div>
                            <div>
                              <strong>出发城市:</strong>
                              <span>{{item.ts_pp_FromPlace}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style="color: #ccc" v-for="item in arr2">{{item}}</li>
                  </ul>
                </div>
              </div>
              <p class="prompt">* 日历上显示的价格为当日最低成人优惠价，您可在下单时选择可用的优惠</p>
            </div>
          </div>
          <!--价格和评价-->
          <div class="pictureShowAndTimeDetails">
            <div class="ticketPrice">
              <i></i>
              <div class="ticketPriceContent clearfix">
                <span>促销价:<span>￥</span><strong>{{price}}</strong>起<a
                  href="javascript:;">起价说明</a></span>
                <div class="evaluate">
                  <div class="satisfaction">
                    <span>满意度</span>
                    <a href="javascript:;">{{Math.round(commentMXObj.satisfyCount/commentMXObj.totalCount*100)}}<i>%</i></a>
                  </div>
                  <div class="comment">
                    <span>出游人数：<a href="javascript:;">70437</a></span>
                    <span>点评人数：<a href="javascript:;">{{commentMXObj.userCount}}</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="ticketType">
              <div class="ticketTypeOK">
                <div class="Lately clearfix">
                  <span>150人出游</span>
                  <strong>最近30天8人出游</strong>
                </div>
                <div class="Characteristic clearfix">
                  <span>产品亮点:</span>
                  <ul>
                    <li><i></i>无自费</li>
                    <li><i></i>高性价比</li>
                    <li><i></i>接送机</li>
                  </ul>
                </div>
                <div class="ticketTypeTwoOK clearfix">
                  <span>二次确认: </span>
                  <strong>此商品需商家确认后可出行</strong>
                </div>
                <div class="tourOperator clearfix">
                  <div>
                    <img src="../../assets/img/tourOperator.png" height="50" width="81">
                    <strong>丽江旅游</strong>
                  </div>
                  <div class="customerSer">
                    <a href="javascript:;" class="phone"><span></span>客服电话</a>
                    <a href="javascript:;" class="inPhone"><span></span>在线咨询</a>
                  </div>
                </div>
              </div>

              <div class="setOut">
                <ul>
                  <li>
                    <div class="block">
                      <span>出发城市: </span>
                      <el-select
                        v-model="addOrderOptions.provinceValue"
                        placeholder="请选择出发城市"
                        size="small"
                        style="width: 150px"
                        @change="getSearchCity"
                      >
                        <el-option
                          v-for="item,index in getLineCityList"
                          :key="index"
                          :label="item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li>
                    <div class="block">
                      <span class="demonstration">出发日期: </span>
                      <el-date-picker
                        v-model="addOrderOptions.DayValue"
                        type="date"
                        placeholder="选择日期"
                        size=small>
                      </el-date-picker>
                    </div>
                  </li>
                  <li>
                    <span>选择数量:</span><i style="margin-left: 20px">成人:</i>
                    <div class="bottom">
                      <el-tooltip class="item" effect="light" content="此价格根据机票有浮动，详情请咨询客服." placement="bottom-start">
                        <i class="icon-info22"></i>
                      </el-tooltip>
                      <span style="color: #f60;font-weight: bold;"
                            v-show="addOrderOptions.adultPrice">¥{{addOrderOptions.adultPrice}}</span>
                    </div>
                    <el-input-number
                      v-model="addOrderOptions.adultNumber"
                      @change="handleChange"
                      size="small"
                      :min="0"
                      :max="addOrderOptions.adultYu"
                      label="描述文字"
                    ></el-input-number>
                    <span style="color: #f60;font-weight: bold;"
                          v-show="addOrderOptions.adultYu">余{{addOrderOptions.adultYu}}</span>
                  </li>
                  <li>
                    <i style="margin-left:70px;margin-right: 30px">儿童:</i>
                    <span style="color: #f60;font-weight: bold;"
                          v-show="addOrderOptions.childPrice">¥{{addOrderOptions.childPrice}}</span>
                    <el-input-number
                      v-model="addOrderOptions.childNumber"
                      @change="handleChange"
                      size="small"
                      :min="0"
                      :max="addOrderOptions.childYu"
                      label="描述文字"
                    ></el-input-number>
                    <span style="color: #f60;font-weight: bold;"
                          v-show="addOrderOptions.childYu">余{{addOrderOptions.childYu}}</span>
                  </li>
                </ul>
                <div class="button clearfix">
                  <a href="javascript:;" @click="immediatelyReserveSubmit">立即预订</a>
                  <a href="javascript:;">APP优惠<i></i></a>
                  <a href="javascript:;" @click="collection" :class="{active:collectionClass}"><i class="icon"></i>收藏</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header id="headerNavWrap">
        <nav class="headerNav clearfix" ref="headerNav">
          <span @click="changeType(index)" v-for="item,index in lineMenuList" :class="{active:index==0}"><a
            href="javascript:;">{{item.ts_mu_Name}}</a></span>
        </nav>
      </header>
      <section id="content">
        <!--产品详情-->
        <div class="productDetailsWrap" id="h1" v-show="showList[0].isShow" style="padding-bottom: 100px">
          <div class="productDetails clearfix">
            <div class="discountIcon">
              <h3>产品详情</h3>
            </div>
            <div class="productDetailsContent">
              <div class="clearfix">
                <div>
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>推荐理由</h5>
                  </div>
                  <div class="reason" v-html="productDetailsObj.ts_pt_BookKnow"></div>
                </div>
                <div>
                  <div class="couponsActive clearfix">
                    <span></span>
                    <h5>产品介绍</h5>
                  </div>
                  <div class="reason" v-html="productDetailsObj.ts_pt_ReturnRule"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--线路日程-->
        <div class="LineSchedule clearfix" id="h2"  v-show="showList[1].isShow">
          <div class="discountIcon">
            <h3>行程线路</h3>
          </div>
          <div class="LineScheduleContent">
            <!--日程安排-->
            <ul>
              <li v-for="item,index in lineScheduleObj.prepareList" :id="'LineSchedule'+ index"
                  style="padding-top: 45px;">
                <strong class="dayDetailedTitle">{{item.ts_pt_Content}} {{item.ts_pt_Name}}</strong>
                <div class="dayDetailed">
                  <div v-for="ite in item.travelTimeList">
                    <strong>{{ite.ts_tt_DoTime}}</strong>
                    <span>{{ite.ts_tt_DoWork}}</span>
                    <div class="activeContentList" style="padding-left: 20px;">
                      <span v-for="it in ite.timeActivityList">
                        <p class="information">{{it.ts_ta_DoWork}}</p>
                        <p v-for="i in it.activityFoodList">{{i.ts_af_DoWork}} : {{i.ts_af_Time}}</p>
                        <p class="information" v-show="it.activitySiteList.length != 0">景点信息</p>
                        <p v-for="i in it.activitySiteList">{{i.ts_as_SiteID}} : {{i.ts_as_Time}}</p>
                        <p class="information" v-show="it.activityTransportList.length != 0">交通信息</p>
                        <p v-for="i in it.activityTransportList">{{i.ts_at_DoWork}} : {{i.ts_at_WasteTime}}</p>
                        <p class="information" v-show="it.activityHotelList.length != 0">酒店信息</p>
                        <p v-for="i in it.activityHotelList">{{i.ts_ah_DoWork}} : {{i.ts_ah_WasteTime}}</p>
                        <p class="information" v-show="it.activityNoticeList.length != 0">温馨提示</p>
                        <p v-for="i in it.activityNoticeList">{{i.ts_an_DoWork}} : {{i.ts_an_WasteTime}}</p>
                        <p class="information" v-show="it.activityShoppingList.length != 0">购物信息</p>
                        <p v-for="i in it.activityShoppingList">{{i.ts_as_doWork}} : {{i.ts_as_WasteTime}}</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="imgBox">
                  <img v-lazy="items" alt="" v-for="items in item.ts_pt_ShowImageList">
                </div>
              </li>
            </ul>
          </div>
          <!--&lt;!&ndash;左侧导航&ndash;&gt;-->
          <!--<ul class="scheduleList" id="scheduleList" ref="scheduleList" v-show="isScheduleList">-->
          <!--<li v-for="item,index in lineScheduleObj.prepareList">-->
          <!--<a :href="'#LineSchedule'+ index" @click="changeDay(index)">{{item.ts_pt_Content}}</a>-->
          <!--<i></i>-->
          <!--</li>-->
          <!--</ul>-->
        </div>
        <!--套餐说明-->
        <div class="packageDescription clearfix" id="h3" v-show="showList[2].isShow">
          <div class="discountIcon">
            <h3>费用说明</h3>
          </div>
          <div class="packageDescriptionContent">
            <!--费用包含-->
            <div class="wrapMoney">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>费用包含</h5>
              </div>
              <div class="wrapMoneyContent">
                <div v-for="item in IncludeList">
                  <strong>【{{item.ts_fi_Item}}】</strong>
                  <p style="padding-left: 20px;">{{item.ts_fi_Content}}</p>
                </div>
              </div>
            </div>
            <!--费用不包含-->
            <div class="noWrapMoney">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>费用不包含</h5>
              </div>
              <div class="noWrapMoneyContent">
                <div v-for="item in noWrapMoneyList">
                  <strong>【{{item.ts_fi_Item}}】</strong>
                  <p style="padding-left: 20px;">{{item.ts_fi_Content}}</p>
                </div>
              </div>
            </div>
            <!--退订政策-->
            <div class="unsubscribePolicy">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>退订政策</h5>
              </div>
              <div class="unsubscribePolicyContent" v-html="lineScheduleObj.ts_pt_ReturnRule"></div>
            </div>
          </div>
        </div>
        <!--预定须知-->
        <div class="packageDescription clearfix" id="h4" v-show="showList[3].isShow">
          <div class="buyNeedToKnow">
            <div class="discountIcon">
              <h3>预定须知</h3>
            </div>
            <div class="couponsActiveWrap">
              <div class="couponsActive clearfix">
                <span></span>
                <h5>购票需知</h5>
              </div>
              <div class="buyNeedToKnowContent" v-html="lineScheduleObj.ts_pt_BookKnow"></div>
            </div>
          </div>
        </div>
        <!--游客点评-->
        <div class="commentsOnTourists clearfix" id="h6" v-show="showList[4].isShow">
          <div class="discountIcon">
            <h3>游客点评</h3>
          </div>
          <!--右边内容-->
          <div class="commentsOnTouristsContentWrap">
            <div class="commentsOnTouristsStatistics">
              <!--点评统计-->
              <div class="commentsOnTouristsStatisticsContent clearfix">
                <div class="satisfaction">
                  <span>满意度</span>
                  <strong>{{Math.round(commentMXObj.satisfyCount/commentMXObj.totalCount*100)}}%</strong>
                  <span>来自{{commentMXObj.userCount}}名游客的点评</span>
                </div>
                <div class="statisticalChart">
                  <div class="statisticalChartLeft">
                    <li class="clearfix">
                      <span>满意</span>
                      <div class="statisticalChartLeftBar">
                        <div class="statisticalChartLeftBarChild" :style="{width: commentMXObj.satisfyCount/commentMXObj.totalCount*100+'%'}"></div>
                      </div>
                      <span>{{Math.round(commentMXObj.satisfyCount/commentMXObj.totalCount*100)}}%</span>
                    </li>
                    <li class="clearfix">
                      <span>一般</span>
                      <div class="statisticalChartLeftBar">
                        <div class="statisticalChartLeftBarChild" :style="{width: parseInt((1-commentMXObj.notGoodCount/commentMXObj.totalCount-commentMXObj.satisfyCount/commentMXObj.totalCount).toFixed(2)*100)+'%'}"></div>
                      </div>
                      <span>{{parseInt((1-commentMXObj.notGoodCount/commentMXObj.totalCount-commentMXObj.satisfyCount/commentMXObj.totalCount).toFixed(2)*100)}}%</span>
                    </li>
                    <li class="clearfix">
                      <span>不满意</span>
                      <div class="statisticalChartLeftBar">
                        <div class="statisticalChartLeftBarChild" :style="{width: commentMXObj.notGoodCount/commentMXObj.totalCount*100+'%'}"></div>
                      </div>
                      <span>{{Math.round(commentMXObj.notGoodCount/commentMXObj.totalCount*100)}}%</span>
                    </li>
                  </div>
                  <ul class="statisticalChartRight">
                    <li>
                      <strong>导游服务</strong>
                      <span><i>{{commentMXObj.guideAVG?commentMXObj.guideAVG.toFixed(1):commentMXObj.guideAVG}}</i>/5</span>
                    </li>
                    <li>
                      <strong>行程安排</strong>
                      <span><i>{{commentMXObj.travelAVG?commentMXObj.travelAVG.toFixed(1):commentMXObj.travelAVG}}</i>/5</span>
                    </li>
                    <li>
                      <strong>餐饮住宿</strong>
                      <span><i>{{commentMXObj.eatSleepAVG?commentMXObj.eatSleepAVG.toFixed(1):commentMXObj.eatSleepAVG}}</i>/5</span>
                    </li>
                    <li>
                      <strong>旅行交通</strong>
                      <span><i>{{commentMXObj.transportAVG?commentMXObj.transportAVG.toFixed(1):commentMXObj.transportAVG}}</i>/5</span>
                    </li>
                  </ul>
                </div>
                <div class="commentOnAComment">
                  <strong>出游归来发点评返现金,<br>
                    本产品已累计发放<i>19012</i>元</strong>
                  <a href="javascript:;" @click="addComment">发表点评</a>
                  <!--<router-link to="/CommentOnAComment">发表点评</router-link>-->
                </div>
              </div>
              <!--点评类型-->
              <ul class="commentsOnTouristsStatisticsTypeList clearfix">
                <li v-for="item,index in typeList" @click="typeClick(item)">
                  <a href="javascript:;" :class="{active:a==index}">{{item.name}}</a>
                </li>
              </ul>
            </div>
            <!--评论列表-->
            <ul class="evaluationContent" v-loading="commentLoading"  v-if="newCommentData.length">
              <li class="clearfix" v-for="item in newCommentData">
                <!--游客信息-->
                <div class="touristInfromation">
                  <img src="../../assets/img/center.png" width="60" height="60">
                  <span class="touristInfromationName">{{item.comment.userName}}</span>
                  <strong class="touristInfromationType">家庭出游</strong>
                </div>
                <!--点评内容-->
                <div class="touristComment">
                  <ul class="touristCommentList clearfix">
                    <li><span>总体评价:{{item.allComment}}</span></li>
                    <li v-for="v in item.satisfyList"><span>{{v.ts_ct_Name}}：{{v.satistyState}}</span></li>
                  </ul>
                  <p class="touristCommentContent">
                    {{item.comment.ts_ct_Content}}
                  </p>
                  <!--<ul class="TypeCommentList">-->
                    <!--<li class="clearfix">-->
                      <!--<strong>导游服务 : </strong>-->
                      <!--<span>-->
<!--作为一个理科生，我特别特别佩服韩湘云导游，韩导对每个城市的历史人文都能详细的讲解，特别复杂的人物关系如数家珍。最重要是能把游客当亲人对待，做事细致，提醒我们各种注意事项，安排行程合理。</span>-->
                    <!--</li>-->
                  <!--</ul>-->
                  <ul class="uploadPictureList clearfix" v-show="item.comment.ts_ct_Image.length">
                    <li v-for="e in item.comment.ts_ct_Image">
                      <img :src="e" width="100" height="100">
                    </li>
                  </ul>
                  <div class="touristCommentTime">{{item.comment.ts_ct_CreateTime}}</div>
                </div>
                <!--点评赠送-->
                <div class="commentGive">
                  <strong>点评赠送</strong>
                  <span>返现<em>￥12</em></span>
                  <span>抵用券<em>￥100</em></span>
                </div>
              </li>
            </ul>
            <ul class="evaluationContent"  v-else><li style="text-align: center;padding: 40px 0;font-weight: bold;">暂无评论</li></ul>
            <!--分页-->
            <div class="block" style="float: right;">
              <el-pagination
                background
                @current-change="handleCurrentChange"
                :page-size="5"
                layout="total, prev, pager, next"
                :total="total"
                v-show="total"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </section>
    </section>
    <el-dialog
      title="温馨提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span style="color: #f60">请先登录!</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisibleSubmit">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>
<script>
  import cityOptions from '../../assets/js/data'
  import '@/assets/css/comment.css'
  import '@/assets/css/HeelTour.css'
  import ProvincesOfChina from './../public/ProvincesOfChina.vue'
  import {mapGetters} from 'vuex'
  import calendar from './../public/calendar.vue'
  import $ from 'jquery'

  export default {
    name: '',
    components: {
      calendar,
      ProvincesOfChina
    },
    computed: mapGetters([
      'productDetailsObj',
      'lineScheduleObj',
      'IncludeList',
      'noWrapMoneyList',
      'lineMenuList',
      'timesPriceList',
      'priceObj',
      'newPriceDetail',
      'getProvinceList',
      'getCityList',
      'getCountyList',
      'getLineCityList',
      'commentMXObj',
      'commentData',
      'newCommentData'
    ]),
    data() {
      return {
        day:{},
        commentLoading:false,//用户评论loading
        typeList:[{name:'全部',id:1},{name:'一般',id:2},{name:'满意',id:3},{name:'不满意',id:4}],//点评类型
        total:0,
        price: '',
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
        a:0,
        isCollection:true,
        collectionClass:false,
        centerDialogVisible: false,//登录弹窗
        showCalendar: false,
        pictureList: [],
        isActiveSearchMonth: false,
        isActive: false,
        isSalendar: true,
        iswrap: true,
        data: [],
        arr1: [],
        arr2: [],
        arr3: [],//今天
        arr4: [],
        arr5: [],//显示价格
        selectMonth: [],
        city: '',
        isScheduleList: false,
        positions: {
          left: 0,
          top: 0
        },
        searchMonth: [],
        date: '',
        userSearch: {
          name: ''
        },
        id: '',
        changeDate: '',//选中日期
        cityValue: '',
        submitCity:'',
        m: '',//月份
        countyValue: '',
        addOrderOptions: {
          ts_pp_ID: '',
          provinceValue: '',
          DayValue: '',
          adultNumber: 0,//成人
          adultYu: 0,//成人余票
          adultPrice: '',//成人价格
          childPrice: '',//儿童价格
          childYu: 0,//儿童余票
          childNumber: 0,//儿童
        },
      }
    },
    methods: {
      //评分类型点击
      typeClick(item){
        this.a = item.id-1;
        this.$store.commit('updateCommentData',item.name)
        this.total = this.newCommentData.length
      },
      //评论分页
      handleCurrentChange(num){
        this.initComment(num)
      },
      //发表评论
      addComment(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (!user) {
          this.centerDialogVisible = true;
          return;
        }
        this.$router.push({name:'CommentOnAComment',params: {id: this.$route.params.id}})
      },
      //选中日历,item日历信息
      changeTime(item) {
        //获取余票
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "productPriceID": item.ts_pp_ID
        };
        this.addOrderOptions.ts_pp_ID = item.ts_pp_ID;
        this.addOrderOptions.DayValue = item.ts_pp_Date;
        this.addOrderOptions.adultPrice = item.ts_pp_Price
        this.addOrderOptions.childPrice = item.ts_pp_ChildPrice

        this.$store.dispatch('GetFreeSeat', options)
          .then((data) => {
            this.addOrderOptions.adultYu = data.fullNo
            this.addOrderOptions.childYu = data.childNo
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //日历选项卡
      changeSearchMonth(item) {
        if((this.day.m+1)==item.m){
          this.day.d = new Date().getDate()
        }else{
          this.day.d = '今天'
        }
        this.n = item.i;
        this.changeDate = item.date;
        this.m = item.m
        if (this.addOrderOptions.provinceValue) {
          this.getCitySearch(this.id, this.addOrderOptions.provinceValue, '', item.date, item.m-1)
        } else {
          this.$notify({
            message: '请选择出发出发城市!',
            type: 'error'
          });
        }
      },
      //获取搜索城市
      getCitySearch(id, city, isOne, date, m) {
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
          this.userSearch.name = remote_ip_info.city + '市';
          if (isOne) {
            this.addOrderOptions.provinceValue = remote_ip_info.city + '市'
          }
          if(city){
            this.submitCity = city
          }else {
            this.submitCity =  remote_ip_info.city
          }
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "lineID": id,
            monthChose: date ? date : '',
            "city": city ? city : remote_ip_info.city + '市'//remote_ip_info.city +
          };
          this.isSalendar = true;
          this.$store.dispatch('initTimesPrice', options)
            .then((data) => {
              this.isSalendar = false;
              var calendarContentList = document.getElementById("calendarContentList");
              var str = '';
              var year = new Date().getFullYear();
              var month = new Date().getMonth();
              this.showCalendar = true;
              if (!date) {
                this.get(year, month, this, data).then(() => {
                  this.showCalendar = false;
                });
              } else {
                this.get(year, m, this, data).then(() => {
                  this.showCalendar = false;
                });
              }

              let index = Infinity;
              for (var i = 0; i < data.length; i++) {
                if (data[i].ts_pp_Price < index) {
                  index = data[i].ts_pp_Price
                }
              }
              for (var i = 0; i < 4; i++) {
                this.selectMonth.push({
                  year,
                  month: month + 1 + i,
                  index
                })
              }
            })
        });
      },
      //选中出发城市
      getSearchCity() {
        if((this.day.m+1)==new Date().getMonth()+1){
          this.day.d = new Date().getDate()
        }else{
          this.day.d = '今天'
        }
        let date = new Date()
        let str = date.getFullYear()+'-'+this.getNum(date.getMonth()+1)+'-01';
        if (this.changeDate) {
          //选中日历
          this.getCitySearch(this.id, this.addOrderOptions.provinceValue, '', this.changeDate, this.m-1);
        } else {
          this.getCitySearch(this.id, this.addOrderOptions.provinceValue, '',str,date.getMonth());
        }
        this.addOrderOptions.DayValue = '';
        this.addOrderOptions.adultNumber = 0;//成人
        this.addOrderOptions.adultYu = 0;//成人余票
        this.addOrderOptions.adultPrice = 0;//成人价格
        this.addOrderOptions.childPrice = 0;//儿童价格
        this.addOrderOptions.childYu = 0;//儿童余票
        this.addOrderOptions.childNumber = 0//儿童
      },
      //补0
      getNum(num) {
        return num < 10 ? '0' + num : '' + num;
      },
      //初始化数据
      async initData() {
        let date = new Date()
        let m = date.getMonth() + 1;
        let y = date.getFullYear()
        for (var i = 0; i < 4; i++) {
          this.searchMonth.push({
            i,
            date: y + '-' + this.getNum(m + i) + '-01',
            name: y + '年' + this.getNum(m + i) + '月',
            m: m + i
          })
        }
        let tradeID = this.$route.params.id
        //产品详情
        var getTradeGoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "goodID": tradeID,
        };
        //获取产品线路id
        let id = await this.$store.dispatch('initProductDetails', getTradeGoodInfo)

        //线路出发城市
        var getLineCityOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": id
        };
        await this.$store.dispatch('initGetLineCity', getLineCityOptions)
        //线路数据
        var getLineInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "goodID": tradeID,
        };
        await this.$store.dispatch('initLineSchedule', getLineInfo)

        //线路菜单
        var getLineMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "lineID": id
        };
        await this.$store.dispatch('initLineMenu', getLineMenuInfo)
        return id
      },
      //选中线路菜单
      changeType(index) {
        let spans = this.$refs.headerNav.querySelectorAll('span');
        let len = spans.length;

        for (let i = 0; i < len; i++) {
          spans[i].className = ''
        }
        spans[index].className = 'active'
        if (index == 1) {
          this.isScheduleList = true
        } else {
          this.isScheduleList = false
        }

        for(var i=0;i<this.showList.length;i++){
          if(this.showList[i].id==index){
            this.showList[i].isShow=true
          }else{
            this.showList[i].isShow=false
          }
        }

      },
      //获取周数
      getWeek(year, month) {
        return new Date(year, month, 1, 0, 0, 0).getDay();
      },
      //获取一个月中的所有天数
      getDates(year, month) {
        return new Date(year, month + 1, 1, -1, 0, 0).getDate();
      },
      //获取日历生成
      get(year, month, _this, data) {
        //赋值day
        for (var n = 0; n < data.length; n++) {
          data[n].day = Number(data[n].ts_pp_Date.split('-')[2])
        }
        return new Promise((relove, reject) => {
          year = Number(year);
          month = Number(month);
          var newArr = [];
          _this.arr1 = [];
          _this.arr4 = [];
          _this.arr2 = [];
          _this.arr5 = [];
          _this.arr3 = [];
          for (var i = 1; i <= 42; i++) {
            var v = i - this.getWeek(year, month);

            if (v < 1) {
              var topMonth = this.getDates(year, month - 1);

              _this.arr1.push(topMonth - (this.getWeek(year, month) - i))
            } else if (v > this.getDates(year, month)) {
              var booToomMonth = this.getDates(year, month + 1);
              _this.arr2.push(v - this.getDates(year, month))
            } else if (v == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()) {
              newArr.push(v)
                _this.arr3 = []
//              for (var n = 0; n < data.length; n++) {
//                if (data[n].day == new Date().getDate()) {
//                  data[0].n = v;
//                  _this.arr3.push({
//                    isJ: true,
//                    day: data[v - new Date().getDate()]
//                  })
////                _this.arr3.pop()
//                }
//              }
//              if (_this.arr3.length > 1) {
//                _this.arr3.shift()
//              }
//              if (!_this.arr3.length) {
//                _this.arr3.push({
//                  isJ: false,
//                  day: new Date().getDate()
//                })
//              }

//              if( _this.arr3.isJ){
//                _this.arr3.push({
//                  isJ: false,
//                  day: data[v - new Date().getDate()]
//                })
//              }else{
//                _this.arr3.push({
//                  isJ: false,
//                  day: data[v - new Date().getDate()]
//                })
//              }

//              console.log( _this.arr3)
            }
            else {
              if(data.length){
                if (v < data[0].day) {
                  _this.arr4.push(v)
                } else {
                  newArr.push(v)
                }
              }else{
                newArr.push(v)
              }
            }
          }
          for (var j = 0; j < newArr.length; j++) {
            for (var m = 0; m < data.length; m++) {
              if (data[m].day && data[m].day == newArr[j]) {
                data[m].n = newArr[j];
                _this.arr5.push(data[m])
              }else{
                data[m].n = data[m].day;
                _this.arr5.push(data[m])
              }
            }
            _this.arr5.push({
              n: newArr[j],
            })
          }
          var hash = {};

          _this.arr5 = _this.arr5.reduce(function (item, next) {
            hash[next.n] ? '' : hash[next.n] = true && item.push(next);
            return item
          }, [])
          relove()
        })
      },
      //累加器
      handleChange(value) {

      },
      //登录确定
      centerDialogVisibleSubmit() {
        this.$router.push({name: 'AdminLogin'});
      },
      //立即预订
      immediatelyReserveSubmit() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (!user) {
          this.centerDialogVisible = true;
          return;
        }
        if (this.addOrderOptions.DayValue == '') {
          this.$notify({
            message: '请选择出发日期!',
            type: 'error'
          });
          return
        }
        if (this.addOrderOptions.DayValue == '' || this.addOrderOptions.adultPrice == '') {
          this.$notify({
            message: '请选择左侧可选出发日期!',
            type: 'error'
          });
          return
        }
        if (!this.addOrderOptions.adultNumber) {
          this.$notify({
            message: '请选择人数!',
            type: 'error'
          });
          return
        }
        this.addOrderOptions.title = this.productDetailsObj.ts_pt_Name
        sessionStorage.setItem('orderInfo', JSON.stringify(this.addOrderOptions))
        this.$router.push({name: 'FillInOrder'});
      },
      //收藏
      collection(){
        if(this.isCollection){
          let user = JSON.parse(sessionStorage.getItem('user'))
          if(!user){
            this.$router.push({name:'AdminLogin'})
            return false;
          }else{
            let options = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "data": {
                "sm_mc_UserInfoID": user.ui_ID,
                "sm_mc_ProductID": this.$route.params.id,
                "sm_mc_ProductTitle": this.productDetailsObj.ts_pt_Name,
                "sm_mc_ProductPrice": this.price,
                "sm_mc_Image": this.pictureList[0],
                sm_mc_FromCity:this.submitCity
              }
            }
            this.$store.dispatch('addCollection',options)
            .then(resultcontent=>{
              this.collectionClass = true;
              this.$notify({
                message: resultcontent,
                type: 'success'
              });
              this.isCollection = false;
            },err=>{
              this.$notify({
                message: err,
                type: 'error'
              });
              this.collectionClass = true;
            })
          }
        }
      },
      //初始化评论
      initComment(page){
        //用户评论list
        let userOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ID": "",
          "UserInfoID": "",
          "GoodID": this.$route.params.id,
          "createFrom": "",
          "createTo": "",
          "IsDelete": 0,
          "page": page?page:1,
          "rows": 5
        };
        this.commentLoading = true;
        this.$store.dispatch('initCommentData',userOptions)
        .then((total)=>{
          this.commentLoading = false;
          this.total = total;
        },err=>{
        });
      }
    },
    created() {
      this.day.m = new Date().getMonth()
      this.day.d = new Date().getDate()
      //获取评论信息
      let options = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        "GoodID": this.$route.params.id,
        "IsDelete": 0
      };
      this.$store.dispatch('initCommentMX',options)
      .then(()=>{
      },err=>{
      });
      //获取评论list
      this.initComment();
      this.price = sessionStorage.getItem('money');
      //获取轮播图
//      this.$store.commit('showLoading');
      let images = JSON.parse(sessionStorage.getItem('images')).split(',')
      if (!images[images.length - 1]) {
        images.pop()
      }
      this.pictureList = images;
      this.initData().then((id) => {
        this.id = id;
        let date = new Date()
        let str = date.getFullYear()+'-'+this.getNum(date.getMonth()+1)+'-01'
        this.getCitySearch(id, '', true,str,date.getMonth());
//        this.$store.commit('hideLoading')
      });
      this.data = cityOptions;
    },
    mounted() {
//      固定的导航
      (function () {
        var sTop = $('#headerNavWrap').get(0).offsetTop + 170;
        var w = ($(window).width() - 1188) / 2
        $(window).bind("scroll", function () {
          var top = $(this).scrollTop(); // 当前窗口的滚动距离
          if (top > sTop) {
            $('#headerNavWrap').css({position: 'fixed', left: w + 'px', top: 0,})
            var content = document.getElementById('content');
          } else {
            $('#headerNavWrap').css({position: 'static', left: 'auto', top: 'auto',})
          }
          //日期选择
//          if (top > bTop) {
//            $('#scheduleList').css({position: 'fixed', left: (w + 20) + 'px', top: '70px',})
//          } else {
//            $('#scheduleList').css({position: 'static', left: 'auto', top: 'auto',})
//          }
        });
      })()
    }
  }
</script>
<style scoped>
  /*#h1{*/
    /*padding-bottom: 100px;*/
  /*}*/
  .bottom {
    clear: both;
    display: inline-block;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .setOut .button > a:nth-of-type(3) {
    font: 14px/2 "微软雅黑";
    color: #999999;
    float: left;
    margin-top:10px;
    margin-left:10px;
  }

  .setOut .button > a:last-of-type i{
    display: inline-block;
    width:14px;
    height:12px;
    background: url("../../assets/img/dinei00w200.png") no-repeat -429px -302px;
    margin-right: 5px;
  }

  .setOut .button > a:nth-of-type(3):hover {
    color: #f60;
  }

  .setOut .button > a:nth-of-type(3):hover i {
    color: #000;
    background: url("../../assets/img/dinei00w200.png") no-repeat -415px -302px;
  }
  .setOut .button > a:nth-of-type(3).active {
    color: #f60;
  }

  .setOut .button > a:nth-of-type(3).active i {
    color: #000;
    background: url("../../assets/img/dinei00w200.png") no-repeat -415px -302px;
  }
</style>
