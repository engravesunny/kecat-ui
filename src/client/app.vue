import KeCard from '../components/card/index';
<template>
  <div class="container">
    <ke-calendar ref="calendar" v-model="value">
      <template #date-cell="{ date, isSelected }" > 
        <span> {{ date.split('-').slice(1).join('-') }} </span>
        <span> {{ isSelected?'✔️':'' }} </span>
      </template>
    </ke-calendar>
    <ke-button @click="handleTest()">测试</ke-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
let calendar = ref();
let value = ref('2002-11-15')
const handleTest = (option='next-year') => { 
  console.log(option);
  
  calendar.value.handleDateSelect(option)
}

watch(value,(val)=>{
  console.log('value改变了',val);
  
})

</script>

<style lang="less" scoped>
.container {
    width: 600px;
    height: 600px;
    display: flex;
    margin: 100px auto;
    background: #fff;
    justify-content: center;
    align-items: flex-start;

    .ke-asider,
    .ke-footer,
    .ke-header,
    .ke-main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>