<template>
  <div>
    <div id="MerchantRegisterWrap">
      <!--注册头部-->
      <div class="MerchantRegisterWrapHeader clearfix" @click="toHome">
        <div class="MerchantRegisterWrapHeaderLogoBox">
          <img src="../../assets/img/huileyouLogo.jpg" width="300" height="70">
        </div>
        <div class="MerchantRegisterWrapHeaderHomePage">
          <router-link to="AgenciesHome">返回首页</router-link>
        </div>
      </div>
      <!--注册导航-->
      <div class="MerchantRegisterNavWrap">
        <div class="MerchantRegisterNav">
          <div class="MerchantRegisterNavContent clearfix">
            <a href="javascript:;" v-for="item,index in options" :class="{active:index==n}"
               @click="changeOption(index)">{{item.name}}</a>
          </div>
        </div>
      </div>
      <!--注册表单-->
      <div class="MerchantRegisterTabel" v-show="off">
        <!--代理商信息-->
        <div class="ContactsContent">
          <h5>代理商信息</h5>
          <div class="ContactsBox clearfix">
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="姓名:" :required="isOff">
                  <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_Name"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="QQ:" :required="isOff">
                  <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_QQ"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="推广员ID:" :required="isOff">
                  <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_ai_ProxyParentID"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="代理商密码:" :required="isOff">
                  <el-input type="password" size="mini" v-model="insertAgentInfo.data.sm_pi_Password"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="手机号码:" :required="isOff">
                  <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_Telephone"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="电子邮箱:" :required="isOff">
                  <el-input type="text" size="mini"  v-model="insertAgentInfo.data.sm_pi_Email"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="固定电话区号:" :required="isOff">
                  <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_FixPhone"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="24" class="formSearch">
              <el-form :inline="true">
                <el-form-item label="性别:" :required="isOff">
                  <el-radio-group v-model="insertAgentInfo.data.sm_pi_Sex">
                    <el-radio :label="0">男</el-radio>
                    <el-radio :label="1">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </el-col>
          </div>
        </div>
        <!--公司信息-->
        <div class="companyContent clearfix">
          <h5>公司信息</h5>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="公司名称:" :required="isOff">
                <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_CompanyName"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="省:" :required="isOff">
                <el-select v-model="insertAgentInfo.data.sm_pi_Provice" placeholder="请选择省" size="mini"
                           @focus="changeProvince">
                  <el-option
                    v-for="item in provinceDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="市:" :required="isOff">
                <el-select v-model="insertAgentInfo.data.sm_pi_City" placeholder="请选择市" size="mini"
                           @focus="changeCity">
                  <el-option
                    v-for="item in cityDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="县:" :required="isOff">
                <el-select v-model="insertAgentInfo.data.sm_pi_County" placeholder="请选择县" size="mini"
                           @focus="changeCounty">
                  <el-option
                    v-for="item in countyDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="具体地址:" :required="isOff">
                <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_Address"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="注册成立时间:" :required="isOff">
                <div class="block">
                  <el-date-picker
                    id="c"
                    v-model="insertAgentInfo.data.sm_pi_RegTime"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    size="mini"
                  >
                  </el-date-picker>
                </div>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="注册资金:" :required="isOff">
                <el-input style="width: 100px" type="text" size="mini"
                          v-model="insertAgentInfo.data.sm_pi_RegMoney" placeholder="请输入数字"></el-input>
                万元
              </el-form-item>
            </el-form>
          </el-col>
        </div>
        <!--合作信息-->
        <div class="cooperationContent clearfix">
          <h5>合作信息</h5>
          <!--<el-col :span="24" class="formSearch">-->
          <!--</el-col>-->
          <el-col :span="24" class="formSearch" style="width: 100%">
            <el-form :inline="true">
              <el-form-item label="合作类型名称:" :required="isOff">
                <!--<el-select v-model="changeCooperationTypeDataList" placeholder="请选择合作类型" @change="changeCooperation">-->
                  <!--<el-option-->
                    <!--v-for="item in changeCooperationTypeList"-->
                    <!--:key="item.sm_cp_ID"-->
                    <!--:label="item.sm_cp_Name"-->
                    <!--:value="item.sm_cp_ID">-->
                  <!--</el-option>-->
                <!--</el-select>-->
                <el-checkbox-group v-model="changeCooperationTypeDataList" @change="changeCooperationType">
                  <el-checkbox v-for="item in changeCooperationTypeList" :label="item.sm_cp_Name" :key="item.sm_cp_ID">{{item.sm_cp_Name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-col>
        </div>
        <!--代理级别-->
        <div class="qualificationsContent clearfix">
          <h5>代理级别</h5>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="代理级别:"  :required="isOff">
                <el-radio-group v-model="insertAgentInfo.data.sm_pi_Level" @change="changeLevel">
                  <el-radio :label="1">一级代理</el-radio>
                  <el-radio :label="2">二级代理</el-radio>
                  <el-radio :label="3">三级代理</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-col>
          <!--一级代理选择-->
          <el-col :span="24" class="formSearch" v-show="insertAgentInfo.data.sm_pi_Level==1">
            <el-form :inline="true">
              <el-form-item label="一级代理选择:"  :required="isOff">
                <el-cascader
                  :options="getAreaInfoList"
                  @change="changeAreaInfo"
                  change-on-select
                ></el-cascader>
              </el-form-item>
            </el-form>
          </el-col>
          <!--二级选择-->
          <el-col :span="24" class="formSearch" v-show="insertAgentInfo.data.sm_pi_Level==2">
            <el-form :inline="true">
              <el-form-item label="二级代理选择:"  :required="isOff">
                <el-select v-model="insertAgentInfo.areaData" placeholder="请选择省" size="mini"
                           @focus="changeProvince" multiple>
                  <el-option
                    v-for="item in provinceDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <!--三级选择-->
          <el-col :span="24" class="formSearch" v-show="insertAgentInfo.data.sm_pi_Level==3">
            <el-form :inline="true">
              <el-form-item label="三级代理选择:"  :required="isOff">
                <el-select v-model="proviceID" placeholder="请选择省" size="mini"
                           @focus="changeProvince" >
                  <el-option
                    v-for="item in provinceDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
                <el-select v-model="insertAgentInfo.areaData" placeholder="请选择市" size="mini"
                           @focus="changeCityData" multiple>
                  <el-option
                    v-for="item in cityDataList"
                    :key="item.sm_af_AreaID"
                    :label="item.sm_af_AreaName"
                    :value="item.sm_af_AreaID">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </div>
        <!--资质信息-->
        <div class="qualificationsContent clearfix">
          <h5>资质信息</h5>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="营业执照号:">
                <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_CertNo"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="营业执照有效期从:" >
                <div class="block">
                  <el-date-picker
                    id="b"
                    v-model="insertAgentInfo.data.sm_pi_CertExpireFrom"
                    type="date"
                    placeholder="选择日期"
                    value-format="yyyy-MM-dd"
                    size="mini">
                  </el-date-picker>
                </div>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="营业执照有效期到:" >
                <el-date-picker
                  id="a"
                  v-model="insertAgentInfo.data.sm_pi_CertExpireTo"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  size="mini">
                </el-date-picker>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="营业执照扫描件:">
                <a href="javascript:;" class="file">上传文件
                  <input type="file" name="" ref="upload" accept="image/*" multiple>
                </a>
                <img
                  style="display: block"
                  v-for="item in ImageURL1"
                  v-lazy="item"
                  width="280"
                  height="125"
                  v-show="ImageURL1.length"
                >
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="税务登记证号:">
                <el-input type="text" size="mini" v-model="insertAgentInfo.data.sm_pi_FeeNo"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24" class="formSearch">
            <el-form :inline="true">
              <el-form-item label="税务登记证扫描件:">
                <a href="javascript:;" class="file">上传文件
                  <input type="file" name="" ref="upload1" accept="image/*" multiple>
                </a>
                <img
                  style="display: block"
                  v-for="item in ImageURL2"
                  v-lazy="item"
                  width="280"
                  height="125"
                  v-show="ImageURL2.length"
                >
              </el-form-item>
            </el-form>
          </el-col>
        </div>

      </div>
      <!--信息提交-->
      <div class="ContactsSubmitWrap" v-show="off">
       <!--<p><el-checkbox v-model="isSubmitContent"></el-checkbox><span style="font-size: 12px;cursor:pointer;padding-left: 5px" @click="consentAgreement">同意服务条款协议</span></p>-->
        <a href="javascript:;" @click="InformtionSubmit">提交信息</a>
      </div>
      <div class="MerchantRegisterTabel" v-show="!off">

        <div class="searchProgress">
          <p v-show="statusText">
            {{statusText}}
          </p>
          <el-form ref="form" :model="searchProgressOptions" label-width="120px" style="margin-top: 100px">
            <el-form-item label="手机号码:">
              <el-input v-model="searchProgressOptions.phone" style="width: 200px" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label-width="120px">
              <el-button type="warning" @click="searchStatus">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!--服务条款协议-->
    <el-dialog
      title="服务条款协议"
      :visible.sync="contentDialog"
      width="50%"
      :close-on-click-modal="false"
    >
      <div style="position: relative">
        <div v-html="content"></div>
        <img src="../../assets/img/Chapter.png" alt="" style="position: absolute;bottom: -30px;left: 20px;width: 150px;height: 150px">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitContent">同意条款并继续</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import MerchantRegister from '@/assets/css/MerchantRegister.css'


  export default {
    name: '',
    computed: mapGetters([
      'provinceDataList',
      'cityDataList',
      'countyDataList',
      'changeMineyTypeList',
      'changeValueName',
      'changeNameID',
      'changeCompanyTypeList',
      'changeCompanyTypeValue',
      'changeCompanyID',
      'changeCooperationTypeList',
      'changeScopeOfOperationList',
      'getAreaInfoList'
    ]),
    data() {
      return {
        checked:true,
        proviceID:'',//省
        areaInfoList:[],
        proxy:'',//代理范围
        isSubmitContent: false,//点击同意提交注册
        showClose: false,
        contentDialog: false,
        failureText: '长太帅',
        statusText: '',
        disabledOff: false,
        num: 60,
        text: '获取动态密码',
        searchProgressOptions: {
          phone: '',
          verificationCode: ''
        },
        n: 0,
        off: true,
        options: [
          {
            name: '代理商注册信息'
          },
        ],
        isOff: true,
        ScopeOfOperationType: [],
        changeCooperationTypeData: [],
        newArr: [],
        ImageURL1: [],
        ImageURL2: [],
        ImageURL3: [],
        countryData: [
          {
            Country: '中国',
            value: 0
          }
        ],
        //代理商信息
        insertAgentInfo: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": {
            "sm_pi_ProxyInfoID": "",
            "sm_pi_Password": "",
            "sm_pi_Name": "",
            "sm_pi_Sex": "",
            "sm_pi_Telephone": "",
            "sm_pi_PhoneCode": "",
            "sm_pi_FixPhone": "",
            "sm_pi_QQ": "",
            "sm_pi_Email": "",
            "sm_pi_Provice": "",
            "sm_pi_City": "",
            "sm_pi_County": "",
            "sm_pi_Address": "",
            "sm_pi_RegTime": "",
            "sm_pi_RegMoney": "",
            "sm_pi_CertNo": "",
            "sm_pi_CertExpireFrom": "",
            "sm_pi_CertExpireTo": "",
            "sm_pi_CertImage": "",
            "sm_pi_FeeNo": "",
            "sm_pi_FeeImage": "",
            "sm_pi_Level":'',
            "sm_ai_ProxyParentID":'',
            "sm_pi_CompanyName":''
          },
          'areaData':[    //代理区域
          ],
          "proviceData": [],
          "cityData": [],
          'proxyType': [],
        },
        content: '',
        changeCooperationTypeDataList: [],
        ScopeOfOperationTypeList: [],
      }
    },
    created() {
      //获取区域列表
      let options = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
      };
      this.$store.dispatch('getAreaInfo',options)
      .then(()=>{},err=>{
        this.$notify({
          message: err,
          type: 'error'
        });
      });


      if(window.location.href.includes('?')){
        let id = window.location.href.split('?')[1].split('=')[1];
        this.insertAgentInfo.data.sm_ai_ProxyParentID = id;
      }
//      this.$store.commit('showLoading');
      this.initData().then(() => {
//        this.$store.commit('hideLoading')
      })
    },
    methods: {
      //点击同意协议
      consentAgreement(){
        this.contentDialog = true;
      },
      //选择等级
      changeLevel(v){
        if(!this.insertAgentInfo.data.sm_pi_CompanyName){
          this.$notify({
            message: '请输入公司名称!',
            type: 'error'
          });
          return
        }
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "partnerName":this.insertAgentInfo.data.sm_pi_CompanyName,    //合作伙伴类型名称
          "proxyLevel": v//代理商级别 (1.区域代理,2.省代理,3市代理)
        };
        this.$store.dispatch('initSelectProxy',options)
        .then(content=>{
          this.content = content;
          this.contentDialog = true;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
        this.insertAgentInfo.areaData = []
      },
      changeAreaInfo(v){
        this.areaInfoList = v
      },
      //服务条款协议提交
      submitContent() {
        this.contentDialog = false;
        this.isSubmitContent = true;
      },
      //查询状态
      searchStatus() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "phone": this.searchProgressOptions.phone,
        };
        this.$store.dispatch('getSearchStatus', options)
        .then(text => {
          this.statusText = text
        })
      },
      //获取验证码
      getCode() {
        this.disabledOff = true;
        let timer = setInterval(() => {
          this.num--;
          this.text = this.num + 's';
          if (this.num == 0) {
            clearInterval(timer);
            this.text = '重新获取验证码';
            this.disabledOff = false;
            this.num = 60;
          }
        }, 1000)
      },
      //选中菜单
      changeOption(index) {
        this.n = index;
        if (index == 1) {
          this.off = false;
        } else {
          this.off = true;
        }
      },
      async initData() {
        await this.changeCooperationTypeL()
      },
      //图片转二进制
      uploadImg(file) {
        return new Promise(function (relove, reject) {
          lrz(file)
          .then(data => {
            relove(data.base64.split(',')[1])
          })
        })
      },
      //添加图片
      uploaNode() {
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                  .then(data => {
                    console.log(data)
                    if (data) {
                      this.ImageURL1.push(data.data);
                    } else {
                      this.$notify({
                        message: '图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })
                })
              }
            })
          }
          if (this.$refs.upload1) {
            this.$refs.upload1.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                this.uploadImg(this.$refs.upload1.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                  .then(data => {
                    if (data) {
                      this.ImageURL2.push(data.data);
                    } else {
                      this.$notify({
                        message: '图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })
                })
              }
            })
          }
        }, 30)
      },
      //选择省
      changeProvince(v) {
        let getAreaProvice = {
          "areaPid": 3337
        }
        this.$store.dispatch('initProvinceData', getAreaProvice)
      },
      //选择市
      changeCity() {
        if (!this.insertAgentInfo.data.sm_pi_Provice) {
          this.$notify({
            message: '请先选择省!!',
            type: 'error'
          });
          return
        }
        let getCity = {
          "areaPid": this.insertAgentInfo.data.sm_pi_Provice ? this.insertAgentInfo.data.sm_pi_Provice : ''
        }
        this.$store.dispatch('initCityData', getCity)
      },
      changeCityData(){
        if (!this.proviceID) {
          this.$notify({
            message: '请先选择省!!',
            type: 'error'
          });
          return
        }
        let getCity = {
          "areaPid": this.proviceID ? this.proviceID : ''
        }
        this.$store.dispatch('initCityData', getCity)
      },
      //选择县
      changeCounty() {
        if (!this.insertAgentInfo.data.sm_pi_Provice && !this.insertAgentInfo.data.sm_pi_City) {
          this.$notify({
            message: '请先选择省和市!!',
            type: 'error'
          });
          return
        }
        let getCounty = {
          "areaPid": this.insertAgentInfo.data.sm_pi_City ? this.insertAgentInfo.data.sm_pi_City : ''
        }
        this.$store.dispatch('initCountyData', getCounty)
      },
      //合作类型
      changeCooperationTypeL() {
        var selectCooperationType = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "sm_cp_ID": "",
          "sm_cp_Name": "",
          "sm_cp_IsDelete": 0
        };
        return this.$store.dispatch('initChangeCooperationType', selectCooperationType)
      },
      //选择合作类型
      changeCooperationType() {
        this.newArr = [];
        let arr = this.changeCooperationTypeList;
        let typeArr = this.changeCooperationTypeDataList
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < typeArr.length; j++) {
            if (arr[i].sm_cp_Name == typeArr[j]) {
              this.newArr.push({
                sm_pt_CooperationTypeID: arr[i].sm_cp_ID,
              })
            }
          }
        }
      },
      //选中合作类型获取协议
      changeCooperation(v) {
        this.content = this.changeCooperationTypeList.filter(item => {
          if (item.sm_cp_ID == v) {
            return true
          }
          return false
        })[0].sm_cp_Agreement
        if(this.content){
          this.contentDialog = true;
        }else{
          this.$notify({
            message: '服务条款协议不存在!',
            type: 'error'
          });
        }
      },
      //信息提交
      InformtionSubmit() {
        if(this.insertAgentInfo.data.sm_pi_Telephone==''){
          this.$notify({
            message: '请输入手机号码！',
            type: 'error'
          });
          return
        }
        this.insertAgentInfo.data.sm_pi_ProxyInfoID = this.insertAgentInfo.data.sm_pi_Telephone;

        for(var i=0;i<this.newArr.length;i++){
          this.newArr[i].sm_pt_ProxyID =  this.insertAgentInfo.data.sm_pi_ProxyInfoID
        }
        if (!this.isSubmitContent) {
          this.$notify({
            message: '请选择代理级别并同意条款协议！',
            type: 'error'
          });
          return
        }
        if (isNaN(this.insertAgentInfo.data.sm_pi_RegMoney)) {
          this.$notify({
            message: '注册资金必须为数字！',
            type: 'error'
          });
          return
        }

        this.insertAgentInfo.data.sm_pi_CertImage = this.ImageURL1.join(',');
        this.insertAgentInfo.data.sm_pi_FeeImage = this.ImageURL2.join(',');
        this.insertAgentInfo.proxyType = this.newArr;
        this.$store.dispatch('initInsertProxyInfo', this.insertAgentInfo)
        .then(() => {
          this.$notify({
            message: '注册成功！！',
            type: 'success'
          });
          //跳转到进度查询
//            this.n = 1;
//            this.off = false;
        }, err => {
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //点击图标返回首页
      toHome() {
        this.$router.push({name: 'AgenciesHome'})
      }
    },
    mounted() {
      this.uploaNode()
    }
  }
</script>
<style scoped>
  .searchProgress {
    padding: 0 0 0 200px;
    height: 800px;
  }

  .searchProgress p {
    margin-bottom: 100px;
    text-align: center;
    font-size: 30px;
    padding: 100px 0 0 0;
  }

  .searchProgress .Failure {
    padding: 40px 0 60px 100px;
    font-size: 20px;
  }

  .searchProgress .Failure span {
    color: #f60;
  }

  .file {
    position: relative;
    display: inline-block;
    background: #000;
    /*border: 1px solid #99D3F5;*/
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-indent: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .MerchantRegisterTabel #ContactsTypeOfCooperationType,
  #ContactsTypeOfCooperationType1 {
    width: 100%;
  }
</style>
