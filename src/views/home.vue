<template>
<div>


	<el-row>
		<el-col :span="24">
	        <BarChart />
	      </el-col>
	</el-row>
	<el-row>
		<el-col :span="12">
	        <noticeList />
	      </el-col>
		  <el-col :span="12">
		      <messageList />
		    </el-col>
	</el-row>
	

</div>
</template>
<script>
import router from '@/router/router-static'
import BarChart from './BarChart.vue'
import noticeList from './noticeList.vue'
import messageList from './messageList.vue'
export default {
  mounted(){
    this.init();
  },
  components: {
      BarChart,
	  noticeList,
	  messageList,
    },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  text-align: center;
  .main-text{
    font-size: 38px;
    font-weight: bold;
    margin-top: 15%;
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>