<template>
  <div>
    <div class="UpdatePasswordContent">
      <h4><span></span>密码修改</h4>
      <div class="UpdatePasswordContentDetails">
        <ul class="UpdatePasswordContentDetailsList">
          <li>
            <span>账号:</span>
            <el-input size="small" style="width: 200px"></el-input>
          </li>
          <li>
            <span>旧密码:</span>
            <el-input size="small" style="width: 200px" type="password"></el-input>
          </li>
          <li>
            <span>新密码:</span>
            <el-input size="small" style="width: 200px" type="password"></el-input>
          </li>
          <li>
            <span>确认新密码:</span>
            <el-input size="small" style="width: 200px" type="password"></el-input>
          </li>
        </ul>
        <div class="UpdatePasswordContentDetailsSubmit">
          <el-button>提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {}
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  .UpdatePasswordContent > h4 {
    font: bold 16px/30px "微软雅黑";
    color: #000;
  }

  .UpdatePasswordContent > h4 > span {
    display: inline-block;
    height: 15px;
    width: 4px;
    background-color: #37c249;
    vertical-align: middle;
    margin-right: 5px;
  }

  .UpdatePasswordContentDetails {
    margin-top: 20px;
  }

  .UpdatePasswordContentDetailsList > li {
    margin-top: 20px;
  }

  .UpdatePasswordContentDetailsList > li > span {
    display: inline-block;
    width: 120px;
    text-align: right;
    margin-right: 20px;
  }

  .UpdatePasswordContentDetailsSubmit {
    margin-top: 30px;
    margin-left: 300px;
  }
</style>
