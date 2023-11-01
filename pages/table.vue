<template>
  <div>
    <BTable
    :fields="commonFields"
    :items="items"
    :sort-compare="handleSort"
    />
  </div>
</template>

<script lang="ts" setup>
import {useSorted} from '@vueuse/core'
const items = [
  {
    orders: 123,
    ordersSum: 100034,
    loosesSum: 1200,
    loosesPercent: 12,
    name: 'abc'
  },
  {
    orders: 102,
    ordersSum: 123054,
    loosesSum: 1330,
    loosesPercent: 6,
    name: 'aad'
  },
  {
    orders: 104,
    ordersSum: 123005,
    loosesSum: 1908,
    loosesPercent: 8,
    name: 'cvb'
  },
  {
    orders: 920,
    ordersSum: 142003,
    loosesSum: 1542,
    loosesPercent: 11,
    name: 'gsd'
  },
  {
    orders: 735,
    ordersSum: 198203,
    loosesSum: 1300,
    loosesPercent: 13,
    name: 'ccb'
  }
]
const commonFields = [
  {
    key: 'orders',
    label: 'Заказы, шт.',
    // formatter: $display.renderInt,
    sortable: true,
  },
  {
    key: 'ordersSum',
    label: 'Выручка по заказам, ₽',
    // formatter: $display.renderInt,
    sortable: true,
  },
  {
    key: 'loosesSum',
    label: 'Потери, ₽',
    // formatter: $display.renderInt,
    sortable: true,
  },
  {
    key: 'loosesPercent',
    label: 'Потери, %',
    // formatter: $display.renderInt,
    sortable: true,
  },
  {
    key: 'name',
    label: 'Имя',
    // formatter: $display.renderInt,
    sortable: true,
  },
];

function handleSort(a,b,key, sortDesc) {
  console.log('a',a)
  console.log('b',b)
  console.log('key',key)
  console.log('sortDesc', sortDesc)
  return sortDesc ?  b[key] - a[key] : a[key] - b[key]

}


</script>

<style lang="scss" scoped>
</style>
