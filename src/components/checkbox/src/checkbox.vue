<template>
    <component
        :is="$slots.default||hasOwnLabel? 'label' : 'span'"
        class="ke-checkbox"
        :class="{isChecked:isChecked,isDisabled:disabled||isDisabled,isLarge:large,isSmall:small}"
        
        @change="handleChange($event)"
    >
        <span class="ke-checkbox-origin">
            <input
                :id="id"
                :value="isChecked"
                type="checkbox"
                class="ke-checkbox-ipt"
                :name="name"
                @change="handleIptChange"
            >
            <span
                class="ke-checkbox-inner"
                :class="{isChecked:isChecked,isDisabled:disabled||isDisabled}"
            > </span>
        </span>

        <span
            v-if="hasOwnLabel||$slots.default"
            class="ke-checkbox-text"
        >
            <slot />
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </component>
</template>

<script setup lang="ts">
import { computed, inject, useSlots, onBeforeMount } from 'vue'
import { checkboxGroupContextKey, CheckboxGroupContext } from './constant'
import { checkProps, getString } from './checkbox'

const slots = useSlots()

const { checkList, updateCheckList, max, min } = inject(checkboxGroupContextKey, { 
    checkList: undefined, 
    updateCheckList: () => {}, 
    max: undefined,
    min: undefined,
}) as CheckboxGroupContext

const isDisabled = computed(() => {
    const list = checkList?.value as string[]
    if (max) {
        if (list?.length === max) {
            const label = props.label || getString(slots.default ? slots.default()[0] : { children: '' })
            if (!list.some(item => item === label)) {
                return true
            }
        }
    }
    if (min) {
        if (list?.length === min) {
            const label = props.label || getString(slots.default ? slots.default()[0] : { children: '' })
            if (list.some(item => item === label)) {
                return true
            }
        }
    }
    return false
})

const isChecked = computed(() => {
    const label = props.label || getString(slots.default ? slots.default()[0] : { children: '' })
    const modelChecked = props.modelValue && props.modelValue !== 'null'
    const groupCheck = (checkList?.value as string[])?.some((item) => item === label)
    return modelChecked || groupCheck 
})

const props = defineProps(checkProps)
const emits = defineEmits(['change', 'update:modelValue'])
defineOptions({
    name: 'KeCheckbox',
})
const hasOwnLabel = computed(() => props.label !== '')

const handleChange = (e:Event) => {
    if (props.disabled || isDisabled.value) {
        return false
    }
    emits('change', e)
}

const handleIptChange = () => {
    if (props.disabled || isDisabled.value) {
        return false
    }
    if (!checkList?.value) {
        // 传了v-model，进行更新
        emits('update:modelValue', !props.modelValue)
    } else if (checkList?.value) {
        // 没传
        const newList = checkList.value as string[]
        const label = props.label || getString(slots.default ? slots.default()[0] : { children: '' })
        if (isChecked.value) {
            const index = newList.indexOf(label)
            newList.splice(index, 1)
            updateCheckList(newList)
        } else {
            newList.push(label)
            updateCheckList(newList)
        }
    }
}

onBeforeMount(() => {
    
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>