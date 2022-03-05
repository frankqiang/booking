<template>
  <div class="wrapper" ref="wrapper">chart</div>
</template>

<script lang='ts'>
import { Component, Prop, Watch } from 'vue-property-decorator';
import Vue from 'vue';
import echarts, { EChartOption, ECharts } from 'echarts';
import Echarts from 'echarts';
@Component
export default class Chart extends Vue {
  @Prop() options?: EChartOption;
  chart?: ECharts;
  mounted() {
    if (this.options === undefined) {
      return console.error('options 为空');
    }
    this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    this.chart.setOption(this.options);
  }
  // 当options变化的时候，根据新的options重新渲染chart
  @Watch('options')
  onOptionsChange(newValue: EChartOption) {
    this.chart!.setOption(newValue);
  }
}
</script>

<style lang='css' scoped>
.wrapper {
  height: 400px;
}
</style>