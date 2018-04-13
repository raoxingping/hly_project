<template>
  <div id="bgBox">
    <div id="registerBox">
      <div class="hearder">
        <div class="huLeYouLogo">
          <a href="javascript:;" style="position: relative;">
            <router-link to="/HeelTour" style="position: absolute;width: 100%;height:100%"></router-link>
            <img src="../assets/img/huileyouLogo.jpg" width="286" height="75">
          </a>
          <strong>欢迎注册</strong>
        </div>
      </div>
      <div class="registerDetails">
        <h2 class="titel">手机注册</h2>
        <div class="registerDetailsContent">
          <el-steps :active="active" finish-status="success">
            <el-step title="设置密码"></el-step>
            <el-step title="注册成功"></el-step>
          </el-steps>
          <div class="registerInputBox" v-show="registerInputBoxShow">
            <div class="telephoneNumber">
              <span>电话号码:</span>
              <input type="text" v-model="addOptions.phone">
              <span style="color: #f60">(必填)</span>
            </div>
            <div class="password">
              <span>密码:</span>
              <input type="password" v-model="addOptions.password">
              <span style="color: #f60">(必填)</span>
            </div>
            <div class="repeatPassword">
              <span>确认密码:</span>
              <input type="password" v-model="addOptions.repeatPassword">
              <span style="color: #f60">(必填)</span>
            </div>
            <div class="repeatPassword">
              <span>推广员ID:</span>
              <input type="text" v-model="addOptions.extensionID">
            </div>
            <div class="verificationCode">
              <span>验证码:</span>
              <input type="text" v-model="addOptions.validateNo">
              <a href="javascript:;" @click="getNumbers" :style="{backgroundColor:isColor?'#666':'orange'}">{{getName}}</a>
            </div>
          </div>
          <div class="successContent" v-show="successShow">
            <i class="el-icon-success"></i>
            <span>注册成功！</span>
            <router-link to="adminLogin">前往登录</router-link>
          </div>
          <el-button style="margin-top: 12px;" @click="next" v-show="nextShow">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Register from '../assets/css/Register.css'
  import {postPromise,isPhone} from '../assets/public'

  export default {
    name: '',
    computed: mapGetters([]),
    data() {
      return {
        num:59,
        active: 1,
        registerInputBoxShow: true,
        successShow: false,
        nextShow: true,
        getName: '获取动态验证码',
        isColor:false,
        addOptions: {
          phone: '',
          password: '',
          repeatPassword: '',
          validateNo: '',
          extensionID:''
        }
      }
    },
    created(){
      if(window.location.href.includes('?')){
        let id = window.location.href.split('?')[1].split('=')[1];
        this.addOptions.extensionID = id;
      }
    },
    methods: {
      next() {
        if (this.active == 1) {
          this.registerInputBoxShow = true;
          this.successShow = false;
          this.nextShow = true;
          this.UserRegisterBoxSubmit();
        } else if (this.active == 2) {
          this.registerInputBoxShow = false;
          this.successShow = true;
          this.nextShow = false;
        }
      },
      initData() {

      },
      search() {
        this.initData()
      },
      //获取动态验证码
      getNumbers() {

        if(typeof this.num=='number'&&this.num!=59){
//          this.$notify({
//            message: '请确认时间！',
//            type: 'error'
//          });
          return;
        }
        if (this.addOptions.phone == '') {
          this.$notify({
            message: '请输入电话号码！！',
            type: 'error'
          });
          return;
        }
        this.$http.post('http://webservice.1000da.com.cn/UserInfo/SendMessage', JSON.stringify({
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "phone": this.addOptions.phone,
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((data)=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            this.isColor = true;
            let timer = setInterval(() => {
              this.getName = this.num + 's后重新获取'
              this.num--;
              if (this.num == 0) {
                this.isDisabled = false;
                this.isColor = false;
                clearInterval(timer)
                this.getName = '重新获取验证码';
                this.num = 59
              }
            }, 1000)
          }else{
            this.$notify({
              message: data.resultcontent,
              type: 'error'
            });
          }
        })
      },

      //注册提交
      UserRegisterBoxSubmit() {
        if (this.addOptions.phone == '') {
          this.$notify({
            message: '请输入电话号码！！',
            type: 'error'
          });
          return;
        }
        if(!isPhone(this.addOptions.phone)){
          this.$notify({
            message: '电话号码格式有误！！',
            type: 'error'
          });
          return;
        }
        if (this.addOptions.password != this.addOptions.repeatPassword) {
          this.$notify({
            message: '两次输入的密码不一致',
            type: 'error'
          });
          return;
        }
        if (this.addOptions.password == '') {
          this.$notify({
            message: '请输入密码',
            type: 'error'
          });
          return;
        }
        if (this.addOptions.validateNo == '') {
          this.$notify({
            message: '请输入验证码',
            type: 'error'
          });
          return;
        }

        this.$http.post('http://webservice.1000da.com.cn/UserInfo/RegByCode', JSON.stringify({
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "phone": this.addOptions.phone,
          extensionID:this.addOptions.extensionID,
          "password": this.addOptions.password,
          "validateNo": this.addOptions.validateNo
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            this.$notify({
              message: '注册成功!',
              type: 'success'
            });
            this.active = 2;
            this.registerInputBoxShow = false;
            this.successShow = true;
            this.nextShow = false;
          }
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })

//        postPromise('http://114.55.248.116:1001/Service.asmx/RegByCode', {
//          paramJson: JSON.stringify({
//            "loginUserID": "huileyou",
//            "loginUserPass": "123",
//            "phone": this.addOptions.phone,
//            "password": this.addOptions.password,
//            "validateNo": this.addOptions.validateNo
//          })
//        })
//          .then(data => {
//            var data = JSON.parse(data);
//            if (Number(data.backCode) == 200) {
//              this.$notify({
//                message: '注册成功!',
//                type: 'success'
//              });
//              this.active = 2;
//              this.registerInputBoxShow = false;
//              this.successShow = true;
//              this.nextShow = false;
//
//            }
//          })
      },
    },
  }
</script>
<style scoped>

  .el-step__main {
    margin-left: -20px;
  }
</style>
