<template>
  <div>

    <section class="commentTop">
      <!--Top导航-->
      <div class="operationNav">
        <div class="operationNavContent clearfix">
          <ul class="loginList">
            <li v-show="isLogin">
              <router-link to="/adminLogin">登录</router-link>
            </li>
            <li>
              <router-link to="/Register">游客注册</router-link>
            </li>
            <li>
              <router-link to="/MerchantRegister">供应商注册</router-link>
            </li>
            <li>
              <router-link to="/agents">代理商注册</router-link>
            </li>
            <li v-show="isLoginShow">
              <a href="javascript:;" style="color: #f60;"
                 @click="toPersonalCenter">欢迎您:{{loginName ? loginName : ""}}</a>
            </li>
            <li class="AdminLoginList">
              <a href="javascript:;">管理员登录</a>
              <ul>
                <!--<li><a href="http://hly.1000da.com.cn/user/#/" target="view_window">惠乐游后台管理系统</a></li>-->
                <li><a href="http://tuniu.1000da.com.cn/supplier" target="view_window">供应商管理系统</a></li>
                <li><a href="http://tuniu.1000da.com.cn/agents" target="view_window">代理商管理系统</a></li>
                <li><a href="http://tuniu.1000da.com.cn/admin" target="view_window">惠乐游管理系统</a></li>
              </ul>
            </li>
            <li v-show="showQuit">
              <a href="javascript:;" @click="Quit">退出</a>
            </li>
          </ul>
        </div>
      </div>
      <!--TitleLogoAndQuery-->
      <div class="logoAndQuery">
        <div class="logoAndQueryContent clearfix">
          <!--图标-->
          <div class="websiteLogo">
            <a href="javascript:;">
              <img src="../../assets/img/huileyouLogo.jpg" alt="" width="230" height="80">
            </a>
          </div>
          <!--搜索框-->
          <div class="queryBox">
            <div class="queryAllType">
              <a href="javascript:;">{{smSiName}}<i></i></a>
              <ul class="queryAllTypeList">
                <li v-for="item,index in navList" @click="changeTaualType(item)"><a
                  href="javascript:;">{{item.sm_si_Name}}</a></li>
              </ul>
            </div>
            <div class="queryTextInput">
              <input type="text" placeholder="马尔代夫">
              <div class="localRecommend">
                <a href="javascript:;">日本</a>
                <a href="javascript:;">三亚</a>
                <a href="javascript:;">泰国</a>
              </div>
            </div>
            <div class="queryButton">
              <button></button>
            </div>
          </div>
          <!--客服-->
          <div class="customerService clearfix">
            <a href="javascript:;">
              欢迎使用
              <span>在线客服</span>
            </a>
            <span>
              24h客户服务电话
              <strong>4007-999-999</strong>
            </span>
            <em></em>
          </div>
        </div>
      </div>
      <!--主导航-->
      <div class="mainNavWrap">
        <nav class="mainNavWrapContent">
          <ul class="mainNavWrapContentList  clearfix" ref="mainNavWrapContentList">
            <li v-for="item,index in mainNavWrapContentList" @click="clickMainNavWrapContent(index)"
                :class="{active:index==n}">
              <router-link :to="item.to">{{item.name}}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <div class="FixedComment" v-show="showFixedComment">

      <ul class="FixedCommentTop">

        <li class="App">

          <a href="javascript:;"></a>

          <img src="../../assets/img/APPImage.png" width="274" height="310">

        </li>

        <li class="goLogin">

          <a href="javascript:;"></a>
          <router-link to="/adminLogin">前往登录</router-link>
        </li>

        <li class="myFocusOn">

          <a href="javascript:;"></a>

          <router-link to="/personalCenter/myCollection">我的关注</router-link>

        </li>

        <li class="myOrder">

          <a href="javascript:;"></a>
          <router-link to="/personalCenter/myTourOrder">我的订单</router-link>

        </li>

        <li class="myGiftCertificates">

          <a href="javascript:;"></a>

          <a href="javascript:;">我的礼券</a>

        </li>

        <li class="messageToRemind">

          <a href="javascript:;"></a>

          <a href="javascript:;">消息提醒</a>

        </li>

        <li class="onlineCustomerService">

          <a href="javascript:;"></a>

          <a href="javascript:;">在线客服</a>

        </li>

      </ul>

      <ul class="FixedCommentBottom">

        <li class="askTicketSurvey">

          <a href="javascript:;"></a>

          <a href="javascript:;">问券调查</a>

        </li>

        <li class="opinionSuggestion">

          <a href="javascript:;"></a>

          <a href="javascript:;">意见建议</a>

        </li>

        <li class="goTop">

          <a href="javascript:;"></a>

          <a href="javascript:;">返回顶部</a>

        </li>

      </ul>

    </div>

    <router-view name="User"></router-view>
    <!--底部-->
    <footer>
      <!--服务类型-->
      <div class="serviceType clearfix">
        <!--去旅游-->
        <dl class="goTourism">
          <dt><i></i>去旅游</dt>
          <dd v-for="item,index in goTourismList"><a href="javascript:;">{{item}}</a></dd>
        </dl>
        <!--寻优惠-->
        <dl class="seekPreferentialTreatment">
          <dt><i></i>寻优惠</dt>
          <dd><a href="javascript:;">特卖</a></dd>
          <dd><a href="javascript:;">订酒店 返现金</a></dd>
          <dd><a href="javascript:;">积分商城</a></dd>
          <dd><a href="javascript:;">银行特惠游</a></dd>
        </dl>
        <!--看攻略-->
        <dl class="lookAtTheOffensive">
          <dt><i></i>看攻略</dt>
          <dd><a href="javascript:;">攻略</a></dd>
          <dd><a href="javascript:;">惠乐游风向标</a></dd>
          <dd><a href="javascript:;">游记</a></dd>
          <dd><a href="javascript:;">达人玩法</a></dd>
        </dl>
        <!--查服务-->
        <dl class="lookupService">
          <dt><i></i>查服务</dt>
          <dd><a href="javascript:;">帮助中心</a></dd>
          <dd><a href="javascript:;">会员俱乐部</a></dd>
          <dd><a href="javascript:;">阳光保障</a></dd>
          <dd><a href="javascript:;">火车时刻表</a></dd>
          <dd><a href="javascript:;">航班查询</a></dd>
        </dl>
        <!--惠乐游APP-->
        <div class="huiLeYouApp">
          <strong><i></i>惠乐游APP</strong>
          <span>扫描下载惠乐游APP</span>
          <img src="../../assets/img/huiLeYouAppQRCode.png" width="80" height="80">
        </div>
      </div>
      <!--关于服务-->
      <div class="aboutService">
        <a href="javascript:;">
          <span>
            <em>客户服务电话（免长途费）</em>
            <em>4007-999-999</em>
          </span>
        </a>
      </div>
      <!--底部内容-->
      <div class="footerContent">
        <!--图片列表-->
        <div class="footerImageList clearfix">
          <a href="javascript:;"><img src="../../assets/img/tn_footer_042.jpg" width="238" height="58"></a>
          <a href="javascript:;"><img src="../../assets/img/tn_footer_06.jpg" width="238" height="58"></a>
          <a href="javascript:;"><img src="../../assets/img/superFreeLine.jpeg" width="238" height="58"></a>
          <a href="javascript:;"><img src="../../assets/img/integralMall.jpeg" width="238" height="58"></a>
        </div>
        <!--高品质跟团游img-->
        <div class="footerImageBox">
          <a href="javascript:;"><img src="../../assets/img/superiorQuality.jpeg" width="988" height="58"></a>
        </div>
        <!--信息-->
        <div class="abouthuiLeYouInformation">
          <p>
            惠乐游客服中心位于南京市 来电显示为 025-86859999 、025-86259999 、025-85029999 、025-69609987 、025-69609986 、025-57629999 或 025-52339999</p>
          <p>北京国际旅行社有限公司，旅行社业务经营许可证编号：L-BJ-CJ00144　　上海国际旅行社有限公司，旅行社业务经营许可证编号：L-SH-CJ00107</p>
          <div class="aboutWe">
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">Investor Relations</a>
            <a href="javascript:;">联系我们</a>
            <a href="javascript:;">投诉建议</a>
            <a href="javascript:;">广告服务</a>
            <a href="javascript:;">旅游券</a>
            <a href="javascript:;">隐私保护</a>
            <a href="javascript:;">免责声明</a>
            <a href="javascript:;">旅游度假资质</a>
            <a href="javascript:;">主题旅游</a>
            <a href="javascript:;">用户协议</a>
            <a href="javascript:;">网站地图</a>
            <a href="javascript:;">UEIP</a>
            <a href="javascript:;">帮助中心</a>
          </div>
          <!--营业执照-->
          <p class="businessLicense">
            <strong>Copyright © 2006-2018</strong>
            <a href="javascript:;">科技有限公司</a>
            <a href="javascript:;">Tuniu.com</a>|
            <a href="javascript:;">营业执照</a>
            <a href="javascript:;">ICP证：苏B2-20130006</a>
            <a href="javascript:;">苏ICP备12009060号</a>
            <a href="javascript:;">成都旅游网</a>
          </p>
          <!--供应商合作-->
          <div class="supplierCooperation">
            <a href="javascript:;"><img src="../../assets/img/footer_1.jpg" width="175" height="38"></a>
            <a href="javascript:;"><img src="../../assets/img/IndependentTravel.png" width="175" height="38"></a>
            <a href="javascript:;"><img src="../../assets/img/bottom.jpg" width="175" height="38"></a>
          </div>
          <!--旅游保障-->
          <div class="tourismSecurity">
            <a href="javascript:;"><img src="../../assets/img/chengxinOne.png" width="113" height="41"></a>
            <a href="javascript:;"><img src="../../assets/img/buliang.png" width="109" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/wangluo.png" width="110" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/cata.png" width="110" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/CouncilMembers.png" width="110" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/3acomp.png" width="110" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/chengxin.png" width="110" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/ebsIcon.png" width="32" height="47"></a>
            <a href="javascript:;"><img src="../../assets/img/pata.png" width="140" height="47"></a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import '@/assets/css/comment.css'
  import {postPromise} from '@/assets/public'

  export default {
    name: '',
    computed: mapGetters([
      'navList',
      'lineScheduleObj',
      'isLoading',
      'showFixedComment'
    ]),
    data() {
      return {
        showQuit: false,
        n: 0,
        isLoginShow: false,
        isLogin: true,
        getName: '获取动态验证码',
        smSiName: '所有产品',
        isShowMask: false,
        UserLoadingShow: true,
        UserRegisterBoxShow: false,
        isDisabled: false,
        loginName: '',
        mainNavWrapContentList: [
          {
            name: '跟团游',
            to: '/Comment/AgenciesHome'
          },
          {
            name: '门票',
            to: '/Comment/AdmissionTicketHomePage'
          },
          {
            name: '酒店',
            to: '/Comment/HotelHomePage'
          },
        ],
        goTourismList: [
          '跟团游',
          '牛人专线',
          '酒店',
          '自由行',
          '亲子游',
          '门票',
          '酒+景',
          '蜜月游',
          '邮轮',
          '公司旅游',
          '海岛游',
          '签证',
          '当地玩乐',
          '老于推荐',
          '机票',
          '首付出发',
          '机票+酒店',
          '旅拍'
        ]
      }
    },
    watch: {
      '$route'(to, from) {
        let str = to.path;
        if (str.toLocaleLowerCase().includes('hotel')) {
          sessionStorage.setItem('commentNavNum', 2);
          window.location.reload()
        } else if (str.toLocaleLowerCase().includes('ticket')) {
          sessionStorage.setItem('commentNavNum', 1);
          window.location.reload()
        } else if (str.toLocaleLowerCase().includes('agencies')) {
          sessionStorage.setItem('commentNavNum', 0);
          window.location.reload()
        }
      }
    },
    methods: {
      clickMainNavWrapContent(index) {
        let commentNavNum = JSON.parse(sessionStorage.getItem('indexNumber'));
        sessionStorage.setItem('commentNavNum', index);
        this.n = JSON.parse(sessionStorage.getItem('commentNavNum'));
        if (this.n == 2) {
          this.$store.commit('hideShowFixedComment')
        } else {
          this.$store.commit('showShowFixedComment')
        }
      },
      //退出
      Quit() {
        //删除用户sessionStorage
        let user = JSON.parse(sessionStorage.getItem('user'))
        if (!user) {
          this.$store.commit('hideQuitButton')
          return
        }
        sessionStorage.removeItem('user');
        window.location.reload()
      },
      initData() {
        //导航套自导航
        var getSystemMenuInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "isDelete": 0
        }
//        this.$store.commit('showLoading')
        this.$store.dispatch('initNavList', getSystemMenuInfo)
          .then(() => {
//          this.$store.commit('hideLoading')
          })

      },
      //选择旅游类型
      changeTaualType(id) {
        this.smSiName = id.sm_si_Name
      },
      //跳转个人中心
      toPersonalCenter() {
        this.$router.push({name: 'MyTourOrder'})
      }
    },
    created() {
      let href = window.location.href
      if(href.toLocaleLowerCase().includes('hotel')){
        sessionStorage.setItem('commentNavNum', 2);
      }else if(href.toLocaleLowerCase().includes('ticket')){
        sessionStorage.setItem('commentNavNum', 1);
      }else if(href.toLocaleLowerCase().includes('agencies')){
        sessionStorage.setItem('commentNavNum', 0);
      }
      let user = JSON.parse(sessionStorage.getItem('user'));
      if(user){
        this.showQuit = true;
      }
      this.initData();
      //当前选中导航
      let id = JSON.parse(sessionStorage.getItem('commentNavNum'));
      if (id) {
        this.n = id;
      } else {
        this.n = 0
      }
      //判断右边导航是否隐藏
      if (id == 2) {
        this.$store.commit('hideShowFixedComment')
      } else {
        this.$store.commit('showShowFixedComment')
      }
      sessionStorage.setItem('indexNumber', 0)
    },
    mounted() {
      if (sessionStorage.getItem('user')) {
        var InformetionObj = JSON.parse(sessionStorage.getItem('user'))
        this.isLogin = false;
        this.isLoginShow = true;
        this.loginName = InformetionObj.ui_Name
      }
    },
  }
</script>
<style scoped>
  .active {
    background-color: orange;
  }

  .active a {
    color: #fff;
  }

  .FixedComment {
    width: 40px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #000;
    z-index: 999;
  }

  .FixedComment li {
    position: relative;
    overflow: hidden;
  }

  .FixedComment li > a:first-of-type {
    height: 40px;
    background-image: url("../../assets/img/rc_icon_all.png");
    background-repeat: no-repeat;
    border-top: 1px solid #3c3c3c;
  }

  .FixedComment li > a:nth-of-type(2) {
    position: absolute;
    right: 50px;
    top: 0;
    transition: .3s linear;
    width: 100px;
    text-align: center;
    font: 16px/40px "微软雅黑";
    color: #ff8800;
    background-color: #333333;
    border-left: 4px solid #ff8800;
    box-sizing: content-box;
    opacity: .1;
  }

  .FixedCommentTop > .App > a {
    background-position: 6px 14px;
  }

  .FixedCommentTop {
    margin-top: 100px;
  }

  .FixedComment li:hover > a:nth-of-type(2) {
    right: 39px;
    opacity: 1;
  }

  .FixedComment li:hover {
    overflow: visible;
  }

  .FixedCommentTop > .App:hover > a {
    background-position: -62px 14px;
  }

  .FixedCommentTop > .App:hover > img {
    right: 40px;
    opacity: 1;
  }

  .FixedCommentTop > .App > img {
    position: absolute;
    right: 50px;
    top: 0px;
    transition: .3s linear;
    opacity: .1;
  }

  .FixedCommentTop > .goLogin > a:first-of-type {
    background-position: 5px -36px;
  }

  .FixedCommentTop > .goLogin:hover > a:first-of-type {
    background-position: -64px -36px;
  }

  .FixedCommentTop > .myFocusOn > a:first-of-type {
    background-position: 6px -97px;
  }

  .FixedCommentTop > .myFocusOn:hover > a:first-of-type {
    background-position: -61px -97px;
  }

  .FixedCommentTop > .myOrder > a:first-of-type {
    background-position: 8px -224px;
  }

  .FixedCommentTop > .myOrder:hover > a:first-of-type {
    background-position: -61px -224px;
  }

  .FixedCommentTop > .myGiftCertificates > a:first-of-type {
    background-position: 10px -288px;
  }

  .FixedCommentTop > .myGiftCertificates:hover > a:first-of-type {
    background-position: -58px -288px;
  }

  .FixedCommentTop > .messageToRemind > a:first-of-type {
    background-position: 8px -785px;
  }

  .FixedCommentTop > .messageToRemind:hover > a:first-of-type {
    background-position: -60px -785px;
  }

  .FixedCommentTop > .onlineCustomerService > a:first-of-type {
    background-position: 8px -728px;
  }

  .FixedCommentTop > .onlineCustomerService:hover > a:first-of-type {
    background-position: -60px -728px;
  }

  .FixedCommentBottom {
    margin-top: 100px;
  }

  .FixedCommentBottom > .askTicketSurvey > a:first-of-type {
    background-position: 8px -846px;
  }

  .FixedCommentBottom > .askTicketSurvey:hover > a:first-of-type {
    background-position: -60px -846px;
  }

  .FixedCommentBottom > .opinionSuggestion > a:first-of-type {
    background-position: 9px -544px;
  }

  .FixedCommentBottom > .opinionSuggestion:hover > a:first-of-type {
    background-position: -60px -544px;
  }

  .FixedCommentBottom > .goTop > a:first-of-type {
    background-position: 9px -600px;
  }

  .FixedCommentBottom > .goTop:hover > a:first-of-type {
    background-position: -60px -600px;
  }

  /*底部*/

  footer {
    margin-top: 30px;
    background-color: #f5f5f5;
  }

  .serviceType {
    width: 990px;
    padding: 20px 0;
    margin: 0 auto;
  }

  .serviceType > * {
    float: left;
  }

  .serviceType > dl {
    margin-right: 25px;
    padding-bottom: 20px;
    border-right: 1px dotted #d8d8d8;
    padding-left: 45px;
  }

  /*去旅游*/

  .goTourism {
    width: 250px;
  }

  .serviceType > dl > dt,
  .huiLeYouApp > strong {
    font: bold 14px/35px "宋体";
    display: block;
    color: #666666;
    margin-left: -45px;
    margin-bottom: 10px;
  }

  .goTourism > dt i {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/img/common_foot_2.png') no-repeat 0 0;
    vertical-align: top;
    margin-right: 10px;
  }

  .goTourism > dd {
    font: 12px/1.5 "宋体";
    display: inline-block;
    width: 65px;
  }

  .goTourism > dd > a {
    color: #999;
  }

  /*寻优惠*/

  .seekPreferentialTreatment {
    width: 150px;
  }

  .seekPreferentialTreatment > dt > i {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/img/common_foot_2.png') no-repeat -40px 0;
    vertical-align: top;
    margin-right: 10px;
  }

  .seekPreferentialTreatment > dd {
    font: 12px/1.5 "宋体";
  }

  .seekPreferentialTreatment > dd > a {
    color: #999;
  }

  /*看攻略*/

  .lookAtTheOffensive {
    width: 150px;
  }

  .lookAtTheOffensive > dt > i {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/img/common_foot_2.png') no-repeat -80px 0;
    vertical-align: top;
    margin-right: 10px;
  }

  .lookAtTheOffensive > dd {
    font: 12px/1.5 "宋体";
  }

  .lookAtTheOffensive > dd > a {
    color: #999;
  }

  /*查服务*/

  .lookupService {
    width: 150px;

  }

  .lookupService > dt > i {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/img/common_foot_2.png') no-repeat -120px 0;
    vertical-align: top;
    margin-right: 10px;
  }

  .lookupService > dd {
    font: 12px/1.5 "宋体";
  }

  .lookupService > dd > a {
    color: #999;
  }

  /*下载app*/

  .huiLeYouApp {
    width: 150px;
    padding-left: 45px;
  }

  .huiLeYouApp > strong > i {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/img/common_foot_2.png') no-repeat -160px 0;
    vertical-align: top;
    margin-right: 10px;
  }

  .huiLeYouApp > span {
    display: block;
    font: 12px/1.5 "宋体";
    color: #999;
    padding-bottom: 10px;
  }

  .aboutService {
    width: 100%;
    height: 62px;
    background-color: #60ca6e;
  }

  .aboutService > a {
    width: 990px;
    height: 100%;
    margin: 0 auto;
    background: url("../../assets/img/thr_sun.jpg") no-repeat 0 0;
  }

  .aboutService span {
    float: right;
    margin-top: 10px;
  }

  .aboutService span > em {
    text-align: center;
    display: block;
  }

  .aboutService span > em:nth-of-type(1) {
    color: #fff;
    font: normal 12px/20px arial, sans-serif;
  }

  .aboutService span > em:nth-of-type(2) {
    color: #fff;
    font: normal bold 20px/32px arial, sans-serif;
    margin-top: -5px;
  }

  .footerContent {
    width: 990px;
    margin: 0 auto;
  }

  .footerImageList {
    margin: 10px 0;
  }

  .footerImageList > a {
    float: left;
    border: 1px solid #ccc;
    margin-right: 10px;
  }

  .footerImageList > a:last-of-type {
    margin-right: 0;
  }

  .abouthuiLeYouInformation {
    margin-top: 15px;
  }

  .abouthuiLeYouInformation > p {
    text-align: center;
    font: 13px/19px "宋体";
    color: #777777;
  }

  .aboutWe {
    text-align: center;
  }

  .aboutWe > a {
    display: inline-block;
    font: 13px/19px "宋体";
    color: #777777;
    margin: 0 3px;
  }

  .businessLicense {
    margin-top: 10px;
  }

  .businessLicense > a {
    color: #777;
  }

  .supplierCooperation {
    text-align: center;
    margin-top:10px;
  }

  .supplierCooperation > a {
    display: inline-block;
    border: 1px solid #ccc;
  }

  .tourismSecurity {
    text-align: center;
    margin-top: 20px;
  }

  .tourismSecurity > a {
    display: inline-block;
  }

</style>
