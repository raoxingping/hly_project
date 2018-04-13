<template>
  <div>
    <div class="huiLeYouCashierWrap">
      <!--头部-->
      <header class="huiLeYouCashierWrapHeader">
        <div class="huiLeYouCashierWrapHeaderContent clearfix">
          <div class="huiLeYouCashierWrapHeaderContentFloat">
            <strong @click="toPay">{{user.ui_Name}}</strong>
            <span></span>
            <a href="javaecript:;">注销</a>
          </div>
        </div>
      </header>
      <!--内容-->
      <section class="huiLeYouCashierWrapContent">
        <!--logo-->
        <div class="huiLeYouCashierWrapContentTitle clearfix">
          <img src="../../assets/img/center.png" width="70" height="50">
          <strong>收银台</strong>
        </div>
        <!--产品内容-->
        <div class="productContentDetails clearfix" v-if="orderInfo.title">
          <div class="productContentDetailsContent">
            <strong>产品名称: {{orderInfo.title}}</strong>
            <ul class="aboutPayment clearfix">
              <li>订单号: {{orderInfo.orderID}} <span></span></li>
              <li>订单金额: {{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}.00元 </li>
              <!--<li>已支付: 3434.00元</li>-->
            </ul>
          </div>
          <div class="paymentMoney">
            <strong>应付金额: <span>{{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}.00</span>元</strong>
          </div>
        </div>
        <!--产品内容-->
        <div class="productContentDetails clearfix" v-else>
          <div class="productContentDetailsContent">
            <strong>产品名称: {{orderInfo.oi_OrderName}}</strong>
            <ul class="aboutPayment clearfix">
              <li>订单号: {{orderInfo.OrderID}} <span></span></li>
              <li>订单金额: {{orderInfo.oi_SellMoney+''}}.00元 </li>
              <!--<li>已支付: 3434.00元</li>-->
            </ul>
          </div>
          <div class="paymentMoney">
            <strong>应付金额: <span>{{orderInfo.oi_SellMoney}}.00</span>元</strong>
          </div>
        </div>

        <!--支付平台-->
        <div class="paymentPlatform">
          <h4>支付平台</h4>
          <ul class="paymentPlatformList clearfix">
            <li><a href="javascript:;" @click="wechatPay">微信支付</a></li>
          </ul>
        </div>
      </section>
      <!--支付常见问题-->
      <footer class="commonProblem">
        <h4>支付常见问题:</h4>
        <ul class="commonProblemList">
          <li>
            <strong>1.订单金额超过银行卡支付限额怎么办？</strong>
            <span>答：银行卡限额是指单笔交易在支付时候的最大额度以及每个月最高的支出金额。如果订单金额超过2万元，推荐您使用途牛钱包或者途牛宝支付来完成交易。</span>
          </li>
          <li>
            <strong>
              <strong>2.忘记当前银行卡在银行保存的手机号码怎么办？</strong>
              <span>答：您可拨打银行客服电话查看或修改银行卡预存手机号码。请明确告诉银行客服是修改该银行卡绑定的手机号码。</span>
            </strong>
          </li>
          <li>
            <strong>3.无法收到手机短信校验码怎么办？</strong>
            <span>答：请确认您当前使用的手机号码和该银行卡在银行预存的手机号码一致。如果不一致，请拨打银行客服热线，修改预存的手机号码。如果一致，可致电客服电话4007-999-999，联系客服处理。</span>
          </li>
          <li>
            <strong>4、网上银行重复付款了该怎么办？</strong>
            <span>答：因银行未及时传输数据导致，请联系客服，我们与银行核对后，会将重复支付的款项退至您的原支付银行卡中。</span>
          </li>
          <li>
            <strong>5.使用网银支付失败怎么办？</strong>
            <span>
              答：（1）根据报错提示进行处理。<br/>
              （2）如果报错信息不明确，请确认填写信息是否正确、是否超过您银行卡的交易限额、是否开通网银支付功能等。<br/>
              （3）上述问题均排除后，烦请更换其他浏览器支付；如仍无法支付可致电4007-999-999，联系客服处理。
            </span>
          </li>
          <li>
            <strong>6、银行卡或者账户已被扣款，但是订单仍然是“未付款”，怎么办？</strong>
            <span>答：因银行未及时传输数据导致，可稍后刷新页面查看，如长时间仍显示“未付款”，可致电客服电话4007-999-999，联系客服处理。</span>
          </li>
          <li>
            <strong>7、支付总是失败，常见的原因有哪些？</strong>
            <span>
              答：（1）若您的银行卡未开通网上支付功能，无法进行在线支付，请拨打银行客服热线，咨询开通网上支付流程，进行开通。<br/>
              （2）银行卡已过期、作废、挂失或者余额不足，限额超限等，建议您拨打银行客服热线咨询。<br/>
              （3）输入的银行卡号、密码或证件号等与预置的不符，建议您重新输入正确的卡密码或证件号等，如果您忘记了密码，请您及时与所属银行联系办理密码重置。<br/>
              （4）银行系统数据传输出现异常。<br/>
              （5）网络中断。
            </span>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        user:{},
        orderInfo:{}

      }
    },
    created(){
      let user = JSON.parse(sessionStorage.getItem('user'))
      let orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
      orderInfo.oi_SellMoney = parseInt(orderInfo.oi_SellMoney)
      orderInfo.adultPrice = parseInt(orderInfo.adultPrice)
      orderInfo.childPrice = parseInt(orderInfo.childPrice)

      if(user){
        this.user = user
      }else{
        this.$router.push({name:'AdminLogin'})
        return
      }
      if(orderInfo){
        this.orderInfo = orderInfo
      }else{
        switch (orderInfo.oi_OrderTypeID){
          case 0:
            //旅行社
            this.$router.push({name:'HueiLeYouTourHomePage'})
            break;
          case 2:
            //门票
            this.$router.push({name:'TicketsDetail'})
            break;
          case 4:
            //酒店
            this.$router.push({name:'HotelSearchMore'})
            break;
        }
      }
    },
    methods: {
      initData() {
      },
      //跳到个人中心
      toPay(){
        this.$router.push({name:'MyTourOrder'})
      },
      search() {
        this.initData()
      },
      //微信支付
      wechatPay(){
        this.$router.push({name:'MyOrderQRCode'})
      }
    },
  }
</script>
<style scoped>
  .huiLeYouCashierWrap {
    background-color: #f0f0f0;
    width:100%;
    padding-bottom:30px;
  }

  .huiLeYouCashierWrapHeader {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
  }

  .huiLeYouCashierWrapHeaderContent {
    width: 1200px;
    margin: 0 auto;
  }

  .huiLeYouCashierWrapHeaderContentFloat {
    float: right;
    font: 14px/30px "微软雅黑";
    color: #666052;
  }

  .huiLeYouCashierWrapHeaderContentFloat strong {
    float: left;
    padding: 0 20px;
  }

  .huiLeYouCashierWrapHeaderContentFloat span {
    float: left;
    width: 2px;
    height: 15px;
    background-color: #d2d2d2;
    margin-top: 7px;
  }

  .huiLeYouCashierWrapHeaderContentFloat a {
    color: #666052;
    float: left;
    padding: 0 20px;
  }

  .huiLeYouCashierWrapContent {
    width: 1200px;
    margin: 0 auto;
  }

  .huiLeYouCashierWrapContentTitle {
    padding: 20px 0;
  }

  .huiLeYouCashierWrapContentTitle img {
    float: left;
    padding-right: 20px;
    border-right: 1px solid #fff;
  }

  .huiLeYouCashierWrapContentTitle strong {
    float: left;
    font: 24px/2 "微软雅黑";
    color: #676566;
    padding-left: 20px;
  }

  .productContentDetails {
    padding: 20px;
    background-color: #fff;
    font: 14px/2 "微软雅黑";
    color: #432e1b;
  }

  .productContentDetailsContent {
    width: 700px;
    float: left;
  }

  .paymentMoney {
    float: right;
  }

  .paymentMoney span {
    font-size: 24px;
    color: #f95053;
  }

  .aboutPayment li {
    float: left;
  }

  .aboutPayment {
    overflow: hidden;
  }

  .aboutPayment li span {
    display: inline-block;
    width: 2px;
    height: 15px;
    background-color: #7490a8;
    margin: 0 5px;
  }

  .paymentPlatform {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px;
  }

  .paymentPlatform h4 {
    font: 18px/2 "微软雅黑";
    color: #878787;
  }

  .paymentPlatformList {
    margin-top: 10px;
    font: 14px/24px "微软雅黑";
  }

  .paymentPlatformList li {
    float: left;
  }

  .paymentPlatformList > li > a {
    color:#8d8d8d;
  }
  .paymentPlatformList > li > a:hover{
    color: #f60;
  }

  .commonProblem {
    width:1200px;
    margin: 20px auto;
  }

  .commonProblem>h4 {
    font: 18px/4 "微软雅黑";
    color: #666;
  }

  .commonProblemList {
    font: 14px/24px "微软雅黑";
  }

  .commonProblemList > li {
    margin-top: 20px;
  }

  .commonProblemList strong {
    display: block;
  }

  .commonProblemList span {
    display: block;
  }
</style>
