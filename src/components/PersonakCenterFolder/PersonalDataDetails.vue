<template>
    <div>
      <div class="personalDataDetailsWrap">
        <ul class="personalDataDetailsWrapNavList clearfix">
          <li><a href="javascript:;" class="active">基本信息</a></li>
        </ul>
        <el-form ref="form" label-width="80px">
          <el-form-item label="昵称:" label-width="100px">
            <el-input
              style="width: 220px"
              placeholder="请输入昵称"
              v-model="saveUser.ui_Name"
              clearable
              :disabled="isDisabled"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="身份证:" label-width="100px" :required="isOff">
            <el-input
              style="width: 220px"
              placeholder="请输入身份证"
              v-model="saveUser.ui_CertNo"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="电话号码:" label-width="100px" :required="isOff">
            <el-input
              style="width: 220px"
              placeholder="请输入电话号码"
              v-model="saveUser.ui_Phone"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="生日:" label-width="100px">
            <el-select v-model="yearValue" placeholder="请选择年" style="width: 120px" size="small" :disabled="isDisabled">
              <el-option
                v-for="item in years"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="monthValue" placeholder="请选择月" style="width: 120px" size="small" @change="changeMonth" :disabled="isDisabled">
              <el-option
                v-for="item in months"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="dateValue" placeholder="请选择日" style="width: 120px" size="small" :disabled="isDisabled">
              <el-option
                v-for="item in dates"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别:" label-width="100px">
            <el-radio v-model="saveUser.ts_ui_Sex" label="0" :disabled="isDisabled">男</el-radio>
            <el-radio v-model="saveUser.ts_ui_Sex" label="1" :disabled="isDisabled">女</el-radio>
          </el-form-item>
          <el-form-item label="邮箱:" label-width="100px">
            <el-input
              style="width: 220px"
              placeholder="请输入邮箱"
              v-model="saveUser.ts_ui_Email"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="常住地:" label-width="100px">
            <el-select v-model="saveUser.ui_Provice" placeholder="请选择省" size="mini"
                       @focus="changeProvince" :disabled="isDisabled">
              <el-option
                v-for="item in provinceDataList"
                :key="item.sm_af_AreaID"
                :label="item.sm_af_AreaName"
                :value="item.sm_af_AreaID">
              </el-option>
            </el-select>
            <el-select v-model="saveUser.ui_City" placeholder="请选择市" size="mini"
                       @focus="changeCity" :disabled="isDisabled">
              <el-option
                v-for="item in cityDataList"
                :key="item.sm_af_AreaID"
                :label="item.sm_af_AreaName"
                :value="item.sm_af_AreaID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址:" label-width="100px">
            <el-input
              style="width: 220px"
              placeholder="请输入详细地址"
              v-model="saveUser.ui_Address"
              :disabled="isDisabled"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="婚姻:" label-width="100px">
            <el-select v-model="saveUser.ui_MarryStatus" placeholder="请选择婚姻" :disabled="isDisabled">
              <el-option label="未婚" value="0"></el-option>
              <el-option label="已婚" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职业:" label-width="100px" :required="isOff">
            <el-select v-model="saveUser.ts_ui_JobID" placeholder="请选择职业" :disabled="isDisabled">
              <el-option
                v-for="item in jobList"
                :key="item.ts_jb_ID"
                :label="item.ts_jb_Name"
                :value="item.ts_jb_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历:" label-width="100px" :required="isOff">
            <el-select v-model="saveUser.ts_ui_EducationID" placeholder="请选择学历" :disabled="isDisabled">
              <el-option
                v-for="item in educationList"
                :key="item.oi_en_ID"
                :label="item.oi_en_Name"
                :value="item.oi_en_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-show="!isDisabled">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button @click="clear">清空</el-button>
          </el-form-item>
          <el-form-item v-show="isDisabled">
            <el-button  type="primary" @click="Editor">编辑</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        yearValue:'',//年
        monthValue:'',//月
        dateValue:'',//日
        years: [],
        months:[],
        dates:[],
        isDisabled:true,
        value:'',
        sex:0,
        userInfo:{},
        NoID:'',
        width:'120px',
        input10:'',
        isOff:true,
        saveUser:{
          "ui_Name":'',
          "ui_ID": '',
          "ui_CertNo":'',
          "ts_ui_JobID": "",
          "ts_ui_JobName": "",
          "ts_ui_EducationID": "",
          "ts_ui_EducationName": "",
          "ui_Phone": "",
          "ui_Birthday": "",
          "ts_ui_Sex": "0",
          "ts_ui_Email": "",
          "ui_Provice": "",
          "ui_City": "",
          "ui_Contry": "",
          "ui_Address": "",
          "ui_MarryStatus": "",
          "ts_ui_CancelReason": "",
          "ts_ui_CancelerID": "",
          "s_ui_CancelerName": "",
          "s_ui_CancelerTime": "",
          "ui_IsDelete": "",
          "ui_CreateTime": "",
          "ui_Remark": ""
        }
      }
    },
    computed: mapGetters([
      'provinceDataList',
      'cityDataList',
      'jobList',
      'educationList'
    ]),
    created(){
      //初始化职业
      let jobOptions = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        "ts_jb_ID": "",
        "ts_jb_Name": "",
      };
      this.$store.dispatch('initJob',jobOptions)
      .then(()=>{},()=>{})
      //初始化学历
      let educationOptions = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        "oi_en_ID": "",
        "oi_en_Name": "",
      };
      this.$store.dispatch('initEducation',educationOptions)
      .then(()=>{},()=>{})

      //设置年
      let year = new Date().getFullYear();
      for(var i=1900;i<=year;i++){
        this.years.push({
          value:i,
          name:i+'年'
        })
      }
      for(var i=1;i<13;i++){
        this.months.push({
          value:i,
          name:i+'月'
        })
      }
      this.years.sort((a,b)=>{
        return b.value-a.value;
      });
      let user = JSON.parse(sessionStorage.getItem('user'));
      if(user){
        this.userInfo = user;
        if(user){
          user.ts_ui_Sex = user.ts_ui_Sex+'';
          this.saveUser = user;
          if(user.ui_Birthday){
            this.yearValue = user.ui_Birthday.split('-')[0]
            this.monthValue = Number(user.ui_Birthday.split('-')[1])
            this.dateValue = Number(user.ui_Birthday.split('-')[2])
          }
        }else{

          this.saveUser =this.userInfo
        }

//        this.saveUser.ui_Name =this.userInfo.ui_Name
//        this.saveUser.ui_ID =  this.userInfo.ui_ID
//        this.saveUser.ui_CertNo =this.userInfo.ui_CertNo
      }else{
        this.$router.push({name:'AdminLogin'})
      }
    },
    methods: {
      //选择省
      changeProvince(v) {
        let getAreaProvice = {
          "areaPid": 3337
        }
        this.$store.dispatch('initProvinceData', getAreaProvice)
      },
      //选择市
      changeCity() {
        if (!this.saveUser.ui_Provice) {
          this.$notify({
            message: '请先选择省!!',
            type: 'error'
          });
          return
        }
        let getCity = {
          "areaPid": this.saveUser.ui_Provice ? this.saveUser.ui_Provice : ''
        }
        this.$store.dispatch('initCityData', getCity)
      },
      //选中月
      changeMonth(){
        this.dates = []
        let newDate = new Date(this.yearValue,this.monthValue)
        let month = newDate.getMonth()
        newDate.setMonth(month );
        newDate.setDate(0);
        let date = newDate.getDate()

        for(var i=1;i<=date;i++){
          this.dates.push({
            value:i,
            name:i
          })
        }
      },
      initData() {
      },
      //清空
      clear(){
       for(var attr in this.saveUser){
         this.saveUser[attr] = ''
       }
      },
      getNum(num){
        return num<10?'0'+num:''+num;
      },
      save(){
        let user = JSON.parse(sessionStorage.getItem('user'))
        this.saveUser.ui_UserCode = user.ui_UserCode
        this.saveUser.ui_Birthday = this.yearValue+'-'+this.getNum(this.monthValue)+'-'+this.getNum(this.dateValue)
        if(this.saveUser.ui_CertNo == ''){
          this.$notify({
            message: '请输入身份证号!',
            type: 'error'
          });
          return;
        }
        let saveOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          userInfo:this.saveUser
        };
        this.isLoading = true;
        this.$store.dispatch('saveUserInfo',saveOptions)
        .then(suc=>{
          this.$notify({
            message: suc,
            type: 'success'
          });
          this.saveUser.ui_ProviceID = this.saveUser.ui_Provice
          this.saveUser.ui_Provice = this.provinceDataList.filter(item=>{
            if(item.sm_af_AreaID==this.saveUser.ui_Provice){
              return true
            }
            return false
          })[0].sm_af_AreaName
          this.saveUser.ui_CityID = this.saveUser.ui_City
          this.saveUser.ui_City = this.cityDataList.filter(item=>{
            if(item.sm_af_AreaID==this.saveUser.ui_City){
              return true
            }
            return false
          })[0].sm_af_AreaName
          user = this.saveUser;
          sessionStorage.setItem('user',JSON.stringify(user))

          this.isLoading = false;
          this.$router.push({name:'AdminLogin'})
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
          this.isLoading = false;
        })
      },
      //编辑
      Editor(){
        this.isDisabled = false
      },
      search() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "userID": this.userInfo.ui_UserCode,
          "userCode": this.userInfo.ui_UserCode,
          "userName": this.userInfo.ui_Name,
          "certNo": this.NoID,
          "phone": "",
          "remark": "",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
        };
//        this.$store.dispatch('updateUserInfo',options)
      }
    },
  }
</script>

<style scoped>
i {
  color: #f60;
}

  .personalDataDetailsWrapNavList {
    font: bold 20px/55px "微软雅黑";
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }

  .personalDataDetailsWrapNavList > li  {
    float: left;
    margin-bottom:-1px;
  }

  .personalDataDetailsWrapNavList > li > a {
    padding: 0 30px;
    display: block;
    border-right: 1px solid #dddddd;
  }
  .personalDataDetailsWrapNavList > li > .active {
    border-top: 4px solid #22c233;
    margin-top:-4px;
    background-color: #fff;
    color: #22c233;
  }
  .personalDataDetailsWrapContentList {
    font: 16px/3 "微软雅黑";
  }
  .personalDataDetailsWrapContentList>li>strong {
    display: inline-block;
    width:120px;
    text-align: right;
    color: #666;
  }
  .personalDataDetailsWrapContentList>li>input {
    width:200px;
    height:30px;
    padding:5px;
    border: 1px solid #ccc;
    margin-left:20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
