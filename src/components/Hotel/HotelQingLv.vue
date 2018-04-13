<template>
  <div>
    <!--青旅酒店头部面板-->
    <!--头部-->
    <div class="parentChildHeaderWrap">
      <div class="parentChildHeader clearfix">
        <h2>
          <img src="../../assets/img/center.png" height="60" width="60">
          <strong>青旅酒店</strong>
        </h2>
        <router-link to="/Comment/HotelHomePage">返回首页</router-link>
      </div>
    </div>
    <!--内容部分-->
    <div class="content">
      <!--南京-->
      <div class="nanjing">
        <div class="HotelHouse">
          <div class="house" v-for="item in qLCityData" style="cursor: pointer" @click="clickQLCityData(item.ht_ht_hotelID)">
            <img  v-lazy="item.ht_ht_ImageUrl">
            <p class="houseName">{{item.ht_ht_HotelName}}</p>
            <div class="houseValue">￥<span>{{item.ht_ht_RecommendPrice}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--苏州-->
      <div class="suzhou">
        <div class="HotelHouse">
          <div class="house" v-for="item in szCityData" style="cursor: pointer"  @click="clickQLCityData(item.ht_ht_hotelID)">
            <img  v-lazy="item.ht_ht_ImageUrl">
            <p class="houseName">{{item.ht_ht_HotelName}}</p>
            <div class="houseValue">￥<span>{{item.ht_ht_RecommendPrice}}</span>起<button>立即购买</button></div>
          </div>
          </div>
        </div>
      <!--厦门-->
      <div class="xiamen">
        <div class="HotelHouse">
          <div class="house" v-for="item in xMCityData"  style="cursor: pointer"  @click="clickQLCityData(item.ht_ht_hotelID)">
            <img  v-lazy="item.ht_ht_ImageUrl">
            <p class="houseName">{{item.ht_ht_HotelName}}</p>
            <div class="houseValue">￥<span>{{item.ht_ht_RecommendPrice}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--北京-->
      <div class="beijing">
        <div class="HotelHouse">
          <div class="house" v-for="item in bGCityData"  style="cursor: pointer"  @click="clickQLCityData(item.ht_ht_hotelID)">
            <img  v-lazy="item.ht_ht_ImageUrl">
            <p class="houseName">{{item.ht_ht_HotelName}}</p>
            <div class="houseValue">￥<span>{{item.ht_ht_RecommendPrice}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--成都-->
      <div class="chengdu">
        <div class="HotelHouse">
          <div class="house" v-for="item in cDCityData"  style="cursor: pointer"  @click="clickQLCityData(item.ht_ht_hotelID)">
            <img  v-lazy="item.ht_ht_ImageUrl">
            <p class="houseName">{{item.ht_ht_HotelName}}</p>
            <div class="houseValue">￥<span>{{item.ht_ht_RecommendPrice}}</span>起<button>立即购买</button></div>
          </div>
        </div>
      </div>
      <!--更多-->
      <!--推荐-->
      <!--<div class="more">-->
        <!--<div class="moreHotel">-->
          <!--<div v-for="image in moreImg" class="imgBox"><img :src="image.srcs"></div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      data(){
        return{
          id:''
        }
      },
      computed:mapGetters([
        'qLCityData',
        'szCityData',
        'xMCityData',
        'bGCityData',
        'cDCityData'
      ]),
      created(){
        this.id = this.$route.params.id
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
           //南京
            let options = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              //"ht_it_ID":"1",//推荐类型
              "ht_tt_ID":this.id,//主题
              //"ht_hd_ID":"1",//设施
//            "ht_rh_ID":"",//房间设施
              "sm_af_AreaID":'108', //城市
              "page":"1", //页面编号  默认为 1
              "rows":"6",//单页显示数据数量
            };
            await this.$store.dispatch('initCityData',options)
           //苏州
           let Soptions = {
             "loginUserID": "huileyou",
             "loginUserPass": "123",
             "operateUserID": "",
             "operateUserName": "",
             "pcName": "",
             "ht_tt_ID":this.id,//主题
             "sm_af_AreaID":'112', //城市
             "page":"1", //页面编号  默认为 1
             "rows":"6",//单页显示数据数量
           };
           await this.$store.dispatch('initSzCityData',Soptions)
           //厦门
           let XMoptions = {
             "loginUserID": "huileyou",
             "loginUserPass": "123",
             "operateUserID": "",
             "operateUserName": "",
             "pcName": "",
             "ht_tt_ID":this.id,//主题
             "sm_af_AreaID":'150', //城市
             "page":"1", //页面编号  默认为 1
             "rows":"6",//单页显示数据数量
           };
           await this.$store.dispatch('initXMCityData',XMoptions)

           //北京
           let BGoptions = {
             "loginUserID": "huileyou",
             "loginUserPass": "123",
             "operateUserID": "",
             "operateUserName": "",
             "pcName": "",
             "ht_tt_ID":this.id,//主题
             "sm_af_AreaID":'35', //城市
             "page":"1", //页面编号  默认为 1
             "rows":"6",//单页显示数据数量
           };
           await this.$store.dispatch('initBGCityData',BGoptions)

           //北京
           let CDoptions = {
             "loginUserID": "huileyou",
             "loginUserPass": "123",
             "operateUserID": "",
             "operateUserName": "",
             "pcName": "",
             "ht_tt_ID":this.id,//主题
             "sm_af_AreaID":'269', //城市
             "page":"1", //页面编号  默认为 1
             "rows":"6",//单页显示数据数量
           };
           await this.$store.dispatch('initCDCityData',CDoptions)
        },
        //点击南京下的酒店跳转
        clickQLCityData(id){
          this.$router.push({name:'HotelDetalis', params: {id: id}})
        }
      }
    }
</script>

<style lang="less" scoped>
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
  .header{
    background: url("../../assets/img/qinglv.jpg") no-repeat center;
    height: 722px;
  }
  .content{
    .nanjing{
      position: relative;
      background: url("../../assets/img/nanjing.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseName:hover{
            color: #f60;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    /*//苏州*/
    .suzhou{
      position: relative;
      background: url("../../assets/img/suzhou.jpg") no-repeat center;
      height: 800px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseName:hover{
            color: #f60;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    /*//厦门*/
    .xiamen{
      position: relative;
      background: url("../../assets/img/xiamen.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseName:hover{
            color: #f60;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    /*//北京*/
    .beijing{
      position: relative;
      background: url("../../assets/img/beijing.jpg") no-repeat center;
      height: 820px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseName:hover{
            color: #f60;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    /*//成都*/
    .chengdu{
      position: relative;
      background: url("../../assets/img/chengdu.jpg") no-repeat center;
      height: 830px;
      .HotelHouse{
        height: 554px;
        width: 735px;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-30%);
        .house{
          height: 260px;
          width: 230px;
          margin-left: 10px;
          float: left;
          margin-top: 15px;
          img{
            width: 230px;
            height: 175px;
          }
          .houseName{
            margin-top: 10px;
            font-family: "Microsoft YaHei";
            font-size: 14px;
          }
          .houseName:hover{
            color: #f60;
          }
          .houseValue{
            margin-top: 14px;
            span{
              font-family: "Microsoft YaHei";
              font-size: 20px;
              color: #FA7305;
            }
            button{
              background: #FA7305;
              color: #fff;
              height: 30px;
              font-size: 20px;
              float: right;
              font-family: "Microsoft YaHei";
              margin-right: 10px;
              font-weight: bold;
              padding: 2px 8px 2px 8px;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
    /*//更多*/
    .more{
      position: relative;
      background: url("../../assets/img/more.jpg") no-repeat center;
      height: 673px;
      .moreHotel{
        width: 1020px;
        height: 180px;
        margin: 0 auto;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        .imgBox{
          width: 243px;
          height: 190px;
          float: left;
          margin: 5px;
          img{
            width:243px;
            height:190px;
            margin:0;
          }
        }
      }
    }
  }
</style>
