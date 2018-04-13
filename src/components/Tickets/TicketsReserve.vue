<template>
  <div>
    <header class="TicketsReserveLogoAndProgressBar">
      <div class="TicketsReserveLogoAndProgressBarWrap clearfix">
        <div class="TicketsReserveLogo">
          <img src="../../assets/img/huileyouLogo.jpg" width="200" height="60">
          <router-link to="/Comment/agenciesHome"></router-link>
        </div>
        <!--进度条-->
        <div class="TicketsReserveProgressBar"></div>
      </div>
    </header>
    <!--预定内容-->
    <section class="TicketsReserveContent">
      <div class="TicketsReserveContentWrap">
        <div class="TicketsReserveContent clearfix">
          <!--内容左边-->
          <div class="TicketsReserveContentLeft">
            <div class="TicketsReserveContentLeftContent">
              <!--标题-->
              <div class="TicketsReserveContentLeftTitle">
                <h2>{{ticketsReserveDetail.tm_tt_Name}}</h2>
                <a href="javascript:;">预定须知<i></i></a>
                <div class="reserveDetails">
                  <div class="reserveDetailsReserve clearfix">
                    <strong>预定须知</strong>
                    <ul class="reserveDetailsReserveList">
                      <li>
                        <span>门票类型:</span>
                        <span>电子票</span>
                      </li>
                      <li>
                        <span>提前预定时间:</span>
                        <span>1天23点前</span>
                      </li>
                      <li>
                        <span>取票方式:</span>
                        <span>华棚沟景区游人服务中心票务中心</span>
                      </li>
                      <li>
                        <span>门票有效期:</span>
                        <span></span>
                      </li>
                      <li>
                        <span>入园方式:</span>
                        <span>短信换票入园</span>
                      </li>
                    </ul>
                  </div>
                  <div class="reserveDetailsOther clearfix">
                    <strong>其他说明</strong>
                    <ul class="reserveDetailsOtherList"></ul>
                  </div>
                </div>
              </div>
              <!--选择出游日期-->
              <div class="choiceOutTime">
                <div class="choiceOutTimeInput">
                  <span><em>*</em>出游日期:</span>
                  <input type="text">
                  <i></i>
                </div>
                <div class="choiceOutTimeCalendar">
                  <div class="lastTimeNext clearfix">
                    <a href="javascript:;" class="last" @click="prev"></a>
                    <span class="time">{{date}}</span>
                    <a href="javascript:;" class="next" @click="next"></a>
                  </div>
                  <div class="weekListWrap">
                    <ul class="weekList clearfix">
                      <li>日</li>
                      <li>一</li>
                      <li>二</li>
                      <li>三</li>
                      <li>四</li>
                      <li>五</li>
                      <li>六</li>
                    </ul>
                  </div>
                  <!--日历-->
                  <div class="choiceOutTimeCalendarListWrap">
                    <ul class="choiceOutTimeCalendarList clearfix" v-loading="isLoading">
                      <li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;" v-for="item in arr1">
                        <span style="color: #ccc; padding-left: 10px; font: 14px/2 '微软雅黑';">{{item}}</span>
                        <!--<strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">1</strong>-->
                      </li>
                      <li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;" v-for="item in arr4">
                        <span style="color: #333; padding-left: 10px; font: 14px/2 '微软雅黑';">{{item==day.d?"今天":item}}</span>
                        <!--<strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">1</strong>-->
                      </li>
                      <li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;" v-for="item,index in arr3" :class="{active:index==n}" @click="clickDate(item,index)">
                        <span :class="{spanActive:index==n}" style="padding-left: 10px; font: 14px/2 '微软雅黑';" class="spanClass">{{item.n==day.d?"今天":item.n}}</span>
                        <strong :class="{spanActive:index==n}" class="strongActive" style=" font: 14px/2 '微软雅黑'; display: block; text-align: center;"  v-show="item.tm_tp_RealPrice">¥{{item.tm_tp_RealPrice}}</strong>
                      </li>
                      <!--<li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;" v-for="item in arr5" v-show="arr5.length">-->
                        <!--<span style="color: #333; padding-left: 10px; font: 14px/2 '微软雅黑';">{{item.n}}</span>-->
                        <!--&lt;!&ndash;<strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">1</strong>&ndash;&gt;-->
                      <!--</li>-->
                      <li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;" v-for="item in arr2">
                        <span style="color: #ccc; padding-left: 10px; font: 14px/2 '微软雅黑';">{{item}}</span>
                        <!--<strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">1</strong>-->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--选择人数-->
                <div class="selectBox">
                  <div class="peopleNumberBox clearfix">
                    <strong><i>*</i>出游人数:</strong>
                    <el-input-number
                      v-model="peopleNumber"
                      :min="0"
                      :max="dateObj.tm_tp_Limit"
                      @change="handleChange"
                      size="mini"
                      class="accumulation"
                    ></el-input-number>
                    <span>最多可预定{{dateObj.tm_tp_Limit}}张</span>
                  </div>
                  <div class="distributionInformation clearfix">
                    <strong>配送信息:</strong>
                    <el-radio-group v-model="pickUp" class="distributionInformationBtn">
                      <el-radio :label="1">（门票自取）</el-radio>
                    </el-radio-group>
                    <span>地址:华棚沟景区游人服务中心票务中心</span>
                  </div>
                </div>
              </div>
            </div>
            <!--取票人信息-->
            <div class="theTouristInfromation">
              <h5>取票人/出游人信息</h5>
              <div class="fillInTheTouristInfromation">
                <div class="fillInTheTouristInfromationTitle">
                  <strong>常用出游人</strong>
                </div>
                <div class="fillInPeopleInfromation" v-for="item in arr">
                  <strong class="fillInPeopleInfromationTitle" v-show="peopleNumber.length==0">暂无常用出游人</strong>
                  <span class="ticketCollector">取票人</span>
                  <ul class="fillInInputList">
                    <li>
                      <strong><i>*</i>姓名:</strong>
                      <input type="text" placeholder="请填写姓名" v-model="item.tm_oc_UserName">
                    </li>
                    <li>
                      <strong><i>*</i>身份证:</strong>
                      <input type="text" placeholder="请填写证件号" v-model="item.tm_oc_CertNo">
                    </li>
                    <li>
                      <strong><i>*</i>手机号码:</strong>
                      <input type="text" placeholder="用于接收出票短信" v-model="item.tm_oc_Phone">
                    </li>
                    <!--<li>-->
                      <!--<strong>邮箱:</strong>-->
                      <!--<input type="text" placeholder="请填写邮箱">-->
                    <!--</li>-->
                  </ul>
                </div>
              </div>
            </div>
            <!--支付-->
            <div class="agreement">
              <el-checkbox v-model="checked">同意</el-checkbox>
              <a href="javascript:;">西岭雪山预订协议</a>
            </div>
            <div class="paymentOrder clearfix">
              <span>订单金额:<em>￥</em><strong>{{dateObj.tm_tp_RealPrice*peopleNumber?dateObj.tm_tp_RealPrice*peopleNumber:0}}</strong></span>
              <el-button class="paymentOrderSubmit" @click="ticketPay">立即支付</el-button>
            </div>
          </div>
          <!--内容右边-->
          <div class="TicketsReserveContentRight">
            <div class="TicketsReserveContentRightTopBorder"></div>
            <div class="TicketsReserveContentRightContent">
              <div class="detailsOfCharges">
                <strong>费用明细 <em>(在线支付)</em></strong>
                <span>门票价格:<em>￥{{dateObj.tm_tp_RealPrice?dateObj.tm_tp_RealPrice:0}}</em></span>
              </div>
              <div class="orderMoney">
                <strong>订单总金额:<em>￥<i>{{dateObj.tm_tp_RealPrice*peopleNumber?dateObj.tm_tp_RealPrice*peopleNumber:0}}</i></em></strong>
                <a href="javascript:;" @click="ticketPay">立即支付</a>
                <div class="border"></div>
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
  import $ from 'jquery'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        n:999,
        isLoading:false,
        day:{},
        str: '',
        peopleNumber: '0',
        pickUp: 1,
        date:'',
        id:'',
        checked: false,
        m:'',
        arr:[],
        user:{},
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[],
        arr5:[],
        dateObj:{},
        ticketsReserveDetail:{}
      }
    },
    created(){
      //获取门票立即预订详情数据
      this.ticketsReserveDetail = JSON.parse(sessionStorage.getItem('ticketsReserveDetail'));
      this.user = JSON.parse(sessionStorage.getItem('user'))
      if(!this.user){
        this.$router.push({name:'AdminLogin'})
        return
      }
      this.day.d = new Date().getDate();
      this.id = this.$route.params.id;
      let month = this.getNum(new Date().getMonth()+1);
      this.m = new Date().getMonth()+1;
      this.date = new Date().getFullYear()+'-'+month+'-'+this.getNum(new Date().getDate())
      this.isLoading = true;
      this.initData(this.id,month,this.getNum(new Date().getDate())).then((data)=>{
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        this.isLoading = false;
        if(data.length){
          this.getDateList(year,month,data)
        }else{
          this.$notify({
            message: err,
            type: 'error'
          });
          return
        }

      })
      //获取票板信息
    },
    methods: {
      handleChange(value) {
        this.arr = []
        for(var i=0;i<value;i++){
          this.arr.push({
            tm_oc_UserName:'',
            tm_oc_CertNo:'',
            tm_oc_Phone:''
          })
        }

      },
      //立即支付
      ticketPay(){
        if(!this.arr.length){
          this.$notify({
            message: '取票人不能为空!',
            type: 'error'
          });
          return
        }
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "tm_or_TourSiteCode": this.ticketsReserveDetail.tm_ts_Code,//景点编号
            "tm_or_TicketTypeID": this.ticketsReserveDetail.tm_tt_ID,//商户票种编号
            "tm_or_UserID": this.user.ui_UserCode,//用户编码
            "tm_or_TradeInfoID": "23",//供应商商家编码
            "tm_or_TicketCount": this.peopleNumber,//总张数
            "tm_or_SumPrice": this.dateObj.tm_tp_RealPrice*this.peopleNumber,//总金额
            "tm_or_SumService":"0",//总网售手续费
            "tm_oc_PlayDate": this.dateObj.tm_tp_Date,
            "tm_or_Remark": "",
          },
          "personInfo": this.arr
        };
        console.log(options)
        this.$store.commit('showLoading');
        this.$store.dispatch('initTicketPay',options)
        .then((data)=>{
          this.$store.commit('hideLoading');
          let newData = data.data;
          let type = data.type;
          newData.type = type;
          newData.title = this.ticketsReserveDetail.tm_tt_Name;
          newData.orderID = newData.tm_or_OrderID;
          newData.adultNumber = this.peopleNumber;
          newData.adultPrice = this.dateObj.tm_tp_RealPrice;
          newData.childNumber = 0;
          newData.childPrice = 0;
          newData.oi_OrderName = this.ticketsReserveDetail.tm_tt_Name;
          newData.OrderID = newData.tm_or_OrderID;
          newData.oi_OrderTypeID = 2;
          newData.oi_SellMoney = this.dateObj.tm_tp_RealPrice*this.peopleNumber;
          sessionStorage.setItem('orderInfo',JSON.stringify(newData))
          this.$router.push({name:'PaymentPlatform'})
        },err=>{
          this.$store.commit('hideLoading');
          this.$notify({
            message: err,
            type: 'error'
          });
          this.$router.push({name:'PersonalDataDetails'})
        })
      },
      //点击日期
      clickDate(item,index){
        this.dateObj = item
        this.n = index
      },
      getNum(num){
        return num<10?'0'+num:''+num
      },
      getDateList(year, month,data){
        if(!data.length){
          this.$notify({
            message: '下个月数据不存在!',
            type: 'error'
          });
          return
        }
        //赋值day
        for (var n = 0; n < data.length; n++) {
          data[n].day = Number(data[n].tm_tp_Date.split('-')[2])
        }
        return new Promise((relove,reject)=>{
          let newYear = Number(year);
          let newMonth = Number(month);
          let newArr = [];
          this.arr1 = [];
          this.arr2 = [];
          this.arr3 = [];
          this.arr4 = [];
          this.arr5 = [];
          for (var i = 1; i <= 42; i++) {
            var v = i - this.getWeek(newYear, newMonth);

            if (v < 1) {
              var topMonth = this.getDates(newYear, newMonth - 1);

              this.arr1.push(topMonth - (this.getWeek(newYear, newMonth) - i))
            } else if (v > this.getDates(newYear, newMonth)) {
              this.arr2.push(v - this.getDates(newYear, newMonth))
            } else if (v == new Date().getDate() && newYear == new Date().getFullYear() && newMonth == (new Date().getMonth()+1)) {
              newArr.push(v)
            }else {
              if(data.length){
                if (v < data[0].day) {
                  this.arr4.push(v)
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
                this.arr3.push(data[m])
              }
            }
            if(newArr[j]>data[data.length-1].day){
              this.arr5.push({
                n: newArr[j],
              })
            }else{
              this.arr5 = []
            }
//            this.arr5.push({
//              n: newArr[j],
//            })
          }
          var hash = {};

          this.arr3 = this.arr3.reduce(function (item, next) {
            hash[next.n] ? '' : hash[next.n] = true && item.push(next);
            return item
          }, [])
          relove()
        })
      },
      async initData(id,month,day) {
        let year = new Date().getFullYear();
        if(!day){
          day = this.getNum(new Date().getDate());
        }
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "dateFrom":year+'-'+month+'-'+day,
          "tm_tt_ID": this.$route.params.id,//商户票种编号
        }
        let data = await this.$store.dispatch('initTicketsReserveDate',options)
        return data
      },
      //获取周数
      getWeek(year, month) {
        return new Date(year, month, 1, 0, 0, 0).getDay();
      },
      //获取一个月中的所有天数
      getDates(year, month) {
        return new Date(year, month + 1, 1, -1, 0, 0).getDate();
      },
      //上个月
      prev(){
//        this.date = ''
        let month = this.getNum(new Date().getMonth()+1);
        let newM = this.date.split('-')[1];
        if(month===newM){
          this.$notify({
            message: '上个月数据不存在!',
            type: 'error'
          });
          return
        }else{
          var year = new Date().getFullYear();
          this.m--;
          this.date = year+'-'+this.getNum(this.m)+'-01';
          let newM = this.getNum(this.m)
          let id = this.id
          this.initData(id,newM,this.date).then((data)=>{
            var year = new Date().getFullYear();
            this.getDateList(year,newM,data)
          })
        }
      },
      //下个月
      next(){
        this.date = ''
        var year = new Date().getFullYear();
        this.m++;
        this.date = year+'-'+this.getNum(this.m)+'-01';
        let newM = this.getNum(this.m)
        let id = this.id
        this.initData(id,newM,this.date).then((data)=>{
          var year = new Date().getFullYear();
          this.getDateList(year,newM,data)
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
          return
        })
      }
    },
    mounted() {
//      for (var i = 0; i < 42; i++) {
//        this.str += `<li style="float: left;width:88px;height:62px;box-shadow: 0 0 1px #ccc inset;">
//                  <span style="color: #000; padding-left: 10px; font: 14px/2 '微软雅黑';">${i}</span>
//                  <strong style="color: #f60; font: 14px/2 '微软雅黑'; display: block; text-align: center;">${i}</strong>
//                </li>`
//    }
    }
  }
</script>
<style scoped>
  .strongActive{
    color: #f60;
  }
  .spanClass{
    color: #333;
  }
  .spanActive{
    color: #fff;
  }
  .active{
    color: #fff;
    background: #ffa833;
  }
  .TicketsReserveLogoAndProgressBar {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .TicketsReserveLogoAndProgressBarWrap {
    width: 1250px;
    margin: 0 auto;
  }

  .TicketsReserveLogo {
    width: 200px;
    position: relative;
    float: left;
  }

  .TicketsReserveLogo a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .TicketsReserveProgressBar {
    float: right;
  }

  /*头部结束*/

  /*内容开始*/

  .TicketsReserveContent {
    width: 100%;
    padding-top: 40px;
    background-color: #f4f5f6;
    padding-bottom: 50px;
  }

  .TicketsReserveContentWrap {
    width: 1250px;
    margin: 0 auto;
  }

  /*内容左边*/
  .TicketsReserveContentLeft {
    width: 953px;
    float: left;
  }

  .TicketsReserveContentLeftContent {
    padding: 20px;
    border: 3px solid #ffc073;
    box-sizing: content-box;
  }

  /*内容右边*/
  .TicketsReserveContentRight {
    float: right;
  }

  .TicketsReserveContentLeftTitle > h2 {
    font: bold 22px/52px "微软雅黑";
    display: inline-block;
    color: #333;
  }

  .TicketsReserveContentLeftTitle > a {
    display: inline-block;
    font: 16px/52px "宋体";
    color: #ff8800;
    position: relative;
    padding-right: 10px;
  }

  .TicketsReserveContentLeftTitle > a.active i {
    transform: rotateZ(180deg);
  }

  .TicketsReserveContentLeftTitle i {
    transition: .5s;
    position: absolute;
    right: 0;
    top: 20px;
    border: 4px solid transparent;
    border-bottom-color: #ff8800;
    transform-origin: 4px 6px;
    transform: rotateZ(0);
  }

  .reserveDetails {
    width: 100%;
    border: 1px solid #ff8800;
    background-color: #fffce9;
    padding: 25px;
    display: none;
  }

  .reserveDetailsReserve strong,
  .reserveDetailsOther strong {
    font: 16px/26px "微软雅黑";
    float: left;
  }

  .reserveDetailsReserveList,
  .reserveDetailsOtherList {
    float: left;
    font: 14px/2 "微软雅黑";
    margin-left: 30px;
    color: #666;
  }

  .reserveDetailsReserveList span:nth-of-type(1),
  .reserveDetailsOtherList span:nth-of-type(1) {
    display: inline-block;
    width: 110px;
    text-align: left;
  }

  /*预定须知结束*/

  /*出游日期开始*/

  .choiceOutTime {
    padding: 40px;
    background-color: #fff;
  }

  .choiceOutTimeInput {
    position: relative;
  }

  .choiceOutTimeInput span {
    font: 14px/26px "微软雅黑";
  }

  .choiceOutTimeInput input {
    width: 285px;
    height: 36px;
    border: 1px solid #ddd;
    margin-left: 20px;
    padding: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .choiceOutTimeInput em {
    color: #f60;
  }

  .choiceOutTimeInput i {
    position: absolute;
    top: 7px;
    left: 350px;
    width: 19px;
    height: 20px;
    background: url("../../assets/img/calendar.png") no-repeat;
  }

  .choiceOutTimeCalendar {
    margin-left: 89.5px;
  }

  .lastTimeNext {
    width: 615px;
    height: 51px;
    border: 1px solid #ddd;
    position: relative;
    margin-top: -1px;
    border-top-right-radius: 5px;
  }

  .lastTimeNext > .last {
    width: 11px;
    height: 11px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotateZ(-140deg);
  }

  .lastTimeNext > .next {
    width: 11px;
    height: 11px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotateZ(45deg);
  }

  .lastTimeNext > .time {
    display: block;
    width: 100%;
    text-align: center;
    font: 12px/4 "微软雅黑";
  }

  .weekListWrap {
    width: 615px;
    overflow: hidden;
  }

  .weekList {
    width: 616px;
    font: 14px/30px "宋体";
  }

  .weekList > li {
    float: left;
    width: 88px;
    text-align: center;
    background-color: #535d63;
    color: #fff;
  }

  .choiceOutTimeCalendarList {
    width: 616px;
  }

  .choiceOutTimeCalendarListWrap {
    width: 615px;
  }

  .choiceOutTime .selectBox {
    font: 14px/40px "微软雅黑";
    margin-top: 20px;
    color: #666;
  }

  .peopleNumberBox i {
    color: #f60;
  }

  .peopleNumberBox > * {
    float: left;
  }

  .peopleNumberBox > .accumulation {
    margin: 5px 10px 0;
  }

  .distributionInformation > * {
    float: left;
  }

  .distributionInformationBtn {
    margin: 12px 10px 0;
  }

  /*取票人信息*/
  .theTouristInfromation {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-top: 2px solid #b9b9b9;
    background-color: #fff;
  }

  .theTouristInfromation > h5 {
    font: bold 16px/3 "微软雅黑";
    background-color: #f8f8f8;
    padding-left: 20px;
  }

  .fillInTheTouristInfromation {
    padding: 10px 20px;
  }

  .fillInTheTouristInfromationTitle {
    font: 16px/2 "微软雅黑";
    border-bottom: 4px solid #eee;
    color: #333333;
  }

  .fillInPeopleInfromationTitle {
    display: block;
    width: 100%;
    text-align: center;
    font: 16px/3 "微软雅黑";
    color: #999999;
  }

  .ticketCollector {
    font: bold 14px/2 "微软雅黑";
    color: #ff8800;
  }

  .fillInInputList li {
    margin-bottom: 10px;
  }

  .fillInInputList strong {
    display: inline-block;
    width: 140px;
    font: 12px/40px "微软雅黑";
    text-align: right;
    margin-right: 10px;
  }

  .fillInInputList i {
    color: #f80;
  }

  .fillInInputList input {
    width: 300px;
    font: 12px/3 "微软雅黑";
    padding: 0 5px;
    border: 1px solid #ddd;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  /*支付订单*/

  .TicketsReserveContentLeft .agreement {
    font-size: 12px;
  }

  .TicketsReserveContentLeft .agreement a {
    display: inline-block;
    margin-left: 20px;
    color: #f80;
    line-height: 70px;
    font-family: "微软雅黑";
  }

  .TicketsReserveContentLeft .paymentOrder {
    border: 1px solid #ffdaac;
    background-color: #fffce9;
    font: 14px/80px "微软雅黑";
    color: #333;
    text-indent: 18px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .TicketsReserveContentLeft .paymentOrder em {
    color: #f80;
    padding-left: 10px;
  }

  .TicketsReserveContentLeft .paymentOrder strong {
    font-size: 20px;
    color: #f80;
  }

  .TicketsReserveContentLeft .paymentOrder > span {
    float: left;
  }

  .paymentOrderSubmit {
    float: right;
    background-color: #ff8800;
    color: #fff;
    margin: 20px 20px 0;
  }

  /*费用明细*/

  .TicketsReserveContentRightTopBorder {
    width: 240px;
    height: 8px;
    background: url("../../assets/img/border-top.png") no-repeat;
    -webkit-background-size: 240px 8px;
    background-size: 240px 8px;
    margin-bottom: -4px;
  }

  .TicketsReserveContentRightContent {
    width: 230px;
    margin: 0 auto;
    border: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    z-index: 2;
  }

  .detailsOfCharges {
    padding:10px;
  }

  .detailsOfCharges strong {
    font: bold 16px/3 "微软雅黑";
    display: block;
    text-align: center;
  }

  .detailsOfCharges strong em {
    font-weight: normal;
  }

  .detailsOfCharges span {
    font: 14px/3 "微软雅黑";
    text-align: center;
    display: block;
  }

  .detailsOfCharges span em {
    color: #f80;
    padding-left: 10px;
  }

  .TicketsReserveContentRightContent .orderMoney {
    border-top: 1px solid #ffebce;
    padding:10px;
    background-color: #fffce9;
    position: relative;
  }

  .TicketsReserveContentRightContent .orderMoney strong {
    display: block;
    text-align: center;
    font: bold 16px/2 "微软雅黑";
    color: #333;
  }

  .TicketsReserveContentRightContent .orderMoney strong em {
    padding-left:10px;
    color: #f80;
  }

  .TicketsReserveContentRightContent .orderMoney a {
    font: 16px/2 "微软雅黑";
    display: block;
    width:60%;
    text-align: center;
    color: #fff;
    background-color: #f80;
    margin: 10px auto;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .TicketsReserveContentRightContent .orderMoney .border {
    width: 228px;
    height:8px;
    background: url("../../assets/img/border.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    transform: rotateX(180deg);
    position: absolute;
    left:0;
    bottom:-1px;
  }


</style>
