import content from '../custom';
<template>
  <Layout classPrefix="layout">
    <Tags :dataSource="tags" />
    <Notes />
    <Types />
    <NumberPad />
  </Layout>
</template>

<script>
import Tags from '../components/Money/Tags.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import NumberPad from '../components/Money/NumberPad.vue';

export default {
  name: 'Money',
  data() {
    return {
      tags: ['衣', '食', '住', '行'],
    };
  },
  components: { Tags, Notes, Types, NumberPad },
};
</script>
// 向子组件layout传递样式，因为下方的style写了scoped所以应用不到layout，只能在写一个style
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>


