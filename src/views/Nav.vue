<template>
  <nav>
    <!-- 当路由激活时添加selected类 -->
    <router-link to="/money" class="item" active-class="selected">
      <!-- 像Icon组件传递svg的文件名 -->
      <Icon name="money" />
      <span>记账</span>
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels" />
      <span>标签</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      <span>统计</span>
    </router-link>
  </nav>
</template>

<script lang='ts'>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/style/helper.scss';
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  .item.selected {
    color: $color-highlight;
  }
}
</style>