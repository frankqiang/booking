<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="(tag) in tagList"
        :key="tag.id"
        :class="{selected:selectedTags.indexOf(tag)>=0}"
        @click="toggle(tag)"
      >{{tag.name}}</li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
  }
  toggle(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex >= 0) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
  create() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert('标签名重复了！');
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;
  > .current {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      height: 24px;
      // 当容器内的文字只有一行字的时候才可以用这种方式让容器中的内容锤子居中
      line-height: 24px;
      text-align: center;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
      &.selected {
        background: darken($color: $bg, $amount: 50%);
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 5px;
    }
  }
}
</style>