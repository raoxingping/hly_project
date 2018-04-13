
export default {
  showQuitButton(state){
    state.showQuit = true;
  },
  hideQuitButton(state){
    state.showQuit = false;
  },
  //loading设置
  showLoading(state){
    state.isLoading = true;
  },
  hideLoading(state){
    state.isLoading = false;
  },
  //---------首页--------
  //国内跟团游数据
  initDomesticData(state,data){
    state.domesticDataList = data;
  },

  initAroundList(state,data){
    state.aroundList = data;
  },

  initShortLineList(state,data){
    state.shortLineList = data;
  },
  initLongLineList(state,data){
    state.longLineList = data;
  },
  initMyTourOrder(state,data){
    state.myTourOrderList = data;
  },

  initProductDetails(state, data) {
    state.productDetailsObj = data
  },
  initLineSchedule(state, obj) {
    state.lineScheduleObj = obj;
  },
  initIncludeList(state, data) {
    state.IncludeList = data
  },
  noWrapMoney(state, data) {
    state.noWrapMoneyList = data;
  },
  initLineMenu(state, data) {
    state.lineMenuList = data;
  },
  initTimesPrice(state, data) {
    state.timesPriceList = data;
  },
  initObj(state, obj) {
    state.priceObj = obj
  },
  initNewPriceDetail(state, date) {
    state.newPriceDetail = state.timesPriceList.filter(item => {
      if (item.ts_pp_Date == date) {
        return true
      }
      return false
    })[0]
  },
  // 导航套子导航
  initNavList(state,data){
    state.navList = data;
  },
//获取省
  initGetProvince(state,data){
    state.getProvinceList = data;
  },
  //获取市
  initGetCity(state,data){
    state.getCityList = data;
  },
  //获取县
  initGetCounty(state,data){
    state.getCountyList = data;
  },
  initGetLineCity(state,data){
    state.getLineCityList = data;
  },
  // //轮播图
  // initPictureList(state,data){
  //   var pictureListObj = data.filter(item=>{
  //     if( Number(item.ta_tg_ID) == 13473699 ){
  //       return true;
  //     }
  //     return false;
  //   })[0];
  //   state.pictureList = pictureListObj.ta_tg_ShowImage.split(',')
  // },

  //--------------商户注册----------
  //获取省
  initProvinceData(state,data){
    state.provinceDataList = data;
  },
  initCityData(state,data){
    state.cityDataList = data;
  },
  initCountyData(state,data){
    state.countyDataList = data;
  },
  //获取币种
  initChangeMineyType(state,data){
    state.changeMineyTypeList = data;
  },
  //根据id查币种名
  initChangeValue(state,id){
    state.changeValueName = state.changeMineyTypeList.filter(item=>{
      if( Number(item.sm_bc_ID) == id ){
        return true;
      }
      return false;
    })[0].sm_bc_Name;
  },
  //根据币种名查id
  initChangeNameID(state,id){
    state.changeNameID = state.changeMineyTypeList.filter(item=>{
      if( Number(item.sm_bc_ID) == id ){
        return true;
      }
      return false;
    })[0].sm_bc_ID;
  },
  initChangeCompanyType(state,data){
    state.changeCompanyTypeList = data;
  },
  initChangeCompanyTypeValue(state,id){
    state.changeCompanyTypeValue = state.changeCompanyTypeList.filter(item=>{
      if( Number(item.sm_cs_ID ) == id ){
        return true;
      }
      return false;
    })[0].sm_cs_Persons
  },
  initChangeCompanyID(state,id){
    state.changeCompanyID = state.changeCompanyTypeList.filter(item=>{
      if( Number(item.sm_cs_ID ) == id ){
        return true;
      }
      return false;
    })[0].sm_cs_ID
  },
  initChangeCooperationType(state,data){
    state.changeCooperationTypeList = data;
  },
  initChangeScopeOfOperation(state,data){
    state.changeScopeOfOperationList = data;
  },
  initPayStr(state,str){
    state.payStr = str
  },
  initOrderDetail(state,obj){
    state.orderDetail = obj
  },
  initCollection(state,data){
    state.collectionList = data;
  },
  initCommentMX(state,obj){
    state.commentMXObj = obj;
  },
  initCommentData(state,data){
    state.commentData = data;
    state.newCommentData = data;
  },
  updateCommentData(state,name){
    state.newCommentData = state.commentData.filter(item=>{
      if(name=='全部'){
        return true;
      }else{
        if(item.allComment==name){
          return true
        }
      }
      return false;
    })
  },
  initJob(state,data){
    state.jobList = data;
  },
  initEducation(state,data){
    state.educationList = data;
  },
  getAreaInfo(state,data){
    state.getAreaInfoList = data;
  },
  showShowFixedComment(state){
    state.showFixedComment = true
  },
  hideShowFixedComment(state){
    state.showFixedComment = false
  },
  SelectUseScoreDetailInfo(state,data){
    state.useScoreDetailInfo = data;
  },
  selectUserAllScore(state,data){
    state.userAllScoreList = data;
  },
  initTopPageList(state,data){
    state.topPageList = data;
  },
  initHotAgenciesCityList(state,data){
    state.hotAgenciesCityList = data;
  },
  initOutLongAreaList(state,data){
    state.outLongAreaList = data;
  },
  initOutShortAreaList(state,data){
    state.outShortAreaList = data;
  },
  initContryAreaList(state,data){
    state.contryAreaList = data;
  },
  initNearAreaList(state,data){
    state.nearAreaList = data;
  }
}

