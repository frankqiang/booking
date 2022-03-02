<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon" />
    </div>
    <div class="form-wrapper">
      <Notes :value="tag.name" fieldName="标签名" placeholder="请输入标签名哦" @update:value="update" />
    </div>

    <Button @click="remove">删除标签</Button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Notes from '../components/Money/Notes.vue';
import Button from '../components/Button.vue';
import router from '../router/index';
import store from '../store/index';

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      this.$store.commit('updateTag', { id: this.tag.id, name });
    }
  }
  remove() {
    if (this.tag) {
      this.$store.commit('removeTag', this.tag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
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
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
</style>