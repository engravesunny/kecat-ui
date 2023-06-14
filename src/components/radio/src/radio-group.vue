<template>
    <div class="ke-radio-group">
        <slot />
    </div>
</template>

<script setup lang="ts">

import { nextTick, provide, toRefs } from 'vue'
import { radioGroupProps } from './radio-group'
import { radioGroupKey } from './constant'
import type { RadioGroupProps } from './radio-group'

const props = defineProps(radioGroupProps)
const emit = defineEmits(['change', 'update:modelValue'])

const changeEvent = (value:RadioGroupProps['modelValue']) => {
    emit('update:modelValue', value)
    nextTick(() => emit('change', value))
}

provide(
    radioGroupKey,
    {
        ...((toRefs(props) as unknown) as RadioGroupProps),
        changeEvent,
        name: props.name,
    },
)

defineOptions({
    name: 'KeRadioGroup',
})

defineExpose({
    change: changeEvent,
})
</script>

<style lang="less" scoped>

</style>