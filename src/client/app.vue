<template>
    <div class="container">
      <ke-select v-model="value">
        <ke-option v-for="item in options" :key="item.label" :label="item.label" :value="item.value"/>
    </ke-select>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref('')

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