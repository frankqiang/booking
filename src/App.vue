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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
