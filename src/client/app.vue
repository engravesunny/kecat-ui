<template>
    <div class="container">
      <ke-select v-model="value" multiple>
        <ke-option v-for="item in options" :key="item.label" :disabled="item.label==='Option2'" :label="item.label" :value="item.value">
          <span><strong>{{ item.label }}</strong></span><span style="color: blue;">{{ item.label }}</span>
        </ke-option>
      </ke-select>
    </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'

const value = ref([])

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

watch(value,(val)=>{
    console.log('检测到变化',val);
})
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