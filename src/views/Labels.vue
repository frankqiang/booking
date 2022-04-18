<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon class="leftIcon" name="left" @click="goBack" />
        <span class="title">添加标签</span>
        <Icon class="rightIcon" name="add" @click="createTag" />
      </div>
      <div class="tags">
        <router-link class="tag" v-for="(tag) in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{tag.name}}</span>
          <Icon name="right" />
        </router-link>
      </div>
    </Layout>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class Labels extends Vue {
  get tags() {
    return this.$store.state.tagList
  }
  beforeCreate() {
    this.$store.commit('fetchTags')
  }
  createTag() {
    const name = prompt('请输入标签名')
    if (!name) {
      return window.alert('标签名不能为空')
    }
    this.$store.commit('createTag', name)
    if (this.$store.state.createTagError) {
      window.alert('标签名重复了！')
    }
    window.alert('添加标签成功')
  }
  goBack() {
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  margin-top: 8px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  > .createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
  }
}
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
    font-weight: 900;
  }
}
</style>