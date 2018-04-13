<template>
  <p>
    <el-cascader
      :options="data"
      @change="changeProvince"
      change-on-select
      separator="->"
    >
    </el-cascader>
  </p>
</template>
<script>
  import {mapGetters} from 'vuex'
  import cityOptions from '../../assets/js/data.js'
  export default{
    name: '',
    data(){
      return {
        data:[],
        city:''
      }
    },
    created(){
      this.data = cityOptions
    },
    computed: mapGetters([]),
    methods: {
      changeProvince(item){
        console.log(item)
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "goodID": "3",
          "city":item[item.length-1],
          "date":""
        }
      }
    },
  }
</script>
<style scoped>

</style>
