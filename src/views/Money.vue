import content from '../custom';
<template>
  <Layout classPrefix="layout">
    <Tags :dataSource.sync="tags" @update:value="onUpdateTag" />
    <div class="notes">
      <Notes fieldName="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注哦" />
    </div>
    <Types @update:value="onUpdateType" :type.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
  </Layout>
</template>

<script lang='ts'>
import Tags from '../components/Money/Tags.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';

const recordList = recordListModel.fetch();

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  // 初始化
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };
  recordList: RecordItem[] = recordList;
  tags = window.tagList;

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

  saveRecord() {
    recordListModel.create(this.record);
  }
  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save();
  }
}
</script>
// 向子组件layout传递样式，因为下方的style写了scoped所以应用不到layout，只能在写一个style
<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.notes {
  padding: 12px 0;
}
</style>


