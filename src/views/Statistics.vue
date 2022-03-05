<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <div class="chart-wrapper" ref="chartWrapper">
      <Chart class="chart" :options="x" />
    </div>

    <ol v-if="groupedList.length>0">
      <li v-for="(group,index) in groupedList" :key="index">
        <h3 class="title">
          {{beautify(group.title)}}
          <span>￥{{group.total}}</span>
        </h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">目前没有相关记录</div>
  </Layout>
</template>

<script lang='ts'>
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import recordTypeList from '../constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import Chart from '@/components/Chart.vue';

const oneDay = 86400 * 1000;
@Component({
  components: { Tabs, Chart },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map((t) => t.name).join('，');
  }
  mounted() {
    const div = this.$refs.chartWrapper as HTMLDivElement;
    div.scrollLeft = div.scrollWidth;
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('MM月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  get x() {
    return {
      grid: {
        //去掉echarts两边默认的padding
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: [
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
        ],
        axisTick: { alignWithLabel: true }, //让x轴的对齐线和点对齐
        axisLine: { lineStyle: { color: '#666' } }, //修改x轴的线条颜色
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          symbol: 'circle', //实心点点
          symbolSize: 12, //把每个坐标点变大
          itemStyle: { borderWidth: 1, color: '#666', borderColor: '#666' }, //修改线条和点的颜色
          data: [
            820, 932, 901, 1290, 1330, 1320, 820, 932, 901, 1290, 1330, 1320,
            820, 932, 901, 1290, 1330, 1320, 820, 932, 901, 1290, 1330, 1320,
            820, 932, 901, 1290, 1330, 1320,
          ],
          type: 'line',
        },
      ],
      tooltip: {
        show: true,
        triggerOn: 'click',
        position: 'top',
        formatter: '{c}',
      }, //显示点击原点后显示对应信息
    };
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupedList() {
    const { recordList } = this;

    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    if (newList.length === 0) {
      return [];
    }
    type Result = { title: string; total?: number; items: RecordItem[] }[];
    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'),
        items: [newList[0]],
      },
    ];

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format('YYYY-MM-DD'),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });

    return result;
  }
  beforeCreate() {
    this.$store.commit('fetchRecords');
  }
  type = '-';
  recordTypeList = recordTypeList;
}
</script>
<style lang="scss" scoped>
/* 可以通过：：v-deep  找到容器里面的元素，从而设置样式，
加了scoped既不会影响组件的样式，但是又可以自定义当前使用的组件的样式 */
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
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
.noResult {
  padding: 16px;
  text-align: center;
}
.chart {
  width: 430%;
  &-wrapper {
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
