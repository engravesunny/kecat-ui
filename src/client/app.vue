<template>
    <div class="container">
      <ke-transfer :props="props" filterable :data="data" v-model="value" :titles="['left','right']" :button-texts="['left','right']"></ke-transfer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  keyx: number
  labelx: string
  disabled: boolean
}

const props = {
  key:'keyx',
  label:'labelx',
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      keyx: i,
      labelx: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([1,2,3,4,5,6])
</script>

<style lang="less" scoped>
.container {
    width: 700px;
    height: 500px;
    display: flex;
    margin: 100px auto;
    background: #fff;
    justify-content: center;
    align-items: center;

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