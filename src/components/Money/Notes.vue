<template>
  <div>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
      <template v-if="type==='date'">
        <input
          :type="type || 'text'"
          :placeholder="placeholder"
          :value="x(value)"
          @change="onValueChanged($event.target.value)"
        />
      </template>
      <template v-else>
        <input
          :type="type || 'text'"
          :placeholder="placeholder"
          :value="value"
          @change="onValueChanged($event.target.value)"
        />
      </template>
    </label>
  </div>
</template>

<script lang='ts'>
import dayjs from 'dayjs'
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Notes extends Vue {
  @Prop({ default: '' }) readonly value!: string
  @Prop({ required: true }) fieldName!: string
  @Prop() placeholder?: string
  @Prop() type?: string

  onValueChanged(value: string) {
    if (!value) {
      alert('标签名不能为空')
      return
    }
    this.$emit('update:value', value)
  }
  x(isoString: string) {
    return dayjs(isoString).format('YYYY-MM-DD')
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.notes {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 6px 16px;

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