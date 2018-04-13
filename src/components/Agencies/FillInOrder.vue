<template>
  <div>
    <div id="MyOrderWrap">
      <!--头部-->
      <header class="MyOrderWrapHeader">
        <div class="clearfix">
          <div class="MyOrderWrapHeaderLogo">
            <img src="../../assets/img/huileyouLogo.jpg" width="300" height="70">
            <router-link to="HueiLeYouTourHomePage"></router-link>
          </div>
          <!--进度条-->
          <div class="MyOrderWrapHeaderProgressBar">
            <el-steps :space="200" :active="activeValue" finish-status="success">
              <el-step title="填写订单"></el-step>
              <el-step title="订单支付"></el-step>
              <el-step title="预订成功"></el-step>
            </el-steps>
          </div>
        </div>
      </header>
      <!--订单详情-->
      <section id="MyOrderWrapContentWrap">
        <div class="MyOrderWrapContent clearfix">
          <div class="MyOrderWrapContentDetails">
            <!--订单信息-->
            <div class="MyOrderWrapContentDetailsInformtion">
              <h4><i></i>订单信息</h4>
              <div class="MyOrderWrapContentDetailsInformtionContent">
                <h5>{{orderInfo.title}}</h5>
                <ul class="MyOrderWrapContentDetailsInformtionContentList">
                  <li>
                    <strong>出发城市</strong>
                    <span>{{orderInfo.provinceValue}}</span>
                  </li>
                  <li>
                    <strong>出发日期</strong>
                    <span>{{orderInfo.DayValue}}</span>
                  </li>
                  <li>
                    <strong>成人</strong>
                    <span class="money">{{orderInfo.adultNumber}} x ￥{{orderInfo.adultPrice}}</span>
                  </li>
                  <li v-show="orderInfo.childNumber">
                    <strong>儿童</strong>
                    <span class="money">{{orderInfo.childNumber}} x ￥{{orderInfo.childPrice}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--联系人信息-->
            <div class="MyOrderWrapContentDetailsPeopleInformtion">
              <h4><i></i>联系人信息</h4>
              <ul class="MyOrderWrapContentDetailsPeopleInformtionList">
                <li>
                  <span>联系人<i>*</i></span>
                  <input type="text" v-model="connectName">
                </li>
                <li>
                  <span>手机<i>*</i></span><input type="text" v-model="areaCode" placeholder="区号" style="width: 50px">
                  <input type="text" v-model="telePhone">
                </li>
                <li>
                  <span>邮箱<i>*</i></span>
                  <input type="text" v-model="email">
                </li>
                <li>
                  <span>留言</span>
                  <input type="text" placeholder="特殊需求请留言" v-model="leaveMessage">
                </li>
              </ul>
            </div>
            <!--出游人信息-->
            <div class="MyOrderWrapContentDetailsExcursionInformtion">
              <h4><i></i>出游人信息<span>也可以下单后补充</span></h4>
              <ul class="InformtionList" v-for="item,index in orderInfo.adultArr" v-show="isShow">
                <li class="clearfix">
                  <span>第{{item.i+1}}位</span>
                  <div class="InformtionListDetails">
                    <ul class="InformtionListDetailsList">
                      <li>
                        <strong><i>*</i>中文姓名:</strong>
                        <input type="text" placeholder="如:张三" v-model="item['name'+index]">
                      </li>
                      <li>
                        <strong> <i>*</i>证件类型:</strong>
                        <el-select size="mini" placeholder="请选择证件类型"  v-model="orNo">
                          <el-option
                          key="0"
                          label="身份证"
                          value="0">
                          </el-option>
                        </el-select>
                        <input type="text" placeholder="证件号码" v-model="item['certificate'+index]">
                      </li>
                      <li>
                        <strong><i>*</i>性别:</strong>
                        <select  v-model="item['sex'+index]">
                          <option value="0">男</option>
                          <option value="1">女</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <!--<a href="javascript:;" class="InformtionListClear">清空</a>-->
                </li>
              </ul>
              <div class="NoFillInWrap clearfix">
                <a href="javascript:;" class="NoFillIn" @click="NoFillIn">{{text}}</a>
              </div>
            </div>
            <!--提交订单-->
            <div class="MyOrderWrapContentDetailsSubmit clearfix">
              <div class="MyOrderWrapContentDetailsSubmitWrap">
                <span>订单金额:</span>
                <strong><em>￥</em>{{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}</strong>
                <a href="javascript:;" @click="submitOrder">提交订单</a>
              </div>
            </div>
          </div>
          <!--结算信息-->
          <div class="MyOrderWrapContentMoney">
            <div class="MyOrderWrapContentMoneyBorder"></div>
            <div class="MyOrderWrapContentMoneyInformtion">
              <h4>结算信息</h4>
              <ul class="MyOrderWrapContentMoneyList">
                <li class="clearfix">
                  <strong>成人</strong>
                  <span class="money">￥ {{orderInfo.adultPrice}}x{{orderInfo.adultNumber}}</span>
                </li>
                <li class="clearfix" v-show="orderInfo.childNumber">
                  <strong>儿童</strong>
                  <span class="money">￥ {{orderInfo.childPrice}}x{{orderInfo.childNumber}}</span>
                </li>
              </ul>
            </div>
            <div class="MyOrderWrapContentOrderMoney clearfix">
              <strong>订单金额:</strong>
              <span class="money"><em>￥</em>{{orderInfo.adultNumber*orderInfo.adultPrice+orderInfo.childNumber*orderInfo.childPrice}}</span>
              <div class="MyOrderWrapContentOrderMoneyBottomBg"></div>
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
    computed: mapGetters([]),
    data() {
      return {
        activeValue:1,
        sexValue:'0',
        orderInfo:{},
        orNo:'',//身份证
        isShow:true,
        text:'暂不填写',
        connectName:'',
        telePhone:'',
        areaCode:'',
        email:'',
        leaveMessage:'',
        sexs:[
          {
            label:'男',
            value:0
          },
          {
            label:'女',
            value:1
          }
        ]
      }
    },
    created(){
      this.orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
      this.orderInfo.adultArr = []
      for(var i=0;i<this.orderInfo.adultNumber;i++){
        this.orderInfo.adultArr.push({
          i,
          [name+i]:'',
          ['certificate'+i]:'',
          ['sex'+i]:''
        })
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      //提交订单
      submitOrder(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        let obj = this.orderInfo
        let submitOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fullPrice": obj.adultPrice,
          "childPrice":obj.childPrice,
          "fullPerson":obj.adultNumber,
          "childPerson": obj.childNumber,
          "productPriceID": obj.ts_pp_ID,
          "bookUserID": user.ui_UserCode,
          "connectName": this.connectName,//联系人姓名
          "connectAreaCode": this.areaCode,//联系人电话区号
          "connectTelephone": this.telePhone,//联系人电话号码
          "connectEmail": this.email,
          "leaveMessage":this.leaveMessage,
          "personInfo": []
        };
        let arr = this.orderInfo.adultArr;
        for(var i=0;i<arr.length;i++){
          submitOptions.personInfo.push({
            "ts_ot_Name": arr[i]['name'+i],
            "ts_ot_CertType": 1,
            "ts_ot_CertNo":arr[i]['certificate'+i],
            "ts_ot_Sex":arr[i]['sex'+i]
          })
        }
        this.$store.commit('showLoading');
        this.$store.dispatch('submitOrder',submitOptions)
        .then((data)=>{
          this.$store.commit('hideLoading');
          let orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'))
          orderInfo.OrderID = data.ts_to_OrderID;
          orderInfo.oi_OrderTypeID  = 0;
          sessionStorage.setItem('orderInfo',JSON.stringify(orderInfo))
          this.activeValue = 2;
          this.$notify({
            message: data.resultcontent,
            type: 'success'
          });
          this.$router.push({name:'PaymentPlatform'})
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
          this.$router.push({name:'PersonalDataDetails'})
        })
      },
      //添加出游人
      NoFillIn(){
        if(this.isShow){
          this.text='添加出游人';
          this.isShow = false;
        }else{
          this.text='暂不填写';
          this.isShow = true;
        }

      }
    },
  }
</script>
<style scoped>
  input {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  .MyOrderWrapHeader {
    padding: 20px 0;
    width: 100%;
    background-color: #fff;
  }

  .MyOrderWrapHeader > div {
    width: 1190px;
    margin: 0 auto;
  }

  .MyOrderWrapHeaderLogo {
    position: relative;
    float: left;
  }

  .MyOrderWrapHeaderLogo a {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  /*订单进度*/
  .MyOrderWrapHeaderProgressBar {
    float: right;
    width: 500px;
  }

  /*订单详情*/

  #MyOrderWrapContentWrap {
    width: 100%;
    padding-top: 40px;
    background-color: #f1f2f6;
    padding-bottom: 20px;
  }

  .MyOrderWrapContent {
    width: 1190px;
    margin: 0 auto;
  }

  /*订单详情*/
  .MyOrderWrapContentDetails {
    float: left;
    width: 940px;
    border-top: 3px solid #ffb524;
    margin-right: 10px;
  }

  i {
    color: #f60;
  }

  .MyOrderWrapContentDetails h4 {
    font: 16px/40px "微软雅黑";
    color: #2b3537;
    border-bottom: 2px solid #f2f2f2;
    text-indent: 45px;
    position: relative;
  }

  .MyOrderWrapContentDetailsInformtion {
    background-color: #fff;
  }

  .MyOrderWrapContentDetailsInformtion > h4 > i {
    position: absolute;
    top: 7px;
    left: 12px;
    width: 26px;
    height: 24px;
    background: url("../../assets/img/icon.png") no-repeat -346px -273px;
  }

  .MyOrderWrapContentDetailsInformtionContent {
    padding: 22px 45px;
  }

  .MyOrderWrapContentDetailsInformtionContent > h5 {
    font: bold 18px/28px "微软雅黑";
    color: #41b129;
  }

  .MyOrderWrapContentDetailsInformtionContentList {
    font: 14px/40px "微软雅黑";
    color: #363e40;
  }

  .money {
    color: #f60;
  }

  .MyOrderWrapContentDetailsInformtionContentList > li > strong {
    display: inline-block;
    width: 80px;
  }

  /*联系人信息*/
  .MyOrderWrapContentDetailsPeopleInformtion {
    margin-top: 20px;
    background-color: #fff;
  }

  .MyOrderWrapContentDetailsPeopleInformtion > h4 > i {
    position: absolute;
    top: 7px;
    left: 12px;
    width: 24px;
    height: 25px;
    background: url("../../assets/img/icon.png") no-repeat -245px -70px;
  }

  .MyOrderWrapContentDetailsPeopleInformtionList {
    font: 14px/40px "微软雅黑";
    color: #363e40;
    padding: 22px 45px;
  }

  .MyOrderWrapContentDetailsPeopleInformtionList > li > span {
    display: inline-block;
    width: 80px;
  }

  .MyOrderWrapContentDetailsPeopleInformtionList > li > input {
    height: 24px;
    width: 200px;
    font: 14px/24px "微软雅黑";
    border: 1px solid #ccc;
    padding: 0 5px;
  }

  /*出游人信息*/
  .MyOrderWrapContentDetailsExcursionInformtion {
    margin-top: 20px;
    background-color: #fff;
  }

  .MyOrderWrapContentDetailsExcursionInformtion > h4 > i {
    position: absolute;
    top: 7px;
    left: 12px;
    width: 24px;
    height: 25px;
    background: url("../../assets/img/icon.png") no-repeat -221px -70px;
  }

  .MyOrderWrapContentDetailsExcursionInformtion > h4 > span {
    font: 12px/40px "微软雅黑";
    color: #9c9c9c;
    margin-left: 30px;

  }

  .InformtionList {
  }

  .InformtionList > li {
    width: 858px;
    border: 1px solid #f4f4f6;
    margin: 20px auto 0;
    padding: 20px 10px;
  }

  .InformtionList > li > span {
    font: 12px/28px "微软雅黑";
    padding: 0 12px;
    border: 1px solid #999ca1;
    color: #999ca1;
    float: left;
  }

  .InformtionListDetails {
    float: left;
  }

  .InformtionListDetailsList > li {
    margin-bottom: 10px;
  }

  .InformtionListDetailsList > li > input {
    width: 200px;
    border: 1px solid #dfdfdf;
    padding: 0 5px;
    font: 12px/24px "微软雅黑";
  }

  .InformtionListDetailsList > li > strong {
    text-align: right;
    display: inline-block;
    width: 90px;
    color: #a0a59f;
  }

  .InformtionListClear {
    float: right;
    color: #9a999f;
    font-size: 15px;
    line-height: 30px;
  }

  .NoFillInWrap {
    padding: 25px 0;
    font: 12px/30px "微软雅黑";
  }

  .NoFillIn {
    float: right;
    margin-right: 80px;
    padding: 0 30px;
    border: 1px solid #ccc;
    color: #58656e;
  }

  /*提交订单*/
  .MyOrderWrapContentDetailsSubmit {
    margin-top: 20px;
    background-color: #fefee6;
  }

  .MyOrderWrapContentDetailsSubmitWrap {
    margin-right: 65px;
    float: right;
  }

  .MyOrderWrapContentDetailsSubmitWrap > span {
    float: left;
    font: 15px/50px "微软雅黑";
    margin-top: 20px;
  }

  .MyOrderWrapContentDetailsSubmitWrap > strong {
    float: left;
    font: bold 22px/60px "微软雅黑";
    margin-top: 12px;
    color: #f60;
    margin-left: 20px;
  }

  .MyOrderWrapContentDetailsSubmitWrap > strong > em {
    font-size: 17px;
  }

  .MyOrderWrapContentDetailsSubmitWrap > a {
    float: left;
    font: 16px/40px "微软雅黑";
    color: #fff;
    background-color: #f60;
    padding: 0 40px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 40px;
  }

  /*订单总金额*/
  .MyOrderWrapContentMoney {
    width: 240px;
    float: left;
    background-color: #fff;
  }

  .MyOrderWrapContentMoneyBorder {
    width: 246px;
    height: 9px;
    background: url("../../assets/img/icon.png") no-repeat 0 -403px;
    margin-left: -3px;
  }

  .MyOrderWrapContentMoneyInformtion {
    padding: 0 15px;
    font: 14px/40px "微软雅黑";
    border-bottom: 1px solid #dbb06b;
  }

  .MyOrderWrapContentMoneyInformtion > h4 {
    font-weight: bold;
  }

  .MyOrderWrapContentMoneyList > li > span {
    float: right;
  }

  .MyOrderWrapContentMoneyList > li > strong {
    float: left;
  }

  .MyOrderWrapContentOrderMoney {
    position: relative;
    background-color: #fefee6;
    padding: 0 10px;
    font: bold 16px/70px "微软雅黑";
  }

  .MyOrderWrapContentOrderMoney > strong {
    float: left;

  }

  .MyOrderWrapContentOrderMoney > span {
    float: right;

  }

  .MyOrderWrapContentOrderMoney > span > em {
    font-size: 12px;
  }

  .MyOrderWrapContentOrderMoneyBottomBg {
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 240px;
    height: 8px;
    background: url("../../assets/img/icon.png") no-repeat -129px -1px;
  }

</style>
