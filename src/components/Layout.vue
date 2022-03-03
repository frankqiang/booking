<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Layout',
  props: ['classPrefix'],
};
</script>


<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
}
.layout-wrapper .content {
  flex-grow: 1;
  overflow: autos;
}
</style>