<template>
    <div
        class="ke-select"
        @click="handleClick"
    >
        <ke-input
            v-model="modelValue"
            readonly
            placeholder="Select"
            :suffix-icon="showDownList?'jiantoushang':'jiantouxia'"
        ></ke-input>
        <div class="ke-select-downList">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { selectProps } from './select.ts'

const handleClick = () => {
    showDownList.value = !showDownList.value
}
const props = defineProps(selectProps)
const showDownList = ref(false) 

defineOptions({
    name: 'KeSelect',
})
onMounted(() => {
    console.log(props)
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>