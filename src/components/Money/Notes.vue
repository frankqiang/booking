<template>
  <div>
    <label class="notes">
      {{value}}
      <span class="name">{{fieldName}}</span>
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="onValueChanged($event.target.value)"
      />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  @Prop({ default: '' }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.notes {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;

  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    padding-right: 16px;
    border: none;
    background: transparent;
  }
}
</style>