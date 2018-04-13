<template>
  <div id="wrapBox">
    <div class="huLeYouLogo">
      <a href="javascript:;">
        <router-link to="/Comment/AgenciesHome" style="position: absolute;width: 100%;height:100%"></router-link>
        <img src="../assets/img/huileyouLogo.jpg" width="286" height="75">
      </a>
    </div>
    <div class="loginBoxWrap">
      <div class="loginBox">
        <div class="loginSwitch clearfix" ref="loginSwitch" id="loginSwitch">
          <a href="javascript:;" v-for="item,index in LoginType" @click="changeType(index)">{{item}}</a>
        </div>
        <!--输入登录-->
        <div class="inputBox" v-show="inputShow" id="inputBox">
          <input type="text" class="AccountNumber" v-model="loginOptions.loginNumber" placeholder="账号">
          <input type="password" class="password" v-model="loginOptions.loginPassword" placeholder="密码">
          <div>未拥有账号?
            <router-link to="/Register">点击前往注册></router-link>
          </div>
          <button class="loginBtn" @click="loginSubmit">登录</button>
        </div>
        <!--二维码登录-->
        <div class="QRCode" v-show="QRCodeShow" id="QRCode">
          <h5>扫码登录，更快，更安全</h5>
          <div class="QRCodeImgBox">
            <img src="../assets/img/qrcode.png" width="164" height="164" class="QRCodeImage">
            <img src="../assets/img/qrTips.png" width="160" height="174" class="PromptImage">
          </div>
          <p>打开APP扫二维码登录</p>
          <div class="downloadAndRegister clearfix">
            <a href="javascript:;" class="downloadAPP">下载APP</a>
            <a href="javascript:;" class="register">立即注册></a>
            <span>新用户送礼,</span>
          </div>
        </div>
        <!--其他方式登录-->
        <div class="other">
          <p class="otherLogin">其他方式登录</p>
          <ul class="otherLoginList clearfix">
            <li>
              <a href="javascript:;" class="weiXin">微信</a>
            </li>
            <li>
              <a href="javascript:;" class="QQ">QQ</a>
            </li>
            <li>
              <a href="javascript:;" class="weiBo">微博</a>
            </li>
            <li>
              <a href="javascript:;" class="heZuoCard">合作卡</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import Login from '../assets/css/Login.css'
  import {postPromise} from '../assets/public'

  export default {
    name: '',
    computed: mapGetters([]),
    data() {
      return {
        value: '',
        inputShow: true,
        QRCodeShow: false,
        LoginType: [
          '账户登录',
          '扫码登录'
        ],
        loginOptions: {
          loginNumber: '',
          loginPassword: '',
        },
      }
    },
    methods: {
      //登录方式切换
      changeType(index) {
        let as = this.$refs.loginSwitch.children;
        for (let i = 0; i < as.length; i++) {
          as[i].className = ''
        }
        as[index].className = 'active'
        if (index == 0) {
          this.inputShow = true
          this.QRCodeShow = false
        }
        if (index == 1) {
          this.inputShow = false
          this.QRCodeShow = true
        }
      },
      //登录提交
      loginSubmit() {
        if ( this.loginOptions.loginNumber == '' ) {
          this.$notify({
            message: '请输入账号！！',
            type: 'error'
          });
          return;
        }
        if ( this.loginOptions.loginPassword == '' ) {
          this.$notify({
            message: '请输入密码！！',
            type: 'error'
          });
          return;
        }
        var GetValidateByPassword = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "userID": this.loginOptions.loginNumber,
          "password": this.loginOptions.loginPassword
        }

        this.$http.post('http://webservice.1000da.com.cn/UserInfo/Login', JSON.stringify(GetValidateByPassword), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            this.$notify({
              message: '登录成功！！',
              type: 'success'
            });
            sessionStorage.setItem('user',JSON.stringify(data.data))
            this.$store.commit('showQuitButton')
            this.$router.go(-1)
          }else{
            this.$notify({
              message: data.backResult,
              type: 'error'
            });
          }
        })

//        postPromise('http://114.55.248.116:1001/Service.asmx/GetValidateByPassword', {
//          paramJson: JSON.stringify(GetValidateByPassword)
//        })
//          .then(data=>{
//            var data = JSON.parse(data);
//            if(Number(data.backCode) == 200){
//              this.$notify({
//                message: '登录成功！！',
//                type: 'success'
//              });
//              sessionStorage.setItem('user',JSON.stringify(data.userInfo[0]))
//              this.$store.commit('showQuitButton')
//              this.$router.go(-1)
////              this.$router.push({name:'HeelTour'});
////              window.location.reload()
//            }else{
//              this.$notify({
//                message: data.backResult,
//                type: 'error'
//              });
//            }
//          })
      },
      initData() {

      },
      search() {
        this.initData()
      }
    },
    mounted() {
      let loginSwitch = document.getElementById("loginSwitch");
      let as;
      if(loginSwitch.children){
        as = loginSwitch.children;
        as[0].className = 'active';
      }

      document.addEventListener('keydown',(e)=>{
        if(e.keyCode==13){
          this.loginSubmit()
        }
      })
    }
  }
</script>
<style>
</style>
