<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval" />
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
import intervalList from '../constants/intervalList';
import recordTypeList from '../constants/recordTypeList';

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
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
