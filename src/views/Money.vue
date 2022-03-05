<template>
  <Layout classPrefix="layout">
    <Tags @update:value="record.tags=$event" />
    <div class="createdAt">
      <Notes type="date" fieldName="日期" placeholder="在这里输入日期哦" :value.sync="record.createdAt" />
    </div>
    <div class="notes">
      <Notes
        fieldName="备注"
        @update:value="onUpdateNotes"
        placeholder="在这里输入备注哦"
        :value.sync="record.notes"
      />
    </div>
    <Tabs :dataSource="recordTypeList" :value.sync="record.type" />
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
  </Layout>
</template>

<script lang='ts'>
import Tags from '../components/Money/Tags.vue';
import Notes from '../components/Money/Notes.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Tabs from '../components/Tabs.vue';
import recordTypeList from '../constants/recordTypeList';

@Component({
  components: { Tags, Notes, NumberPad, Tabs },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  // 初始化
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createdAt: new Date().toISOString(),
  };
  created() {
    this.$store.commit('fetchRecords');
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>


