<template>

  <div>
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2>
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>古镇酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <div id="AncientTownHotel">
      <!--古镇游content-->
      <div class="header">
        <div class="HotelVoucher">
          <div class="VoucherNumber">
            <input type="text" placeholder="输入手机号 领取优惠券">
            <button>领取</button>
          </div>
        </div>
      </div>
      <!--热销古镇-->
      <div class="HotSaleTown">
        <div class="HotelContent">
          <ul>
            <li v-for="item,index in ancientTowns" :class="{active:index==n}" @click="clickAncientTowns(index,item)">{{item.name}}</li>
          </ul>
          <!--酒店图片展示-->
          <dl class="HotelPicture">
            <dd v-for="item in wZCityHotelData" @click="clickCityData(item.ht_ht_hotelID)" style="cursor: pointer"><img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
              <p>{{item.ht_ht_HotelName}}</p>
              <div class="HotelPrice">￥<span>{{item.ht_ht_RecommendPrice}}</span>起
                <button>立即购买</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!--江南水乡-->
      <div class="DevinReuter">
        <div class="HotelContent">
          <ul>
            <li v-for="item,index in devinReuters"  :class="{active:index==m}" @click="clickDevinReuters(index,item)">{{item.name}}</li>
          </ul>
          <!--酒店图片展示-->
          <dl class="HotelPicture">
            <dd v-for="item in jZCityHotelData" @click="clickCityData(item.ht_ht_hotelID)" style="cursor: pointer"><img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
              <p>{{item.ht_ht_HotelName}}</p>
              <div class="HotelPrice">￥<span>{{item.ht_ht_RecommendPrice}}</span>起
                <button>立即购买</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!--吃货天堂-->
      <div class="EattingHeaven">
        <div class="HotelContent">
          <ul>
            <li v-for="item,index in eattingHeavens"   :class="{active:index==a}" @click="clickEattingHeavens(index,item)">{{item.name}}</li>
          </ul>
          <!--酒店图片展示-->
          <dl class="HotelPicture">
            <dd v-for="item in cHCityHotelData" @click="clickCityData(item.ht_ht_hotelID)" style="cursor: pointer"><img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
              <p>{{item.ht_ht_HotelName}}</p>
              <div class="HotelPrice">￥<span>{{item.ht_ht_RecommendPrice}}</span>起
                <button>立即购买</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!--悠闲古城-->
      <div class="LeisureCity">
        <div class="HotelContent">
          <ul>
            <li v-for="item,index in leisureCitys"  :class="{active:index==b}" @click="clickLeisureCitys(index,item)">{{item.name}}</li>
          </ul>
          <!--酒店图片展示-->
          <dl class="HotelPicture">
            <dd v-for="item in yXCityHotelData" @click="clickCityData(item.ht_ht_hotelID)" style="cursor: pointer"><img v-lazy="item.ht_ht_ImageUrl" width="312" height="235" alt="">
              <p>{{item.ht_ht_HotelName}}</p>
              <div class="HotelPrice">￥<span>{{item.ht_ht_RecommendPrice}}</span>起
                <button>立即购买</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!--&lt;!&ndash;其他推荐&ndash;&gt;-->
      <!--<div class="OtherRecommend">-->
      <!--&lt;!&ndash;其他推荐的展示&ndash;&gt;-->
      <!--<div class="TextShow">-->
      <!--<a href="#" v-for="text in texts">{{text.show}}</a>-->
      <!--</div>-->
      <!--</div>-->
      <!--快捷导航-->
      <!--<div class="QuickNav">-->
      <!--&lt;!&ndash;<img src="../../assets/img/SidebarAnchor.png" alt="">&ndash;&gt;-->
      <!--<ul>-->
      <!--<li v-for="nav in navs">{{nav.name}}</li>-->
      <!--</ul>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        a:0,
        m:0,
        n:0,
        b:0,
        //热销古镇
        ancientTowns: [
          {name: '乌镇',cityID:124,type:26},
          {name: '西塘',cityID:124,type:26},
          {name: '丽江',cityID:304,type:26},
          {name: '大理',cityID:311,type:26},
          {name: '宏村',cityID:140,type:26}
        ],
        //江南水乡
        devinReuters: [
          {
            name: '周庄',
            cityID:112,
            type:27
          },
          {
            name: '朱家角',
            cityID:107,
            type:27
          },
          {
            name: '同里',
            cityID:112,
            type:27
          },
          {
            name: '南浔',
            cityID:125,
            type:27
          },
          {
            name: '凤凰',
            cityID:230,
            type:27
          }
        ],
        //吃货天堂
        eattingHeavens: [
          {
            name: '香格里拉',
            cityID: 314,
            type: 28
          },
          {
            name: '安昌',
            cityID: 126,
            type: 28
          },
          {
            name: '平遥',
            cityID: 54,
            type: 28
          },
          {
            name: '泸沽湖',
            cityID: 180,
            type: 28
          },
          {
            name: '黄姚',
            cityID: 262,
            type: 28
          }
        ],
        //悠闲古城
        leisureCitys: [
          {
            name: '阳朔',
            cityID: 254,
            type: 29
          },
          {
            name: '婺源',
            cityID: 168,
            type: 29
          },
          {
            name: '束河',
            cityID: 304,
            type: 29
          },
          {
            name: '上里',
            cityID: 284,
            type: 29
          },
          {
            name: '高淳',
            cityID: 262,
            type: 29
          }
        ],
        //其他推荐->酒店地址
        texts: [
          {show: '乌镇'}, {show: '西塘'}, {show: '绍兴'}, {show: '南浔'}, {show: '木渎'}, {show: '周庄'}, {show: '锦溪'}, {show: '同里'}, {show: '徽州古城'}, {show: '宏村'}, {show: '永定'}, {show: '婺源'}, {show: '丽江'}, {show: '大理'}, {show: '束河'}, {show: '香格里拉'}, {show: '和顺'}, {show: '阳朔'}, {show: '黄姚'}, {show: '凤凰'}, {show: '康定'}, {show: '阆中'}, {show: '雅安'}
        ],
        //快捷导航
        navs: [
          {name: '热销古镇'}, {name: '江南水乡'}, {name: '吃货天堂'}, {name: '悠闲古城'}
        ]
      }
    },
    computed:mapGetters([
      'wZCityHotelData',
      'jZCityHotelData',
      'cHCityHotelData',
      'yXCityHotelData'
    ]),
    created(){
      this.initData().then(()=>{
      },err=>{
        this.$notify({
          message:err,
          type: 'error'
        });
      })
    },
    methods:{

      async initData(){
        await this.initWZData();
        await this.initJNData();
        await this.initCHData();
        await this.initYXData();
      },
      //江南
      initJNData(name,type,cityID){
        //初始化周庄对应酒店
        let JNOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":type?type:27,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          ht_ht_HotelName:name?name:'周庄',
          "sm_af_AreaID":cityID?cityID:'112', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        return this.$store.dispatch('initJZCityHotelData',JNOptions)
      },
      //吃货
      initCHData(name,type,cityID){
          //初始化香格里拉对应酒店
        let CHOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":type?type:28,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          ht_ht_HotelName:name?name:'香格里拉',
          "sm_af_AreaID":cityID?cityID:'314', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        return this.$store.dispatch('initCHCityHotelData',CHOptions)
      },
      //悠闲
      initYXData(name,type,cityID){
        //初始化阳朔对应酒店
        let YXOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":type?type:29,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          ht_ht_HotelName:name?name:'阳朔',
          "sm_af_AreaID":cityID?cityID:'254', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
        return this.$store.dispatch('initYXCityHotelData',YXOptions)
      },
      //古镇
      initWZData(name,type,cityID){
        //初始化乌镇对应酒店
        let WZOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID":type?type:26,//推荐类型
          //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
          ht_ht_HotelName:name?name:'乌镇',
          "sm_af_AreaID":cityID?cityID:'124', //城市
          "page":"1", //页面编号  默认为 1
          "rows":"6",//单页显示数据数量
        };
         return this.$store.dispatch('initWZCityHotelData',WZOptions)
      },
      //点击古镇
      clickAncientTowns(index,item){
        this.n = index;
        this.initWZData(item.name,item.type,item.cityID)
      },
      //点击江南
      clickDevinReuters(index,item){
        this.m = index;
        this.initJNData(item.name,item.type,item.cityID)
      },
      clickEattingHeavens(index,item){
        this.a = index;
        this.initCHData(item.name,item.type,item.cityID)
      },
      clickLeisureCitys(index,item){
        this.b = index;
        this.initYXData(item.name,item.type,item.cityID)
      },
      //点击酒店跳转
      clickCityData(id){
        this.$router.push({name:'HotelDetalis', params: {id: id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  /*头部*/
  .parentChildHeaderWrap {
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
  }

  .parentChildHeader {
    width: 1000px;
    margin: 0 auto;
  }

  .parentChildHeader > h2 {
    float: left;
  }

  .parentChildHeader > h2:hover {
    cursor: pointer;
  }

  .parentChildHeader strong {
    font: bold 30px/1 "宋体";
    vertical-align: bottom;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 5px;
  }

  .parentChildHeader > a {
    float: right;
    font: 16px/2 "微软雅黑";
    padding: 0 15px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    border: 1px solid #999;
    color: #999;
    margin-top: 10px;
  }

  .parentChildHeader > a:hover {
    border-color: #f60;
    color: #f60;
  }

  /*头部结束*/
  /*//古镇游顶部面板，酒店券领取*/
  .header {
    background: url('../../assets/img/header.jpg') no-repeat -120px 0;
    height: 604px;
    .HotelVoucher {
      background-color: rgba(0, 0, 0, .6);
      width: 860px;
      height: 150px;
      margin: 0px auto;
      position: relative;
      top: 70%;
      .VoucherNumber {
        height: 40px;
        width: 710px;
        margin: 0px auto;
        position: relative;
        top: 60%;
        input {
          font-size: 18px;
          width: 580px;
          height: 40px;
          padding-left: 20px;
          color: rgba(0, 0, 0, .65);
        }
        button {
          width: 110px;
          font-size: 20px;
          font-weight: bold;
          font-family: 华文楷体;
          background-color: #e58754;
          color: #fff;
          height: 40px;
          outline: none;
          border: none;
        }
      }
    }
  }

  /*//旅游酒店地址*/
  #AncientTownHotel {
    /*//热销古镇*/
    .HotSaleTown {
      background: url("../../assets/img/HotSaleTown.jpg") no-repeat -120px 0;
      height: 681px;
      /*//热销酒店中的house*/
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            width: 180px;
            height: 40px;
            line-height:40px;
            float: left;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 22px;
            font-weight: bold;
          }
          li.active{
            background: url(http://img4.tuniucdn.com/hotel-gzzt160507/choosen.png);
            color: #fff;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //江南水乡
    .DevinReuter {
      background: url("../../assets/img/DevinReuter.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 22px;
            font-weight: bold;
          }
          li.active{
            background: url(http://img4.tuniucdn.com/hotel-gzzt160507/choosen.png);
            color: #fff;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //吃货天堂
    .EattingHeaven {
      background: url("../../assets/img/EattingHeaven.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 22px;
            font-weight: bold;
          }
          li.active{
            background: url(http://img4.tuniucdn.com/hotel-gzzt160507/choosen.png);
            color: #fff;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 450px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //悠闲古城
    .LeisureCity {
      background: url("../../assets/img/LeisureCity.jpg") no-repeat -120px 0;
      height: 685px;
      .HotelContent {
        width: 1000px;
        height: 420px;
        margin: 0px auto;
        position: relative;
        top: 30%;
        ul {
          li {
            float: left;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-left: 10px;
            font-family: 华文楷体;
            font-size: 22px;
            font-weight: bold;
          }
          li.active{
            background: url(http://img4.tuniucdn.com/hotel-gzzt160507/choosen.png);
            color: #fff;
          }
        }
        .HotelPicture {
          width: 1000px;
          height: 470px;
          dd {
            width: 312px;
            height: 380px;
            float: left;
            background-color: #f7f7f7;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 28px;
            p {
              height: 50px;
              font-size: 22px;
              margin-top: 3%;
              margin-left: 10px;
              &:hover {
                color: #f80;
              }
            }
            div {
              font-size: 16px;
              margin-top: 10%;
              margin-left: 10px;
              span {
                font-size: 22px;
              }
              button {
                background-color: #1d4970;
                height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #fff;
                float: right;
                margin-right: 5px;
                padding-right: 10px;
                padding-left: 10px;
                &:hover {
                  opacity: .9;
                }
              }
            }
          }
        }
      }
    }
    //其他推荐
    .OtherRecommend {
      background: url("../../assets/img/OtherRecommend.jpg") no-repeat -120px 0;
      height: 500px;
      .TextShow {
        width: 1000px;
        height: 260px;
        position: relative;
        top: 42%;
        margin: 0px auto;
        a {
          color: #444;
          display: inline-block;
          width: 166px;
          height: 30px;
          line-height: 30px;
          margin-top: 10px;
          text-align: center;
          font-family: "Microsoft YaHei";
          font-size: 24px;
          text-decoration: none;
        }
      }
    }
    .QuickNav {
      width: 100px;
      height: 230px;
      position: fixed;
      right: 200px;
      top: 330px;
      ul {
        position: fixed;
        top: 374px;
        right: 194px;
        li {
          font-family: "Microsoft YaHei";
          font-size: 20px;
          width: 106px;
          margin-top: 7px;
          height: 30px;
          color: #fff;
          border-bottom: 1px solid;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
</style>
