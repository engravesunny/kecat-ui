<template>
    <div class="ke-checkbox-group">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { checkGroupProps } from './checkbox-group'
import { provide, computed } from 'vue'
import { checkboxGroupContextKey } from './constant'

const props = defineProps(checkGroupProps)

const emits = defineEmits(['update:modelValue'])

const checkList = computed(() => props.modelValue as string[])

const updateList = (newList:any[]) => {
    emits('update:modelValue', newList)
}

provide(checkboxGroupContextKey, { checkList, updateCheckList: updateList, max: props.max, min: props.min })
defineOptions({
    name: 'KeCheckboxGroup',
})
</script>

<style lang="less" scoped>

</style>