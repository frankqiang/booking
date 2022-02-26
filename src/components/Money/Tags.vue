<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
};
</script>

<style lang='scss' scoped>
@import '../../assets/style/helper.scss';
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      height: 24px;
      // 当容器内的文字只有一行字的时候才可以用这种方式让容器中的内容锤子居中
      line-height: 24px;
      text-align: center;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-right: 12px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 5px;
    }
  }
}
</style>