<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval" height="48" />

    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang='ts'>
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import intervalList from '../constants/intervalList';
import recordTypeList from '../constants/recordTypeList';

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',');
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;

    type HashTableValue = { title: string; items: RecordItem[] };

    const hashTable: { [key: string]: HashTableValue } = {};

    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T');
      console.log(date);
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }

    return hashTable;
  }
  beforeCreate() {
    this.$store.commit('fetchRecords');
  }
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
<style lang="scss" scoped>
/* 可以通过：：v-deep  找到容器里面的元素，从而设置样式，
加了scoped既不会影响组件的样式，但是又可以自定义当前使用的组件的样式 */
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
%item {
  line-height: 24px;
  padding: 8px 16px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
