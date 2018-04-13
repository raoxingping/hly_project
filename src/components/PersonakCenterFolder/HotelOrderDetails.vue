<template>
  <div>
    <div class="MyticketOrderDetailsWrap">
      <!--头部-->
      <header class="MyticketOrderDetailsWrapHeader">
        <div class="MyticketOrderDetailsWrapHeaderBox">
          <div class="MyticketOrderDetailsWrapHeaderImageBox">
            <img src="../../assets/img/huileyouLogo.jpg" width="200" height="60">
          </div>
        </div>
      </header>
      <!--内容-->
      <section class="MyticketOrderDetailsWrapContentBox">
        <div class="MyticketOrderDetailsWrapContent">
          <h4>订单详情</h4>
          <div class="MyticketOrderDetailsWrapContentDetalis clearfix">
            <div class="MyticketOrderDetailsWrapContentDetalisLeft">
              <div class="MyticketOrderDetailsWrapContentDetalisLeftTop">
                <h5>{{hotelOrderDetail.ht_or_GoodsListName}}</h5>
                <div class="MyticketOrderDetailsWrapContentDetalisLeftParameter clearfix">
                  <!--<span>已选套餐: 江苏</span>-->
                  <span>下单时间: {{hotelOrderDetail.ht_or_PayTime | getUseTime}}</span>
                  <!--<span>出发城市: {{ticketOrderDetail.ts_to_FromPlace}}</span>-->
                  <span>成人: ￥ {{hotelOrderDetail.ht_or_FullPrice}}x{{hotelOrderDetail.ht_or_TicketCount}}</span>
                </div>
                <div class="AllMoney">
                  <strong>订单总金额: ￥{{hotelOrderDetail.ht_or_FullPrice*hotelOrderDetail.ht_or_TicketCount}}</strong>
                </div>
              </div>
              <div class="orderContacts">
                <h5>订单联系人</h5>
                <ul class="orderContactsData">
                  <li>联系人: {{hotelOrderDetail.ht_or_UserName}}</li>
                  <li>手机号: {{hotelOrderDetail.ht_od_Phone}}</li>
                  <li>邮箱: {{hotelOrderDetail.ht_od_Email}}</li>
                </ul>
              </div>
            </div>
            <div class="MyticketOrderDetailsWrapContentDetalisRight">
              <h2><i></i>订单编号: {{hotelOrderDetail.ht_or_OrderID}}</h2>
              <div class="MyticketOrderDetailsWrapContentDetalisRightContent">
                <p :style="{display:payStatus?'none':'block'}">{{hotelOrderDetail.ht_or_OutStatus | getOutStatus}}</p>
                <div class="pendingPayment">
                  <strong :style="{display:payStatus?'block':'none'}">{{hotelOrderDetail.ht_or_PayState | getTicketStatus}}</strong>
                  <span class="time" :style="{display:payStatus?'none':'block'}">请在20分钟前完成支付 超时订单将关闭</span>
                  <span class="pendingPaymentAllMoney" :style="{display:payStatus?'none':'block'}" >总价:￥{{hotelOrderDetail.ht_or_FullPrice*hotelOrderDetail.ht_or_TicketCount}}</span>
                  <!--<span class="pendingPaymentAllMoneyOut">还需支付：<em>￥12960</em></span>-->
                  <el-button class="button" :style="{display:payStatus?'none':'block'}" @click="goPay(hotelOrderDetail)">去付款</el-button>
                  <span class="cancelOrder" :style="{display:payStatus?'none':'block'}"  @click="cancelOrder(hotelOrderDetail.ht_or_OrderID)">取消订单</span>
                </div>
              </div>
              <div class="contactInformation">
                <img src="../../assets/img/center.png" width="50" height="50">
                <strong>零售平台-云南旅游私人定制</strong>
                <span class="contactType">在线咨询</span>
                <span class="contactTelephone">
                  免费热线
                  <em>400-161-9999 转 60339</em>
                  周一至周日00:00至24:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: Object.assign({},mapGetters([
      'hotelOrderDetail'
    ])),
    data() {
      return {
        payStatus:false
      }
    },
    created(){
      let status = JSON.parse(sessionStorage.getItem('payStatusObj'))
      this.payStatus = status.isOff;
    },

    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      //去支付
      goPay(item){
        let orderInfo = {};
        orderInfo.oi_OrderName = item.ht_or_GoodsListName;
        orderInfo.OrderID = item.ht_or_OrderID;
        orderInfo.oi_SellMoney = item.ht_or_FullPrice*item.ht_or_TicketCount;
        orderInfo.oi_OrderTypeID = 4;
        sessionStorage.setItem('orderInfo',JSON.stringify(orderInfo));
        this.$router.push({name:'PaymentPlatform'})
      },
      //取消订单
      cancelOrder(orderID){
        sessionStorage.setItem('orderTypeID',4)
        let cancelOrderOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_or_OrderID": orderID,//订单ID
        };
        this.$store.dispatch('hotelCancelOrder',cancelOrderOptions)
        .then(suc=>{
          this.$notify({
            message: suc,
            type: 'success'
          });
          this.$router.push({name:'MyTourOrder'});
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      }
    },
  }
</script>
<style scoped>
  .MyticketOrderDetailsWrapHeader {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #f0f3f8;
  }

  .MyticketOrderDetailsWrapHeaderBox {
    width: 1190px;
    margin: 0 auto;
  }

  /*内容*/
  .MyticketOrderDetailsWrapContentBox {
    /*position: absolute;*/
    /*top: 100px;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    background-color: #f0f4fd;
    padding-bottom:100px;

  }

  .MyticketOrderDetailsWrapContent {
    width: 1190px;
    margin: 0 auto;
  }

  .MyticketOrderDetailsWrapContent h4 {
    font: 12px/4 "微软雅黑";
    color: #545d6c;
    margin-bottom: 10px;
  }

  .MyticketOrderDetailsWrapContentDetalisLeft {
    float: left;
    background-color: #fff;
    width: 965px;
  }

  .MyticketOrderDetailsWrapContentDetalisLeftTop {
    padding: 25px 40px;
  }

  .MyticketOrderDetailsWrapContentDetalisLeftTop h5 {
    font: bold 18px/28px "微软雅黑";
  }

  .MyticketOrderDetailsWrapContentDetalisLeftParameter {
    margin-top: 15px;
    font: 14px/2.5 "微软雅黑";
    padding-bottom: 22px;
    border-bottom: 1px dashed #ccc;
  }

  .MyticketOrderDetailsWrapContentDetalisLeftParameter span {
    width: 255px;
    float: left;
  }

  .AllMoney {
    font: 14px/57px "微软雅黑";
    color: #213f4a;
  }

  .orderContacts h5 {
    font: 18px/40px "微软雅黑";
    background-color: #f7f8fc;
    text-indent: 40px;
  }

  .orderContactsData {
    font: 14px/58px "微软雅黑";
    padding-left: 40px;
    color: #666;
  }

  .orderContactsData li {
    width: 255px;
    float: left;
  }

  .MyticketOrderDetailsWrapContentDetalisRight {
    float: right;
    width: 225px;
  }

  .MyticketOrderDetailsWrapContentDetalisRight h2 {
    text-align: center;
    font: 16px/60px "微软雅黑";
    background-color: #00da62;
    color: #fff;
    word-break:break-all;
    position: relative;
  }

  .MyticketOrderDetailsWrapContentDetalisRight h2 i {
    position: absolute;
    bottom: -12px;
    left: 50%;
    margin-left: -3px;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #00da62;
  }

  .MyticketOrderDetailsWrapContentDetalisRightContent {
    border: 1px solid #eff0f4;
    background-color: #f4f7fc;
  }

  .MyticketOrderDetailsWrapContentDetalisRightContent p {
    font: 30px/3 "微软雅黑";
    color: #d75d36;
    text-align: center;
  }

  .contactInformation {
    background-color: #fff;
    padding: 18px;
    border: 1px solid #eff0f4;
    border-top: none;
  }

  .contactInformation > img {
    display: block;
    margin-bottom: 10px;
  }

  .contactInformation > strong {
    font: 14px/34px "微软雅黑";
    color: #2e2b36;
  }

  .contactType {
    font: 12px/32px "微软雅黑";
    color: #2e2b36;
    display: block;
    padding-left: 10px;
    margin-bottom: 10px;
  }

  .contactTelephone {
    font: 12px/20px "微软雅黑";
    color: #9a9b96;
    padding-left: 10px;
  }

  .contactTelephone em {
    display: block;
    color: #2e2b36;
  }

  .pendingPayment {
    text-align: center;
    padding: 20px 36px;
  }

  .pendingPayment > * {
    display: block;
  }

  .pendingPayment>strong {
    font:30px/2 "微软雅黑";
    color: #f60;
  }

  .time {
    display: block;
    margin-bottom: 20px;
    color: #999;
    font:12px/20px "微软雅黑";
    text-align: left;
  }

  .pendingPaymentAllMoney {
    font:16px/2 "微软雅黑";
  }

  .pendingPaymentAllMoneyOut {
    font:16px/2 "微软雅黑";
  }

  .pendingPaymentAllMoneyOut em {
    font-size: 18px;
    color: #f60;
  }

  .button {
    margin:0 auto;
    background-color: #f60;
    color: #fff;
  }

  .cancelOrder {
    font:18px/46px "微软雅黑";
    color: #999999;
  }
</style>
