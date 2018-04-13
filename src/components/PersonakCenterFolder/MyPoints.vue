<template>
  <div>
    <el-tabs type="border-card"  v-model="activeName2">
      <el-tab-pane label="我的积分" name="first">
        <h1 class="userClass">积分明细查询</h1>
        <el-col :span="24" class="formSearch" >
          <el-form :inline="true">
            <el-form-item>
              <span>积分类型筛选:</span>
            </el-form-item>
            <el-form-item>
              <el-select v-model="typeID" placeholder="请选择" size="small">
                <el-option
                  v-for="item in typeList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search" size="small">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-table
          :data="useScoreDetailInfo"
          highlight-current-row
          v-loading="isLoading"
          style="width: 100%">
          <el-table-column
            prop="sm_ust_Name"
            label="积分类型"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="sm_usd_CostPrice"
            align="center"
            label="消费金额(元)"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="sm_usd_Score"
            label="获得积分">
          </el-table-column>
        </el-table>

        <!--分页-->
        <div class="block" style="float: right;padding-top: 20px">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="4"
            layout="total, prev, pager, next"
            :total="total"
            v-show="total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="总积分"  name="second">
        <h1 class="userClass">总积分查询</h1>
        <el-col :span="24" class="formSearch" >
          <el-form :inline="true">
            <el-form-item>
              <span>积分类型筛选:</span>
            </el-form-item>
            <el-form-item>
              <el-select v-model="allTypeID" placeholder="请选择" size="small">
                <el-option
                  v-for="item in typeList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="allSearch" size="small">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <el-table
          :data="userAllScoreList"
          highlight-current-row
          v-loading="isLoading"
          style="width: 100%">
          <el-table-column
            prop="sm_ust_Name"
            label="积分类型"
            align="center"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="sm_ss_Score"
            label="总积分">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        activeName2: 'first',
        total:0,
        allTypeID:'',
        typeID:'',
        typeList:[
          {
            name:'消费积分',
            value:1
          },
          {
            name:'消费次数积分',
            value:3
          },
          {
            name:'分享积分',
            value:2
          },
          {
            name:'评论收录积分',
            value:4
          },
        ],
        user:{},
        isLoading:false,
      }
    },
    computed: mapGetters([
      'useScoreDetailInfo',
      'userAllScoreList'
    ]),
    created(){
      //获取用户信息
      this.user = JSON.parse(sessionStorage.getItem('user'));
      if(this.user){
        this.initData(1,this.user.ui_UserCode,'')
      }
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(num,this.user.ui_UserCode,this.typeID)
      },
      //初始化
      initData(page,userCode,typeID){
        let options = {
          "loginUserID": "huileyou",//授权码
          "loginUserPass": "123",//授权密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",//机器码
          "userCode": userCode?userCode:'',//用户编码
          "scoreTypeID": typeID,//积分类型 0消费积分  1消费次数积分 2分享次数 3评论收录积分
          "page":page?page:1,
          "rows":4
        };
        this.isLoading = true;
        this.$store.dispatch('SelectUseScoreDetailInfo',options)
        .then((total)=>{
          this.total = total;
          this.isLoading = false;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //初始化总积分
      initAllData(userCode,allTypeID){
        let allOptions = {
          "loginUserID": "huileyou",//授权码
          "loginUserPass": "123",//授权密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",//机器码
          "userCode": userCode?userCode:'',//用户编码
          "scoreTypeID": allTypeID,//积分类型 1消费积分 2消费次数积分 3分享次数 4评论收录积分
        }
        this.isLoading = true;
        this.$store.dispatch('selectUserAllScore',allOptions)
        .then(()=>{
          this.isLoading = false;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //查询
      search(){
        this.initData(1,this.user.ui_UserCode,this.typeID)
      },
      //总积分查询
      allSearch(){
        this.initAllData(this.user.ui_UserCode,this.allTypeID)
      }
    },
  }
</script>
<style scoped>
  .userClass {
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
  .formSearch {
    padding: 20px 0 0 20px;
  }
</style>
