import content from '../custom';
<template>
  <Layout classPrefix="layout">
    {{record}}
    <Tags :dataSource.sync="tags" @update:value="onUpdateTag" />
    <Notes @update:value="onUpdateNotes" />
    <Types @update:value="onUpdateType" :type.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount" />
  </Layout>
</template>

<script lang='ts'>
import Tags from '../components/Money/Tags.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  // 初始化
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };
  tags = ['衣', '食', '住', '行'];

  onUpdateTag(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateType(value: string) {
    this.record.type = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}
</script>
// 向子组件layout传递样式，因为下方的style写了scoped所以应用不到layout，只能在写一个style
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>


