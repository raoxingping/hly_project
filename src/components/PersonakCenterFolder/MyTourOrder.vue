<template>
  <div>
    <div class="MyOrderWrapContent">
      <ul class="MyOrderWrapContentNav clearfix">
        <li><a href="javascript:;">全部订单</a><span></span></li>
        <!--<li><a href="javascript:;">待付款(0)</a><span></span></li>-->
        <!--<li><a href="javascript:;">待出行/收货(0)</a><span></span></li>-->
        <!--<li><a href="javascript:;">待点评(0)</a><span></span></li>-->
      </ul>
      <div class="AllOrderContent">
        <!--订单导航条-->
        <div class="informationBar">
          <dl class="informationBarList clearfix">
            <dt>产品信息</dt>
            <dd>
              <el-select v-model="orderType" placeholder="请选择订单" size="small" style="width: 120px" @change="changeOrderType">
                <el-option key="" label="全部订单" value=""></el-option>
                <el-option key="0" label="旅行社订单" value="0"></el-option>
                <el-option key="1" label="车票订单" value="1"></el-option>
                <el-option key="2" label="门票订单" value="2"></el-option>
                <el-option key="3" label="美食订单" value="3"></el-option>
                <el-option key="4" label="酒店订单" value="4"></el-option>
              </el-select>
            </dd>
            <dd>数量</dd>
            <dd>时间</dd>
            <dd>订单金额</dd>
            <dd>支付状态</dd>
            <dd>出票状态</dd>
            <dd>操作</dd>
          </dl>
        </div>
        <!--所有订单内容-->
        <ul class="AllOrderInformtionContent" v-loading="isLoading"  v-if="myTourOrderList.length">
          <li v-for="item in myTourOrderList">
            <div class="AllOrderInformtionContentAboutTime clearfix">
              <strong>下单时间: {{item.oi_CreateTime | getUseTime}}</strong>
              <span>订单号:  {{item.oi_OrderID}}</span>
            </div>
            <dl class="AllOrderInformtionContentAboutDetails clearfix">
              <dt style="overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap">{{item.oi_OrderName?item.oi_OrderName:"未知"}}</dt>
              <dd class="ticketType">{{item.oi_OrderTypeID | getOrderType}}</dd>
              <dd class="ticketSize">{{item.oi_Number}}张</dd>
              <dd class="ticketTime">{{item.oi_UseTime | getUseTime}}</dd>
              <dd class="money">￥{{item.oi_SellMoney?item.oi_SellMoney:0}}</dd>
              <dd class="ticketState">
                <span>{{item.oi_OrderStatus | getTicketStatus}}</span>
                <a href="javascript:;" @click="orderDetail(item)">订单详情</a>
              </dd>
              <dd class="outticket">{{item.oi_OutStatus | getOutStatus}}</dd>
              <dd v-if="item.oi_OrderStatus!=0"><el-button size="small" type="danger" @click="deleteOrder(item)">删除</el-button></dd>
              <dd class="ticketDelete" v-else><el-button size="small" type="primary" @click="goPay(item)">去支付</el-button></dd>
            </dl>
          </li>
        </ul>
        <ul  class="AllOrderInformtionContent" v-else><li style="text-align: center">暂无数据</li></ul>
        <!--分页-->
        <div class="block" style="float: right;padding-bottom: 200px">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="4"
            layout="total, prev, pager, next"
            :total="total"
            v-show="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {

    data() {
      return {
        total:0,
        isLoading:false,
        orderType:'',//订单类型
      }
    },
    computed: mapGetters([
      'myTourOrderList'
    ]),
    created(){
      let orderTypeID = sessionStorage.getItem('orderTypeID')
      this.orderType = orderTypeID
      this.initData(1,orderTypeID)
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(num,this.orderType)
      },
      //选中订单类型
      changeOrderType(){
        this.initData(1,this.orderType)
      },
      initData(page,orderType) {
        let userID = JSON.parse(sessionStorage.getItem('user')).ui_UserCode
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          orderType:orderType?orderType:'',
          "huiuserid": userID,
          isDelete:0,
          "page": page?page:1,
          "rows": "4"
        };
        this.isLoading = true;
        this.$store.dispatch('initMyTourOrder',options)
        .then(total=>{
          this.total = total;
          this.isLoading = false;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      search() {
        this.initData(1)
      },
      //去支付
      goPay(item){
        item.OrderID = item.oi_OrderID
        sessionStorage.setItem('orderInfo',JSON.stringify(item))
        this.$router.push({name:'PaymentPlatform'})
      },
      //删除订单
      deleteOrder(item){
//        switch (item.oi_OrderTypeID){
//          case 0:
            //旅行社
            let deleteOptions = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "orderID": item.oi_OrderID
            };
            this.$store.dispatch('DeleteOrder',deleteOptions)
            .then((suc)=>{
              this.$notify({
                message: suc,
                type: 'success'
              });
              this.initData(1,0)
            },err=>{
              this.$notify({
                message: err,
                type: 'error'
              });
            });
//            break;
//          case 2:
//            //门票
//            let tOptions = {
//              "loginUserID": "huileyou",
//              "loginUserPass": "123",
//              "operateUserID": "",
//              "operateUserName": "",
//              "orderID": item.oi_OrderID
//            };
//            this.$store.dispatch('DeleteTicketOrder',tOptions)
//            .then(()=>{
//              this.initData(1,2)
//            },err=>{
//              this.$notify({
//                message: err,
//                type: 'error'
//              });
//            });
//            break;
//        }

      },
      //订单详情
      orderDetail(item){
        switch (item.oi_OrderTypeID){
          case 0:
            sessionStorage.setItem('orderTypeID',0)
            //旅行社
            let orderDeatilOptions = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "orderID":item.oi_OrderID,
              "page": 1,
              "rows": 10
            };
            this.$store.dispatch('initOrderDetail',orderDeatilOptions)
            .then((obj)=>{
              let newObj = {isOff:false};
              if( obj.ts_to_PayState==1|| obj.ts_to_PayState==2|| obj.ts_to_OutStatus==1){
                newObj.isOff=  true
              }else{
                newObj.isOff =  false;
              }
              sessionStorage.setItem('payStatusObj',JSON.stringify(newObj));
              this.$router.push({name:'MyOrderDetails'})
            },err=>{
              this.$notify({
                message: err,
                type: 'error'
              });
            })
            break;
          case 2:
            sessionStorage.setItem('orderTypeID',2)
            //门票
            let ticketOptions = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              // "userID": "18111729770",//用户编码
              "orderID": item.oi_OrderID,//订单编号
              "page": 1,
              "rows": 10
            };
            this.$store.dispatch('initTicketOrderDetail',ticketOptions)
            .then((obj)=>{
              let newObj = {isOff:false};
              if( obj.tm_or_PayState==1|| obj.tm_or_PayState==2|| obj.tm_or_PayState==1){
                newObj.isOff=  true
              }else{
                newObj.isOff =  false;
              }
              sessionStorage.setItem('payStatusObj',JSON.stringify(newObj));
              this.$router.push({name:'TicketOrderDetails'})
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
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "ht_or_OrderID": item.oi_OrderID, //订单Id
            };
            this.$store.dispatch('initHotelOrderDetail',hOptions)
            .then((obj)=>{
              let newObj = {isOff:false};
              if( obj.ht_or_PayState==1|| obj.ht_or_PayState==2|| obj.ht_or_PayState==1){
                newObj.isOff=  true
              }else{
                newObj.isOff =  false;
              }
              sessionStorage.setItem('payStatusObj',JSON.stringify(newObj));
              this.$router.push({name:'HotelOrderDetails'})
            },err=>{
              this.$notify({
                message: err,
                type: 'error'
              });
            })
            break;
        }

      }
    },
    mounted(){
    }
  }
</script>
<style scoped>
  .MyOrderWrapContent {
    width: 990px;
  }

  .MyOrderWrapContentNav {
    font: bold 16px/50px "微软雅黑";
    border: 1px solid #eaeaea;
    background-color: #fff;
  }

  .MyOrderWrapContentNav > li {
    float: left;
  }

  .MyOrderWrapContentNav > li > a {
    float: left;
    padding: 0 30px;
    color: #3b2d22;
  }

  .MyOrderWrapContentNav span {
    float: left;
    width: 1px;
    height: 24px;
    background-color: #ddd;
    margin-top: 14px;
  }

  .informationBarList > * {
    float: left;
  }

  .informationBarList {
    font: 14px/47px "微软雅黑";
    background-color: #eee;
    color: #696969;
  }

  .informationBarList dt {
    width: 140px;
    text-indent: 25px;
  }

  .informationBarList dd {
    margin: 0 34px;
  }

  .AllOrderInformtionContent {
    padding: 0 20px;
    background-color: #fff;
    font: 14px/54px "微软雅黑";
  }

  .AllOrderInformtionContent > li {
    padding: 20px 0;
    box-shadow: 0 -1px #ededed;
  }

  .AllOrderInformtionContentAboutTime {
    color: #6e6868;
  }

  .AllOrderInformtionContentAboutTime > * {
    float: left;
  }

  .AllOrderInformtionContentAboutTime > span {
    margin-left: 45px;
  }

  .AllOrderInformtionContentAboutDetails > * {
    float: left;
  }

  .AllOrderInformtionContentAboutDetails > dt {
    width: 200px;
    text-indent: 50px;
  }

  .AllOrderInformtionContentAboutDetails > .ticketType {
    width: 120px;
    text-align: center;
  }

  .AllOrderInformtionContentAboutDetails > .ticketSize {
    width: 100px;
    text-indent: 45px;
  }

  .AllOrderInformtionContentAboutDetails > .money {
    width: 85px;
    text-align: center;
  }

  .AllOrderInformtionContentAboutDetails > .ticketState {
    width: 60px;
    text-align: center;
    font: 14px/22px "微软雅黑";
    margin: 0 35px;
  }

  .AllOrderInformtionContentAboutDetails > .ticketState > a {
    color: #40a85d;
  }

  .AllOrderInformtionContentAboutDetails > .outticket {
    width: 60px;
    text-align: center;
    font: 12px/20px "微软雅黑";
    margin: 15px 30px 0 10px;
  }

  /*.AllOrderInformtionContentAboutDetails > .ticketDelete > a {*/
    /*display: block;*/
    /*font: 12px/2 "微软雅黑";*/
    /*color: #646466;*/
    /*padding: 0 20px;*/
    /*border: 1px solid #cdcdcd;*/
    /*margin-top: 15px;*/
  /*}*/


</style>
