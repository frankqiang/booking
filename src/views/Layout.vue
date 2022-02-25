<template>
  <div class="nav-wrapper">
    <slot></slot>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Layout',
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.nav-wrapper .content {
  flex-grow: 1;
  overflow: autos;
}
</style>