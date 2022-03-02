<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="typeList" :value.sync="type" />
    <Tabs classPrefix="interval" :dataSource="intercalList" :value.sync="interval" />
    <div>
      type:{{type}}
      <br />
      interval:{{interval}}
    </div>
  </Layout>
</template>

<script lang='ts'>
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Types from '../components/Money/Types.vue';

@Component({
  components: { Types, Tabs },
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intercalList = [
    { text: '按天', value: 'day' },
    { text: '按周', value: 'week' },
    { text: '按月', value: 'month' },
  ];
  typeList = [
    { text: '支出', value: '-' },
    { text: '收入', value: '+' },
  ];
}
</script>
<style lang="scss" scoped>
/* 可以通过：：v-deep  找到容器里面的元素，从而设置样式，
加了scoped既不会影响组件的样式，但是又可以自定义当前使用的组件的样式 */
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>
