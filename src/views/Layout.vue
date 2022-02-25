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
  border: 1px solid green;
}
.nav-wrapper .content {
  flex-grow: 1;
  border: 1px solid blue;
  overflow: autos;
}
</style>