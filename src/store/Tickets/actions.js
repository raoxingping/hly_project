/**
 * Created by leibo on 18/3/9.
 */
import axios from 'axios';
export default {
  initAdmissionTicketHomePage({commit}, data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TtWebPage/GetTourSitePage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          // 身边景点
          let arr = data.data.nearList;
          for (var i = 0; i < arr.length; i++) {
            let arr2 = arr[i].hcTourSiteList
            for (var j = 0; j < arr2.length; j++) {
              if (arr2[j].tm_ts_ShowImage) {
                arr2[j].tm_ts_ShowImage = arr2[j].tm_ts_ShowImage.split(',')
              } else {
                arr2[j].tm_ts_ShowImage = []
              }
            }
          }
          commit('initAdminNearTickeFilterObj', data.data.nearList[0])
          // 热门目的地
          let hotList = data.data.hotList;
          for (var i = 0; i < hotList.length; i++) {
            if (hotList[i].tm_ts_ShowImage) {
              hotList[i].tm_ts_ShowImage = hotList[i].tm_ts_ShowImage.split(',')
            } else {
              hotList[i].tm_ts_ShowImage = []
            }
          }
          commit('initHotList', hotList)

          //门票首页轮播
          let topBigImageList = data.data.topBigImageList;
          for (var i = 0; i < topBigImageList.length; i++) {
            if (topBigImageList[i].tm_tbi_Image) {
              topBigImageList[i].tm_tbi_Image = topBigImageList[i].tm_tbi_Image.split(',')
            } else {
              topBigImageList[i].tm_tbi_Image = []
            }
          }

          commit('initTopBigImageList', topBigImageList)

          //境外景点
          let outList = data.data.outList;

          for (var i = 0; i < outList.length; i++) {
            let arr3 = outList[i].gtTourSiteList;
            for (var j = 0; j < arr3.length; j++) {
              if (arr3[j].tm_ts_ShowImage) {
                arr3[j].tm_ts_ShowImage = arr3[j].tm_ts_ShowImage.split(',')
              } else {
                arr3[j].tm_ts_ShowImage = []
              }
            }
          }
          //合作景区
          let cooperationList = data.data.cooperationList;
          for (var i = 0; i < cooperationList.length; i++) {
            if (cooperationList[i].tm_cs_ShowImage) {
              cooperationList[i].tm_cs_ShowImage = cooperationList[i].tm_cs_ShowImage.split(',')
            } else {
              cooperationList[i].tm_cs_ShowImage = []
            }
          }
          commit('initCooperationList', cooperationList)
          //境外景点初始化景点obj
          commit('initOutListObj', outList[0])

          commit('initOutList', outList)
          //热门城市
          commit('initHotCityList', data.data.hotCityList.slice(0, 6))

          commit('initAdmissionTicketHomePage', data.data);
          commit('initFeatured', data.data.nearList[0].hcTourSiteList)

          commit('initNearList', data.data.nearList);
          commit('initThemeTypeNameList', data.data.nearList[0].themeTypeNameList.slice(0, 6));
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //获取省
  initProvice(store, data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //---------------------   门票 ----------------

  // //预定需知景区开放时间
  // initBookKnowObj({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/BookKnow/GetBookKnowList', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //     .then(data => {
  //       var data = data.data;
  //       if (Number(data.resultcode) == 200) {
  //         commit('initBookKnowObj', data.data)
  //         relove(data.resultcontent)
  //       }else{
  //         reject(data.resultcontent)
  //       }
  //     })
  //   })
  // },
  // //景区介绍
  // initGetTourSite({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/TourSite/GetTourSite', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //     .then(data => {
  //       var data = data.data;
  //       if (Number(data.resultcode) == 200) {
  //         commit('initGetTourSite', data.data)
  //         relove()
  //       }else{
  //         reject(data.resultcontent)
  //       }
  //     })
  //   })
  // },
  //景点详情数据
  initTicketsDetailData({commit}, data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TtWebPage/Detail', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          //预定需知景区开放时间
          commit('initBookKnowObj', data.data.tm_BookKnow)
          if (data.data.tm_ts_ShowImage) {
            data.data.tm_ts_ShowImage = data.data.tm_ts_ShowImage.split(',')
          }
          commit('initTicketsDetailData', data.data);
          commit('initTransportMessage', data.data.tm_TransportMessage)
          commit('initTicketType_PriceMX', data.data.tm_TourSite_TicketTypeMX)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //门票立即预订日期
  initTicketsReserveDate({commit}, data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TicketTypePrice/GetTicketTypePriceList', JSON.stringify(data),      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //门票预订立即支付
  initTicketPay({commit}, data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmOrder/MakeOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //门票微信支付订单
  ticketWechatPayWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmOrder/PayOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //门票订单详情
  initTicketOrderDetail(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmOrder/GetOrderInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          store.commit('initTicketOrderDetail',data.data[0])
          relove(data.data[0])
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //门票注销订单
  ticketCancelOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmOrder/CancelOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化景点列表
  initAdmissionTicketMore({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TtWebPage/ListPage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initAdmissionTicketMore',data.data)
          relove(Number(data.totalRows))
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
