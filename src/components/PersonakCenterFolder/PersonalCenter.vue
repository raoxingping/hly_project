<template>
  <div>
    <div class="personakCenterWrap">
      <!--头-->
      <div class="personakCenterWrapHeader">
        <div class="personakCenterWrapHeaderContent clearfix">
          <div class="personakCenterWrapHeaderContentLogo">
            <img src="../../assets/img/center.png" width="60" height="60">
            <router-link to="/Comment/agenciesHome" tag="strong" style="cursor: pointer">惠乐游个人中心</router-link>
          </div>
          <ul class="personakCenterWrapHeaderContentNav">
            <li>
              <a href="javascript:;">会员首页</a>
            </li>
            <li>
              <a href="javascript:;">个人中心</a>
            </li>
          </ul>
          <div class="goHomePage">
            <router-link to="/Comment/agenciesHome">返回首页</router-link>
          </div>
        </div>
      </div>
      <!--内容-->
      <div class="personakCenterContentWrapP">
        <div class="personakCenterContentWrap clearfix">
          <!--左边导航-->
          <div class="personakCenterContentWrapLeftNav">
            <ul>
              <li :class="item.iconClass" v-for="item,index in data">
                <a href="javascript:;" @click="toggle(index)"><strong>{{item.label}}</strong><i></i></a>
                <el-collapse-transition>
                  <ul class="MyOrderDetailsList" v-show="n==index">
                    <li v-for="v in item.children">
                      <router-link :to="{name:v.label.to}">{{v.label.name}}</router-link>
                    </li>
                    <!--<li><a href="javascript:;">旅游订单券</a></li>-->
                  </ul>
                </el-collapse-transition>

              </li>
              <!--<li class="personakCenterType">-->
              <!--<a href="javascript:;"><strong>个人中心</strong><i></i></a>-->
              <!--<ul class="MyOrderDetailsList">-->
              <!--<li>-->
              <!--<router-link :to="{name:'PersonalDataDetails'}">个人资料</router-link>-->
              <!--</li>-->
              <!--<li>-->
              <!--<router-link :to="{name:'UpdatePassword'}">修改密码</router-link>-->
              <!--</li>-->
              <!--&lt;!&ndash;<li><a href="javascript:;">安全设置</a></li>&ndash;&gt;-->
              <!--&lt;!&ndash;<li><a href="javascript:;">密码设置</a></li>&ndash;&gt;-->
              <!--&lt;!&ndash;<li><a href="javascript:;">我的提问</a></li>&ndash;&gt;-->
              <!--</ul>-->
              <!--</li>-->
            </ul>
          </div>
          <div class="personakCenterContentWrapRightContent">
            <router-view name="MyInformtion"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import PersonalCenter from '@/assets/css/PersonalCenter.css'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        n: 6,
          data: [{
            label: '我的订单',
            iconClass: "personakCenterContentWrapLeftNavMyOrder",
            children: [{
              label: {
                name: '旅游订单',
                to: 'MyTourOrder'
              },
            }]
          },
          {
            label: '我的资产',
            iconClass: "personakCenterContentWrapLeftNavCash",
            children: [{
              label: {
                name: '我的积分',
                to: 'MyPoints'
              },
            }]
          },
          {
            label: '个人中心',
            iconClass: "personakCenterType",
            children: [{
              label: {
                name: '个人资料',
                to: 'PersonalDataDetails'
              },
            },
              {
                label: {
                  name: '修改密码',
                  to: 'UpdatePassword'
                },
              }]
          },
          {
            label: '常用工具',
            iconClass: "commonTools",
            children: [{
              label: {
                name: '我的收藏',
                to: 'MyCollection'
              },
            }]
          }
        ]
      }
    },
    created(){
      let user = JSON.parse(sessionStorage.getItem('user'))
      if(!user){
        this.$router.push({name:'AdminLogin'})
        this.$notify({
          message: '请先登录!',
          type: 'error'
        });
        return
      }
    },
    methods: {
      toggle(index){
        if(this.n==index){
          this.n = 100
        }else{
          this.n = index;
        }
      },
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  .commonTools > a {
    background: url("../../assets/img/commonTools.png") no-repeat 35px 10px;
  }
</style>
