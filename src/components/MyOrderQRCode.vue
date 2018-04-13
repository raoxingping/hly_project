<template>
    <div>
      <div class="huiLeYouCashierWrap">
        <header class="huiLeYouCashierWrapHeader">
          <div class="huiLeYouCashierWrapHeaderContent clearfix">
            <div class="huiLeYouCashierWrapHeaderContentFloat">
              <strong @click="toMy">{{user.ui_Name}}</strong>
              <span></span>
              <a href="javaecript:;">注销</a>
            </div>
          </div>
        </header>
        <!--内容-->
        <section class="huiLeYouCashierWrapContent">
          <!--logo-->
          <div class="huiLeYouCashierWrapContentTitle clearfix" @click="goHomePage">
            <img src="../assets/img/center.png" width="70" height="50">
            <strong>收银台</strong>
          </div>


          <div class="huiLeYouOrderRemind clearfix">
            <div class="huiLeYouOrderRemindLeft">
              <strong>请您及时付款，以便订单及时处理！订单号: 103343343</strong>
              <span>请您在提交订单后<em ref="timer">{{text}}</em>内完成支付，否则订单会自动取消。</span>
            </div>
            <div class="huiLeYouOrderRemindRight" v-if="orderInfo.oi_SellMoney">
              <strong>应付金额:<span>{{orderInfo.oi_SellMoney}}.00</span>元</strong>
            </div>
            <div class="huiLeYouOrderRemindRight" v-else>
              <strong>应付金额:<span>{{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}.00</span>元</strong>
            </div>
          </div>


          <div class="sweepQRCodeBoxWrap">
            <div class="sweepQRCodeBox">
              <div class="QRCode" ref="ewm"></div>
            </div>
            <a href="javascript:;" @click="changePay">>选择其他支付方式</a>
          </div>
        </section>
      </div>
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
  import {mapGetters} from 'vuex'
  import {leftTimer} from '../assets/public'
  export default{
    name: '',
    data(){
      return {
        centerDialogVisible:false,
        i: false,
        isLoad: 0,
        text:'',
        orderInfo:{},
        timer: null,
        timer1:null,
        hide: false,
        user:{},
        type:''
      }
    },
    created(){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(user){
        this.user = user
      }else{
        this.centerDialogVisible = true;
      }
    },
    computed: mapGetters([
      'payStr'
    ]),
    methods: {
      initPay(){
        let payOptions = {
          "userID": "qianke",
          "password": "qianke123",
          "stationID": "qianlidagzh",
          "money": '1'
        };
        return this.$store.dispatch('payWechat', payOptions)
      },
      toMy(){
        this.$router.push({name:'MyTourOrder'})
      },
      //登录确定
      centerDialogVisibleSubmit(){
        this.$router.push({name:'AdminLogin'});
      },
      //选择其他方式支付
      changePay(){
        this.$router.push({name:'AgenciesHome'})
        window.location.reload()
      },
      //返回首页
      goHomePage(){
        this.$router.push({name:'AgenciesHome'})
      }
    },
    mounted(){
      if(this.user.ui_Name){
        let date = new Date();
        this.timer1 = setInterval(()=>{
          leftTimer(this,date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes()+20,0,0).then(()=>{
            clearInterval(this.timer1)
          })
        },1000)
      }
      var qrcode = new QRCode(this.$refs.ewm, {
        width: 200,
        height: 200
      });
      let orderID;
      let orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
      orderInfo.oi_SellMoney = parseInt(orderInfo.oi_SellMoney)
      orderInfo.adultPrice = parseInt(orderInfo.adultPrice)
      orderInfo.childPrice = parseInt(orderInfo.childPrice)
      this.type = orderInfo.type;
      if(orderInfo){
        this.orderInfo = orderInfo;
        if(orderInfo.orderID){
          orderID = orderInfo.orderID
        }else{
          orderID = orderInfo.oi_OrderID
        }
      }

      if (this.i == false) {
        setTimeout(()=>{
          this.initPay().then(data => {
            qrcode.makeCode(data.list);
            if (this.isLoad > 0) {
              return;
            }
            clearInterval(this.timer);
            this.timer = setInterval(() => {
              let options = {
                "userID": "qianke",
                "password": "qianke123",
                "stationID": "qianlidagzh",
                "orderNo": data.backstring
              }
              this.$store.dispatch('getOrderStatus', options)
              .then(resulte => {
                if (this.isLoad > 0) {
                  return;
                }

                if (resulte.list == "SUCCESS") {
                  clearInterval(this.timer);
                  this.isLoad++;
                  //旅行社订单支付
                  switch (this.orderInfo.oi_OrderTypeID){
                    case 0:
                      sessionStorage.setItem('orderTypeID',0)
                      let wOptions = {
                        "loginUserID": "huileyou",
                        "loginUserPass": "123",
                        "operateUserID": this.user.ui_UserCode,
                        "operateUserName": "",
                        "pcName": "",
                        "orderID":  orderInfo.OrderID,
                        "payWay": "微信支付",
                      }
                      this.$store.dispatch('wechatPayWay',wOptions)
                      .then(()=>{
                        //支付成功
                        this.$router.push({name:'MyTourOrder'});
                        clearInterval(this.timer);
//                        let options = {"loginUserID": "huileyou",//授权码
//                          "loginUserPass": "123",//授权密码
//                          "operateUserID": "",//操作员编码
//                          "operateUserName": "",//操作员名称
//                          "pcName": "",//机器码
//                          "userCode": this.user.ui_UserCode,//用户编码
//                          "costMoney": orderInfo.adultPrice,//消费金额  如果是其它类型可留空
//                          "scoreTypeID": 0//0消费积分  1消费次数积分 2分享次数 3评论收录积分
//                        };
//                        this.$store.dispatch('InsertUseScoreDetailInfo',options)
//                        .then(()=>{
//                          //支付成功
//                          this.$router.push({name:'MyTourOrder'});
//                        })
                      },err=>{
                        this.$notify({
                          message: err,
                          type: 'error'
                        });
                      })
                      break;
                    case 2:
                      sessionStorage.setItem('orderTypeID',2)
                      let tOptions = {
                        "loginUserID": "huileyou",
                        "loginUserPass": "123",
                        "operateUserID": this.user.ui_UserCode,
                        "operateUserName": "",
                        "pcName": "",
                        "orderID": orderInfo.OrderID,
                        "payWay": "微信支付",
                      };
                      this.$store.dispatch('ticketWechatPayWay',tOptions)
                      .then(()=>{
                          //支付成功
                        this.$router.push({name:'MyTourOrder'});
                        clearInterval(this.timer);
                      },err=>{
                        this.$notify({
                          message: err,
                          type: 'error'
                        });
                      })
                      break;
                    case 4:
                      sessionStorage.setItem('orderTypeID',4)
                      //酒店
                      let hOptions = {
                        "loginUserID": "huileyou",
                        "loginUserPass": "123",
                        "operateUserID": this.user.ui_UserCode,
                        "operateUserName": "",
                        "pcName": "",
                        "ht_or_OrderID": orderInfo.OrderID,
                        "ht_or_PayWay": "微信支付",
                      };
                      this.$store.dispatch('hotelWechatPayWay',hOptions)
                      .then(()=>{
                        //支付成功
                        this.$router.push({name:'MyTourOrder'});
                        clearInterval(this.timer);
                      },err=>{
                        this.$notify({
                          message: err,
                          type: 'error'
                        });
                      })
                      break
                  }
                }
              })
            }, 300)
          })
        },30)
      }
      this.i = true;
    }
  }
</script>
<style scoped>
  .huiLeYouCashierWrap {
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: #f0f0f0;
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

  .huiLeYouOrderRemind {
    padding:20px;
    background-color: #fff;
  }

  .huiLeYouOrderRemindLeft {
    float: left;
  }

  .huiLeYouOrderRemindLeft strong {
    font:16px/28px "微软雅黑";
    color: #2d2f3b;
    display: block;
  }

  .huiLeYouOrderRemindLeft span {
    display: block;
    font: 15px/25px "微软雅黑";
    color: #6d6467;
  }

  .huiLeYouOrderRemindLeft span em {
    color: #cd656c;
  }

  .huiLeYouOrderRemindRight {
    float: right;
    font:14px/2.5 "微软雅黑";
    color: #66625f;
  }

  .huiLeYouOrderRemindRight span {
    font-size: 20px;
    font-weigth: bold;
    color: #ee5b6e;
  }

  .sweepQRCodeBoxWrap {
    margin-top:20px;
    padding:100px 20px 20px 20px;
    background-color: #fff;
  }

  .sweepQRCodeBox {
    width: 427px;
    height: 324px;
    margin: 0 auto;
    background: url("../assets/img/scanning.png") no-repeat;
  }

  .sweepQRCodeBox .QRCode {
    width:200px;
    height:200px;
    border:1px solid #ccc;
  }

  .sweepQRCodeBoxWrap>a {
    color: #818380;
    font-size:14px;
  }
</style>
