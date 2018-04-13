<template>
  <div>
    <!--头部-->
    <div class="hearderWrap">
      <div class="hearderContent clearfix">
        <img src="../../assets/img/huileyouLogo.jpg" width="230" height="70" @click="goHomePage">
        <!--右边步骤条-->
        <div class="stepBox"></div>
      </div>
    </div>
    <!--contentSection-->
    <section>
      <div class="contentSectionWrap">
        <div class="contentTitle clearfix">
          <strong>{{hotelOrderReservations.hotelName}}</strong>
          <span><i></i><em>惠乐游保障:</em> 承诺到店无房赔付首晚房费，请放心预订</span>
        </div>
        <div class="orderInfromation clearfix">
          <div class="myInfromation">
            <p class="promptBar">您已经选择到了{{hotelOrderReservations.hotelName}}里最优惠的客房</p>
            <!--预定信息-->
            <div class="reservationInformation">
              <strong class="smallTitle "><i></i>预定信息</strong>
              <div class="reservationContent">
                <!--入离时间-->
                <div class="fromTheTime clearfix">
                  <span>入离时间：</span>
                  <div class="block">
                    <el-date-picker
                      v-model="value1"
                      type="daterange"
                      @change="changeDate"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd"
                    >
                    </el-date-picker>
                  </div>
                  <!--<span>至</span>-->
                  <!--<div class="block">-->
                    <!--<el-date-picker-->
                      <!--v-model="value1"-->
                      <!--type="datetime"-->
                      <!--size="mini"-->
                      <!--placeholder="选择日期">-->
                    <!--</el-date-picker>-->
                  <!--</div>-->
                  <!--<span>共1晚</span>-->
                </div>
                <!--预定间数-->
                <div class="reservationNum clearfix">
                  <span>预定间数:</span>
                  <el-input-number v-model="num1" @change="handleChange" :min="0" :max="newNum" size="mini"
                                   label="描述文字"></el-input-number>
                  <span class="surplus">剩余<em>{{num}}</em>间</span>
                  <strong>￥{{parseInt(hotelOrderReservations.ht_rpp_ProductPrice)}}</strong>
                </div>
              </div>
            </div>
            <!--个人信息-->
            <div class="personalInformation">
              <strong class="smallTitle"><i></i>个人信息</strong>
              <div>
                <ul class="theGuestInformation">
                  <li v-for="item,index in arr">
                    <span><i class="improtent">*</i>住客姓名{{index+1}}：</span>
                    <el-input :placeholder="'输入住客姓名'+(index+1)" size="mini" style="width: 200px" v-model="item.v"></el-input>
                  </li>
                </ul>
                <div class="userTelephoneNumber"><span><i class="improtent">*</i>手机号码： </span>
                  <el-input placeholder="输入手机号码" size="mini" style="width: 200px" v-model="phone"></el-input>
                </div>
                <div class="userEMeil"><span>电子邮箱： </span>
                  <el-input placeholder="输入电子邮箱" size="mini" style="width: 200px" v-model="email"></el-input>
                </div>
              </div>
            </div>
            <!--预订规则-->
            <div class="reservationsRules">
              <strong class="smallTitle"><i></i>预订规则</strong>
              <p><strong>不可取消</strong>订单提交需支付全部房费，如订单不确认将全额退款至您的付款账户。订单确认后不可取消修改，如未入住或取消修改及提前离店，我们将收取您¥812支付酒店</p>
            </div>
            <!--到店须知-->
            <div class="noticeToTheStore">
              <strong class="smallTitle"><i></i>到店须知</strong>
              <p>{{dateStr}} 订单一经确认，不可更改或添加入住人姓名。 城市重要通知:未满18周岁的小孩需有成人陪同才可入住。</p>
            </div>
            <!--提交订单-->
            <div class="submitOrder">
              <el-button type="success" @click="submitOrder">提交订单</el-button>
            </div>
          </div>
          <!--订单信息-->
          <div class="hotelInfromation">
            <!--标题和地址-->
            <div class="title">
              <strong>{{hotelOrderReservations.hotelName}}</strong>
              <span>地址：{{hotelOrderReservations.hotelAddress}}</span>
            </div>
            <!--房间配置-->
            <dl class="roomToConfigure">
              <dt>{{hotelOrderReservations.ht_rpp_Name}}</dt>
              <dd><strong>床型： </strong>{{hotelOrderReservations.RoomInfo.ht_bt_BedType}}</dd>
              <dd><strong>楼层： </strong>{{hotelOrderReservations.RoomInfo.ht_bt_Level}}</dd>
              <dd><strong>面积： </strong>{{hotelOrderReservations.RoomInfo.ht_bt_Area}}平米</dd>
              <dd><strong>最多入住人数： </strong>{{hotelOrderReservations.RoomInfo.ht_bt_MostIn}}</dd>
              <dd><strong>宽带： </strong>{{hotelOrderReservations.ht_rpp_WafiType}}</dd>
              <!--<dd><strong>窗户： </strong>有窗</dd>-->
              <dd><strong>支付： </strong>惠乐游将预收全部费用</dd>
              <dd><strong>加床： </strong>请提前咨询酒店前台</dd>
            </dl>
            <!--订单金额确认-->
            <div class="orderPrice">
              <strong>网上支付</strong>
              <div class="priceDetils clearfix">
                <strong>房费</strong>
                <span>￥{{parseInt(hotelOrderReservations.ht_rpp_ProductPrice)}}</span>
              </div>
              <div class="allMoney clearfix">
                <strong>总计</strong>
                <span>￥{{parseInt(hotelOrderReservations.ht_rpp_ProductPrice*num1)}}</span>
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

  export default {
    computed: mapGetters([]),
    data() {
      return {
        pickerOptions1:{
//          disabledDate(time) {
//            return time.getTime() <= Date.now();
//          },
        },
        phone:'',
        email:'',
        num:0,//房间数
        newNum:0,
        value1: '',
        num1: 1,
        checked: true,
        user:{},
        dateStr:'',
        hotelOrderReservations:{},
        arr:[]
      }
    },
    created(){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(!user){
        this.$router.push({name:'AgenciesHome'})
        return
      }
      this.user = user;
      this.hotelOrderReservations = JSON.parse(sessionStorage.getItem('hotelOrderReservations'));
    },
    methods: {
      //提交订单
      submitOrder(){
        if(!this.arr.length){
          this.$notify({
            message: '姓名不能为空!',
            type: 'error'
          });
          return
        }
        this.$store.commit('showLoading')
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ht_or_OrderID": "",//订单ID
            "ht_or_RoomProductID": this.hotelOrderReservations.ht_rpp_ID,//房间产品ID
            "ht_or_UserID": this.user.ui_UserCode,//用户编码
            "ht_or_UserName": this.user.ui_Name,//用户名称
            "ht_or_TouristTraderID": this.hotelOrderReservations.sm_ai_AgentInfoID,//商户编码
            "ht_or_TouristTraderName": "",//商户名称
            "ht_or_TicketCount": this.num1,//总间数
            "ht_or_SumPrice": parseInt(this.hotelOrderReservations.ht_rpp_ProductPrice*this.num1),//总金额
            "ht_or_SumService": "0",//总的网售手续费
            "ht_or_FullPrice": parseInt(this.hotelOrderReservations.ht_rpp_ProductPrice),//价格
            "ht_or_InDate": this.value1[0],//入住日期
            "ht_or_OutDate": this.value1[1],//离店日期
            "ht_or_PayWay": "",//支付方式
            "ts_to_Remark": "",//备注
            "ht_od_Email":this.email,
            "ht_od_Phone":this.phone
          },
          "personInfo": []
        }
        for(var i=0;i<this.arr.length;i++){
          options.personInfo.push({
            "ht_od_UserName": this.arr[i].v,//用户名称
          })
        }

        this.$store.dispatch('initHotelMakeOrder',options)
        .then(data=>{
          this.$store.commit('hideLoading');
          let newData = data;
          newData.title = this.hotelOrderReservations.hotelName;
          newData.orderID = newData.ht_or_OrderID;
          newData.adultNumber = this.num1;
          newData.adultPrice = this.hotelOrderReservations.ht_rpp_ProductPrice;
          newData.childNumber = 0;
          newData.childPrice = 0;
          newData.oi_OrderName = this.hotelOrderReservations.hotelName;
          newData.OrderID = newData.ht_or_OrderID;
          newData.oi_OrderTypeID = 4;
          newData.oi_SellMoney = this.hotelOrderReservations.ht_rpp_ProductPrice*this.num1;
          sessionStorage.setItem('orderInfo',JSON.stringify(newData))
          this.$router.push({name:'PaymentPlatform'})
        },err=>{
          this.$store.commit('hideLoading');
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //选中日期
      changeDate(){
        this.dateStr = '';
        if(this.value1){
          for(var i=0;i<this.value1.length;i++){
            if(i==0){
              this.dateStr=this.value1[i]+'~'+this.dateStr
            }else{
              this.dateStr=this.dateStr+this.value1[i]
            }
          }
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "ht_rpp_ID": this.hotelOrderReservations.ht_rpp_ID,//房间产品ID
            "inDate": this.value1[0],//入住日期
            "outDate": this.value1[1],//离店日期
          };
          this.$store.dispatch('initRoomNumber',options)
          .then(num=>{
            this.newNum = num;
            this.num = num
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        }
      },
      handleChange(value) {
        this.num = this.newNum-value;
        this.arr = [];
        for(var i=0;i<value;i++){
          this.arr.push({
            v:''
          })
        }
      },
      goHomePage() {
        this.$router.push({name: 'HotelHomePage'})
      }
    },
  }
</script>
<style scoped>
  /*header*/
  .hearderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .hearderContent {
    width: 990px;
    margin: 0 auto;
  }

  .hearderContent > img {
    float: left;
  }

  .hearderContent > img:hover {
    cursor: pointer;
  }

  .hearderContent > .stepBox {
    float: right;
  }

  /*contentSection*/

  section {
    width: 100%;
    background-color: #f0f4fb;
  }

  .contentSectionWrap {
    width: 990px;
    margin: 0 auto;
  }

  /*contentTitle*/

  .contentTitle > strong {
    float: left;
    color: #2DBB55;
    font: bold 18px/70px "微软雅黑";
    max-width: 630px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contentTitle > span {
    float: right;
    font: 14px/70px "微软雅黑";
    color: #999;
  }

  .contentTitle > span > em {
    font-weight: bold;
  }

  .contentTitle > span > i {
    display: inline-block;
    width: 14px;
    height: 16px;
    background: url("../../assets/img/tips.png") no-repeat -49px -16px;
    vertical-align: middle;
    margin-right: 5px;
  }

  /*Information*/

  .myInfromation {
    float: left;
    width: 710px;
    padding-bottom: 40px;
  }

  .promptBar {
    font: 15px/40px "微软雅黑";
    text-align: center;
    color: #2a820a;
    background-color: #d3efd0;
    border-bottom: 4px solid #b2dbb5;
    padding: 0 10px;
  }

  .reservationInformation {
    margin-top: 10px;
    background-color: #fff;
  }

  .smallTitle {
    display: block;
    font: bold 16px/38px "微软雅黑";
    padding-left: 15px;
    border-bottom: 1px solid #ccc;
  }

  .smallTitle > i {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url("../../assets/img/tips.png");
    vertical-align: middle;
    background-repeat: no-repeat;
  }

  .reservationContent {
    padding: 0 40px;
  }

  .fromTheTime,
  .reservationNum {
    padding: 10px 0;
  }

  .fromTheTime > * {
    float: left;
    font: 14px/1.5 "微软雅黑";
  }

  .fromTheTime > span {
    margin: 0 10px;
    color: #666;
  }

  .reservationNum > * {
    float: left;
    margin: 0 10px;
  }

  .reservationNum > span {
    font: 14px/1.5 "微软雅黑";
  }

  .reservationNum > span > em {
    color: #f60;
  }

  .reservationNum > strong {
    font: bold 14px/1.5 "微软雅黑";
    color: #f60;
  }

  /*个人信息*/

  .personalInformation {
    margin-top: 10px;
    background-color: #fff;
  }

  .personalInformation > strong > i {
    background-position: 0px -24px;
  }

  .personalInformation > div {
    padding: 10px 40px;
  }

  .theGuestInformation > li {
    margin: 10px 0;
  }

  .improtent {
    color: #f60;
  }

  .personalInformation span {
    color: #666;
  }

  .personalInformation > div > div {
    padding: 10px 0;
  }

  /*预定规则*/

  .reservationsRules {
    margin-top: 10px;
    background-color: #fff;
  }

  .reservationsRules > strong > i {
    background-position: -24px 0px;
  }

  .reservationsRules > p {
    font: 14px/1.5 "微软雅黑";
    color: #666;
    padding: 20px 64px 20px 44px;
  }

  .reservationsRules > p > strong {
    background-color: #fb6649;
    color: #fff;
    padding: 0 5px;
    margin-right: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  /*到店须知*/

  .noticeToTheStore {
    margin-top: 10px;
    background-color: #fff;
  }

  .noticeToTheStore > strong > i {
    background: url(../../assets/img/notice.png) no-repeat 0 0;
  }

  .noticeToTheStore > p {
    padding:20px 64px 20px 44px;
    font: 14px/1.5 "微软雅黑";
    color: #666;
  }

  /*提交订单*/

  .submitOrder {
    padding: 20px;
    background-color: #fff;
    margin-top:10px;
    text-align: right;
  }


  /*订单信息*/
  .hotelInfromation {
    float: right;
    width: 270px;
    background-color: #fff;
  }

  .hotelInfromation > .title {
    font: 14px/1.5 "微软雅黑";
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .hotelInfromation > .title > strong {
    font-weight: bold;
    display: block;
    color: #2dbb55;
  }

  .hotelInfromation > .title > span {
    color: #9e9f9f;
  }

  .roomToConfigure {
    padding: 5px 10px;
  }

  .roomToConfigure > dt {
    font: bold 15px/30px "微软雅黑";
    margin-bottom: 10px;
    color: #333333;
  }

  .roomToConfigure > dd {
    font: 14px/1.5 "微软雅黑";
    padding: 5px 0;
    color: #645858;
  }

  .roomToConfigure > dd >strong {
    font-weight: bold;
  }

  .orderPrice {
    border-top: 1px solid #f60;
    background-color: #fefee6;
    padding: 10px;
  }

  .orderPrice > strong {
    font: bold 18px/27px "微软雅黑";
    color: #000;
  }

  .orderPrice .priceDetils {
    border-bottom: 1px solid #eddbb3;
    font: 14px/2 "微软雅黑";
    padding: 0 10px;
  }

  .orderPrice .priceDetils > strong {
    float: left;
    color: #999999;
  }

  .orderPrice .priceDetils > span {
    float: right;
    color: #ff6600;
  }

  .orderPrice .allMoney {
    padding: 20px 10px 0;
    font: bold 18px/27px "微软雅黑";
  }

  .orderPrice .allMoney > strong {
    float: left;
    color: #000;
  }

  .orderPrice .allMoney > span {
    float: right;
    color: #f70;
  }



</style>
