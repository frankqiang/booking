<template>
  <ul class="tabs">
    <li
      v-for="item in dataSource"
      :key="item.value"
      @click="select(item)"
      :class="liClass(item)"
    >{{item.text}}</li>
  </ul>
</template>

<script lang='ts'>
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

type DataSourceItem = { text: string; value: string };
@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: {
    text: string;
    value: string;
  }[];
  @Prop(String) readonly value!: string; // ’-‘表示支出，’+‘表示收入
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value,
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background: #c4c4c4;
  text-align: center;
  font-size: 24px;
  > li {
    flex-grow: 1;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>