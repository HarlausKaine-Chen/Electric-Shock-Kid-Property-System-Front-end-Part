<template>
  <div>
    <el-card>
      <!-- <div slot="header" class="clearfix">
        <span>柱状图统计</span>
      </div> -->
      <div ref="chart" style="width: 100%; height: 350px;"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BarChart',
  data() {
    return {
      chart: null,
	  feeData:[],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
		this.$http({
			url: `weFees/fees`,
			method: "get"
		}).then(({ data }) => {
			if (data && data.code == 0) {
				this.feeData = data.data;
				// 基于准备好的dom，初始化echarts实例
				this.chart = echarts.init(this.$refs.chart);
					
				// 指定图表的配置项和数据
				const option = {
				  title: {
				    text: '各月水电费情况',
				  },
				  tooltip: {},
				  xAxis: {
				    data: ['1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月','11月','12月'],
				  },
				  yAxis: {},
				  series: [
				    {
				      name: '水电费用',
				      type: 'bar',
				      data: this.feeData,
				    },
				  ],
				};
				
				// 使用刚指定的配置项和数据显示图表。
				this.chart.setOption(option);
			}
		});
      
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>