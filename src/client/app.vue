<template>
    <div class="container">
        <ke-checkbox-group v-model="checkList" :max="2" :min="1">
            <ke-checkbox label="Test1" @change="handleTest1Change" />
            <ke-checkbox label="Test3" />
            <ke-checkbox label="Test4" />
            <ke-checkbox><div><span>Test2</span></div></ke-checkbox>
        </ke-checkbox-group>
        <ke-checkbox v-model="isChecked" label="Test4" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const isChecked = ref<boolean>(false)

const handleTest1Change = (e:Event) => {
    console.log(e);
    console.log('handleTest1Change')
}

const checkList = ref<string[]>(['Test1','Test2','Test3','Test4'])

onMounted(()=>{

})

watch(isChecked,(val) => {
    console.log(val);
    
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