<template>
  <div id="app">
    <!-- 渲染路由组件 -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/style/reset.scss';
@import './assets/style/helper.scss';
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  // 全局字体
  font-family: $font-black;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
#app {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
