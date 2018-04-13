/**
 * Created by leibo on 18/3/9.
 */
export default {
  initAdmissionTicketHomePage(state,obj){
    state.admissionTicketHomePageObj = obj
  },
  initNearList(state,data){
    state.nearList = data;
  },
  initThemeTypeNameList(state,data){
    state.themeTypeNameList = data;
  },
  setAdminNearTickeFilterObj(state,obj){
    state.adminNearTickeFilterObj = obj
  },
  initAdminNearTickeFilterObj(state,obj){
    state.adminNearTickeFilterObj = obj
  },
  initHotList(state,data){
    state.hotList = data;
  },
  initOutList(state,data){
    state.outList =data;
  },
  initCityList(state,data){
    state.cityList = data.slice(0,8);
  },
  initOutListObj(state,obj){
    state.outListObj = obj
  },
  setOutList(state,obj){
    state.outListObj = obj
  },
  initFeatured(state,data){
    state.featuredList = data;
  },
  initHotCityList(state,data){
    state.hotCityList = data;
  },
  initCooperationList(state,data){
    state.cooperationList = data;
  },
  initTopBigImageList(state,data){
    state.topBigImageList = data
  },
  //景点开放时间
  initBookKnowObj(state,obj){
    state.bookKnowObj = obj;
  },
  //景区介绍
  initGetTourSite(state,data){
    state.getTourSiteList = data;
  },
  initTicketsDetailData(state,obj){
    state.ticketsDetailData = obj
  },
  initTransportMessage(state,obj){
    state.transportMessage = obj
  },
  initTicketType_PriceMX(state,data){
    state.ticketType_PriceMXList = data;
  },
  initTicketOrderDetail(state,obj){
    state.ticketOrderDetail = obj
  },
  initAdmissionTicketMore(state,data){
    state.admissionTicketMoreList = data;
  }
}
