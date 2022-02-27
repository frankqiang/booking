<template>
  <div>
    <ul class="types">
      <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly type!: string; // ’-‘表示支出，’+‘表示收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:type', type);
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.types {
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