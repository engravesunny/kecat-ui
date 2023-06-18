<template>
    <li
        class="ke-select-option"
        :class="{isSelect:isSelect,isDisabled:disabled}"
        @click.stop="handleClick"
    >
        <span v-if="!$slots.default">{{ label }}</span>
        <template v-else>
            <slot />
        </template>
        <span>
            <ke-icon
                v-if="isSelect&&multiple"
                class="icon"
                name="duihao"
            />
        </span>
    </li>
</template>

<script setup lang="ts">
import { SelectOptionProps } from './option'
import { inject, computed, Ref } from 'vue'
import { selectKey, SelectContext } from './constant'
import { ListItem } from './select'

const { updateValue, modelValue, multiple, selectList, updateSelectList } = inject(selectKey) as SelectContext

const props = defineProps(SelectOptionProps)

const isSelect = computed(() => {
    if (((multiple as unknown) as Ref).value) {
        return selectList.value?.some(item => item.value === props.value)
    } 
    return props.value === ((modelValue as unknown) as Ref).value
})

const handleClick = () => {
    if (props.disabled) {
        return
    }
    if (((multiple as unknown) as Ref).value) {
        let list = selectList.value as ListItem[]
        if (isSelect.value) {
            list = selectList.value.filter(item => item.value !== props.value)
        } else {
            list.push({ value: props.value as string|number, label: props.label as string|number })
        }
        updateSelectList(list)
    } else {
        console.log(1)
        
        updateValue(props.value as string|number)
    }
}

defineOptions({
    name: 'KeOption',
})

</script>

<style lang="less" scoped>
.ke-select-option {
    list-style: none;
    padding: 3px 5px;
    cursor: pointer;
    font-size: 14px;
    color: #606266;
    min-height: 34px;
    user-select: none;
    display: flex;
    justify-content: space-between;

    &.isDisabled {
        cursor: not-allowed;
        color: #a8abb2;
    }

    &:hover {
        background-color: #f5f7fa;
    }
}

.isSelect {
    color: #409eff;
    font-weight: 700;
}

</style>
