import axios from 'axios';

export default {
  //图片上传
  uploadAdminImgs(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/PostImage/PostToService', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
        })
    })
  },

  //-------------------首页-----------------
  //首页内容
  initAllHomeData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TradeGood/GetTravelPage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          let resulte = data.data;
          let DomesticDataList = resulte.contryList;
          for(var i=0;i<DomesticDataList.length;i++){
            if(DomesticDataList[i].ta_tg_ShowImage){
              DomesticDataList[i].oneImg = DomesticDataList[i].ta_tg_ShowImage.split(',')[0]
            }else{
              DomesticDataList[i].oneImg = []
            }
          }
          let AroundList = resulte.nearList;
          for(var i=0;i<AroundList.length;i++){
            if(AroundList[i].ta_tg_ShowImage){
              AroundList[i].oneImg = AroundList[i].ta_tg_ShowImage.split(',')[0]
            }else{
              AroundList[i].oneImg = []
            }
          }
          let ShortLineList = resulte.outShortList;
          for(var i=0;i<ShortLineList.length;i++){
            if(ShortLineList[i].ta_tg_ShowImage){
              ShortLineList[i].oneImg = ShortLineList[i].ta_tg_ShowImage.split(',')[0]
            }else{
              ShortLineList[i].oneImg = []
            }
          }
          let LongLineList = resulte.outLongList;
          for(var i=0;i<LongLineList.length;i++){
            if(LongLineList[i].ta_tg_ShowImage){
              LongLineList[i].oneImg = LongLineList[i].ta_tg_ShowImage.split(',')[0]
            }else{
              LongLineList[i].oneImg = []
            }
          }
          //轮播图
          let topPageList = resulte.topPageList;
          for(var i=0;i<topPageList.length;i++){
            for(var j=0;j<topPageList[i].length;j++){
              if(topPageList[i][j].ts_tsi_Image){
                topPageList[i][j].ts_tsi_Image = topPageList[i][j].ts_tsi_Image.split(',')
              }else{
                topPageList[i][j].ts_tsi_Image = []
              }
            }
          }
          //热门城市
          commit('initHotAgenciesCityList',resulte.hotCityList)
          //出境长线
          commit('initOutLongAreaList',resulte.outLongAreaList)
          //出境短线
          commit('initOutShortAreaList',resulte.outShortAreaList)
          //国内跟团
          commit('initContryAreaList',resulte.contryAreaList)
          //周边跟团
          commit('initNearAreaList',resulte.nearAreaList)

          commit('initTopPageList',topPageList)
          commit('initDomesticData', DomesticDataList)
          commit('initAroundList', AroundList)
          commit('initShortLineList', ShortLineList)
          commit('initLongLineList',LongLineList)
          relove()
        }else {
          reject(data.resultcontent)
        }
      })
    })
  },

  //产品详情
  initProductDetails({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/GetTradeLineByGood', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              if (!resulte[i].ts_tg_IntroduceReason) {
                resulte[i].ts_tg_IntroduceReason = '<span></span>'
              }
            }
            resulte.money = data.datastring;

            commit('initProductDetails', resulte)
            relove(resulte.ts_pt_ID)
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //产品线路
  initLineSchedule({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/GetTradeLineByGood', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            let resulte2 = resulte.prepareList
            for (let i = 0; i < resulte2.length; i++) {
              if (resulte2[i].ts_pt_ShowImage) {
                resulte2[i].ts_pt_ShowImageList = resulte2[i].ts_pt_ShowImage.split(',')
              } else {
                resulte2[i].ts_pt_ShowImageList = [];
              }
            }
            commit('initLineSchedule', resulte);
            let arr = data.data.feeInfoList.filter(item => {
              if (Number(item.ts_fi_Include) == 0) {
                return true
              }
              return false
            })
            commit('initIncludeList', arr);

            let arr2 = data.data.feeInfoList.filter(item => {
              if (Number(item.ts_fi_Include) == 1) {
                return true
              }
              return false
            })
            commit('noWrapMoney', arr2);
            relove()
          }else {
            reject(data.resultcontent)
          }

        })
    })
  },
  //线路菜单
  initLineMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LineMenu/GetLineMenuInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            for (var i = 0; i < data.data.length; i++) {
              if (data.data[i].menuName == '行程线路') {
                data.data[i].isOff = true
              } else {
                data.data[i].isOff = false
              }
            }
            commit('initLineMenu', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //
  initTimesPrice({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/GetProductPrice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data;
            commit('initTimesPrice', resulte)
            relove(data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //导航套子导航
  initNavList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/System/GetSystemMenuInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initNavList', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取城市
  initGetLineCity({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/GetLineCity', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initGetLineCity', data.data);
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  // //轮播图
  // initPictureList({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/TradeGood/GetTopShow', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //       .then(data => {
  //         var data = data.data;
  //         console.log(data)
  //         if (Number(data.resultcode) == 200) {
  //           commit('initPictureList', data.data);
  //           relove()
  //         }
  //       })
  //   })
  // },


//---------------------商户注册---------------
  //获取省
  initProvinceData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initProvinceData', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取市
  initCityData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCityData', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取县
  initCountyData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCountyData', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询结算币种
  initChangeMineyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/BalanceCurrency/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeMineyType', data.data)
            relove(data.data)
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //公司规模
  initChangeCompanyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CompanySize/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCompanyType', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //类型
  initChangeCooperationType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CooperationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCooperationType', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //经营范围
  initChangeScopeOfOperation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeScope/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeScopeOfOperation', data.data)
            relove()
          }else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加供应商提交
  initSubmitInformtionObj({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AgentInfo/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode) == 200){
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //提交订单
  submitOrder(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelOrder/MakeOrder', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove(data.data)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //微信支付生成二维码字符串
  payWechat({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://wechat.1000da.com.cn/Order/MakeWechatQRCode', JSON.stringify(data), {
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
  //获取微信支付状态
  getOrderStatus(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://wechat.1000da.com.cn/Order/QueryOrderStatus', JSON.stringify(data), {
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
  //初始化用户订单
  initMyTourOrder({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/UserOrder/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initMyTourOrder',data.data)
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改用户信息
  saveUserInfo(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UserInfo/Update', JSON.stringify(data), {
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
  //支付订单
  wechatPayWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TravelOrder/PayOrder', JSON.stringify(data), {
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
  //获取余票
  GetFreeSeat(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/GetFreeSeat', JSON.stringify(data), {
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
  //删除订单
  DeleteOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UserOrder/DeleteStatus', JSON.stringify(data), {
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
  //订单详情
  initOrderDetail({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TravelOrder/GetOrderInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initOrderDetail',data.data[0])
          relove(data.data[0])
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //取消订单
  CancelOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UserOrder/Delete', JSON.stringify(data), {
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
  //回去进度状态
  getSearchStatus(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AgentInfo/ProgressStatus', JSON.stringify(data), {
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
  //添加收藏
  addCollection({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/MyCollect/Insert', JSON.stringify(data), {
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
  //查询用户收藏
  initCollection({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/MyCollect/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initCollection',data.data);
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除收藏
  deleteMyCollection(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/MyCollect/Delete', JSON.stringify(data), {
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
  //获取评分类型
  initRatingType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ScoreType/Select', JSON.stringify(data), {
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
  //发表评论
  addComment(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Comment/Insert', JSON.stringify(data), {
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
  //获取评论信息
  initCommentMX({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Comment/SelectMX', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initCommentMX',data.data)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //获取用户评论list
  initCommentData({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Comment/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          let resulte = data.data;
          for(var i=0;i<resulte.length;i++){
            if(resulte[i].comment.ts_ct_Image){
              resulte[i].comment.ts_ct_Image = resulte[i].comment.ts_ct_Image.split(',')
            }else{
              resulte[i].comment.ts_ct_Image = []
            }
            let arr = resulte[i].satisfyList
            for(var j =0;j<arr.length;j++){
              if(arr[j].satistyState.includes('不满意')){
                resulte[i].allComment = '不满意';
                break
              }else if(arr[j].satistyState.includes('一般')){
                resulte[i].allComment = '一般'
                break
              }else{
                resulte[i].allComment = '满意'
              }
            }
          }
          commit('initCommentData',resulte)
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化个人资料职业
  initJob({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Job/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initJob',data.data)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化个人资料学历
  initEducation({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Education/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initEducation',data.data)
          relove(data.resultcontent)
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //代理商注册
  initInsertProxyInfo(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProxyInfo/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove()
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //获取区域
  getAreaInfo({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ChinaArea/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          commit('getAreaInfo',data.data)
          relove()
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //查询供应商协议
  initAgreementContent(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/CooperationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove(data.data[0].sm_cp_Agreement)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //消费积分
  InsertUseScoreDetailInfo(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UseScoreDetail/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //用户积分
  SelectUseScoreDetailInfo({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UseScoreDetail/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          commit('SelectUseScoreDetailInfo',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //用户总积分
  selectUserAllScore({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/UseScoreDetail/SelectTotal', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          commit('selectUserAllScore',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //代理商注册获取协议
  initSelectProxy(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/CooperationType/SelectProxy', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data=>{
        var data = data.data;
        if(Number(data.resultcode) == 200){
          relove(data.data)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}
