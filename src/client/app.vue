<template>
    <div class="container">
            <ke-switch 
                v-model="switchData" 
                active-icon="bianji" 
                inactive-icon="bianji" 
                :loading="loading1"
                :before-change="beforeChange1"
                size="large"
            ></ke-switch>
            &nbsp;
            <ke-switch 
                v-model="switchData" 
                active-icon="bianji" 
                inactive-icon="bianji" 
                :loading="loading2"
                :before-change="beforeChange2"
                size="small"
            ></ke-switch>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const switchData = ref(false)
const dom = ref()
const loading1 = ref(false)
const loading2 = ref(false)


const beforeChange1 = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      alert('failed')
      return reject(new Error('Error'))
    }, 1000)
  })
}

onMounted(()=>{
    console.log(dom);
})

watch(switchData,(val)=>{
    console.log('radioData改变', val);
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