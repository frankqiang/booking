<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'Notes',
};
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.notes {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  font-size: 14px;
  padding-left: 16px;

  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    padding-right: 16px;
    border: none;
    background: transparent;
  }
}
</style>