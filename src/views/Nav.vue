<template>
  <div class="nav">
    <router-link to="/money">
      <!-- 像Icon组件传递svg的文件名 -->
      <Icon name="money" />
      <span>记账</span>
    </router-link>
    <router-link to="/labels">
      <Icon name="labels" />
      <span>标签</span>
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics" />
      <span>统计</span>
    </router-link>
  </div>
</template>

<script lang='ts'>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>