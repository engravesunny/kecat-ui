<template>
    <label
        class="ke-radio"
        :class="{isChecked:isChecked,isDisabled:isDisabled,isLarge:radioSize==='large',isSmall:radioSize==='small'}"
    >
        <span class="ke-radio-input">
            <input
                ref="radioRef"
                v-model="radioValue"
                type="radio"
                :value="label"
                :name="radioName"
                class="ke-radio-origin"
                @change="handleChange"
            >
            <span class="ke-radio-inner"></span>
        </span>
        <span
            class="ke-radio-label"
            @keydown.stop
        >
            <slot>
                {{ label }}
            </slot>
        </span>
    </label>
</template>

<script setup lang="ts">
import { radioProps } from './radio'
import { computed, ref, nextTick, inject, onMounted } from 'vue'
import { radioGroupKey, RadioGroupContext } from './constant'

const radioRef = ref<HTMLInputElement>()
const emit = defineEmits(['change', 'update:modelValue'])
const props = defineProps(radioProps)

const radioValue = ref('')
const { changeEvent } = inject(radioGroupKey, {
    changeEvent: () => {},
    disabled: ({ value: false } as unknown)as boolean, 
}) as RadioGroupContext
const injectValue = inject(radioGroupKey) 

const isGroup = computed(() => !!injectValue)
const isChecked = computed(() => props.modelValue === props.label 
|| (injectValue?.modelValue as any)?.value === props.label)
const isDisabled = computed(() => props.disabled || (injectValue?.disabled as any)?.value)
const radioSize = computed(() => props.size || (injectValue?.size as any)?.value)
const radioName = computed(() => props.name || (injectValue?.name as any)?.value)

const handleChange = () => {
    if (isDisabled.value) {
        return
    }
    if (isGroup.value) {
        changeEvent(radioValue.value)
        radioValue.value = ''
    } else {
        emit('update:modelValue', radioValue.value)
        radioValue.value = ''
    }
    nextTick(() => emit('change', radioValue.value))
}

const change = (value:any) => {
    emit('update:modelValue', value)
    nextTick(() => emit('change', value))
}

onMounted(() => {
    console.log(radioSize)
})

defineOptions({
    name: 'KeRadio',
})

defineExpose({
    change,
})

</script>

<style lang="less" scoped>
@import '../style/index.less';

</style>