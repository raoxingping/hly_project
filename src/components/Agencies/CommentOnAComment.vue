<template>
  <div class="commentWrap">
    <div class="commentHeaderWrap" style="cursor: pointer">
      <router-link tag="div" class="commentHeader" to="/agenciesHome">
        <img src="../../assets/img/center.png" width="60" height="60">
        <strong>添加评论</strong>
      </router-link>
    </div>
    <!--<router-link tag="div" class="commentHeader">-->
      <!--<img src="../../assets/img/center.png" width="60" height="60">-->
      <!--<strong>添加评论</strong>-->
    <!--</router-link>-->
    <div class="commentBox">
      <!--头像昵称-->
      <div class="HeadPortrait clearfix">
        <img src="../../assets/img/center.png" width="60" height="60">
        <strong>惠乐游</strong>
      </div>
      <!--评论内容-->
      <div class="commentContent">
        <el-input
          type="textarea"
          :rows="8"
          placeholder="请输入内容"
          v-model="addOptions.data.ts_ct_Content">
        </el-input>
        <!--<textarea id="commentContent" v-model="addOptions.data.ts_ct_Content"></textarea>-->
      </div>
      <!--上传图片-->
      <div class="uploadPicture">
        <a href="javascript:;" class="file">上传图片
          <input type="file" name="" ref="upload" accept="image/*" multiple>
        </a>
        <div class="uploadPictureBox clearfix">
          <img
            style="display: block"
            v-for="item in ImageURL"
            v-lazy="item"
            width="100"
            height="100"
            v-show="ImageURL.length"
          >
        </div>
      </div>
      <!--评分-->
      <ul class="scoreList">
        <li v-for="item,index in typeList">
          <span>{{item.sm_st_CommentType}}:</span>
          <el-rate
            v-model="item['type'+index]"
            show-text>
          </el-rate>
        </li>
        <!--<li>-->
          <!--<span>总体评价:</span>-->
          <!--<el-rate-->
            <!--v-model="AllFraction"-->
            <!--show-text>-->
          <!--</el-rate>-->
        <!--</li>-->
      </ul>
      <!--提交-->
      <div class="submitComment clearfix">
        <el-button type="primary"  @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        typeList:[],
        TourGuideService: null,
        Scheduling: null,
        CateringAccommodation: null,
        TravelTraffic: null,
        ImageURL: [],
        user:{},
        addOptions : {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ts_ct_UserInfoID": '',
            "ts_ct_GoodID": '',
            "ts_ct_Content": "",
            "ts_ct_AfterContent": "",
            "ts_ct_Image": ""
          },
          "commentScoreJson": []
        }
      }
    },
    created(){
      this.user = JSON.parse(sessionStorage.getItem('user'));
      //获取评分类型
      let getTypeOptions = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        //"ID": 3,//评分类型编号
        //"commentTypeName":"",//评分类型名称
        //"page": 1,
        //"rows":2
      };
      this.$store.dispatch('initRatingType',getTypeOptions)
      .then(data=>{
        for(var i=0;i<data.length;i++){
          data[i]['type'+i] = null
        }
        this.typeList = data;
      },err=>{
        this.$notify({
          message: err,
          type: 'error'
        });
      })
    },
    methods: {
      toHome(){
        this.$router.push({name:'AgenciesHome'})
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
                      if (data) {
                        this.ImageURL.push(data.data);
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
      //提交
      submit(){
        for(var i=0;i<this.typeList.length;i++){
          this.addOptions.commentScoreJson.push({
            ts_cs_ScoreTypeID:this.typeList[i].sm_st_ID,
            ts_cs_Score:this.typeList[i]['type'+i],
          })
        }
        this.addOptions.data.ts_ct_GoodID = this.$route.params.id;
        this.addOptions.data.ts_ct_UserInfoID = this.user.ui_ID;
        this.addOptions.data.ts_ct_Image = this.ImageURL.join(',');
        this.$store.dispatch('addComment',this.addOptions)
        .then(suc=>{
          this.$notify({
            message: suc,
            type: 'success'
          });

          //积分添加
          let options = {
            "loginUserID": "huileyou",//授权码
            "loginUserPass": "123",//授权密码
            "operateUserID": "",//操作员编码
            "operateUserName": "",//操作员名称
            "pcName": "",//机器码
            "userCode": this.user.ui_UserCode,//用户编码
//            "costMoney": orderInfo.adultPrice,//消费金额  如果是其它类型可留空
            "scoreTypeID": 3//0消费积分  1消费次数积分 2分享次数 3评论收录积分
          };
          this.$store.dispatch('InsertUseScoreDetailInfo',options)
          .then(()=>{
            //评论成功
            this.$router.push({name:'AgenciesDetail',params: {id: this.$route.params.id}})
          })
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      }
    },
    mounted() {
      this.uploaNode()
    }
  }
</script>
<style scoped>
  .el-rate {
    display: inline-block;
    margin-left: 10px;
  }

  .file {
    position: relative;
    display: inline-block;
    background: green;
    /*border: 1px solid #99D3F5;*/
    border-radius: 4px;
    padding: 4px 20px;
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

  .commentHeaderWrap {
    width: 100%;
    background-color: #00cd4c;
  }

  .commentHeader {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    position: relative;
  }

  .commentHeader strong {
    font: bold 30px/1.3 "宋体";
    color: #fff;
    vertical-align: bottom;
    padding-left: 10px;
  }

  .commentHeader a {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
  }

  .commentWrap {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .commentBox {
    padding: 0 100px 100px;
    width: 800px;
    background-color: #f6f6f6;
    margin: 0 auto;
    box-sizing: content-box;
  }

  .HeadPortrait {
    padding: 10px 0;
  }

  .HeadPortrait img {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    float: left;
  }

  .HeadPortrait strong {
    float: left;
    font: bold 16px/2 "微软雅黑";
    padding-top: 25px;
    margin-left: 10px;
    color: #e90;
  }

  #commentContent {
    width: 800px;
    height: 300px;
    resize: none;
    padding: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font: 14px/2 Arial;
    background-color: #f0f0f0;
  }

  .scoreList > li > span {
    font: 14px/4 "微软雅黑";
    color: #f80;
  }

  .submitComment > button {
    float: right;
  }

  .uploadPicture {
    border: 2px solid #f60;
    padding: 10px 0;
    margin-top: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #f6f6f6;
  }

  .uploadPictureBox > img {
    float: left;
    margin: 5px;
  }

</style>
