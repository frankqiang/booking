import content from '../custom';
<template>
  <Layout classPrefix="layout">
    <Tags />
    <Notes fieldName="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注哦" />
    <Types @update:value="onUpdateType" :value.sync="record.type" />
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
  </Layout>
</template>

<script lang='ts'>
import Tags from '../components/Money/Tags.vue';
import Notes from '../components/Money/Notes.vue';
import Types from '../components/Money/Types.vue';
import NumberPad from '../components/Money/NumberPad.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  // 初始化
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };
  created() {
    this.$store.commit('fetchRecords');
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
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


