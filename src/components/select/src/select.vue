<template>
    <div
        ref="selectRef"
        class="ke-select"
        style="width: 240px;"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="handleClick"
    >
        <ke-input
            v-model="iptValue"
            readonly
            :disabled="disabled"
            :clearable="clearable&&hovering"
            :placeholder="placeholder"
            :suffix-icon="suffixIcon"
            @click.stop
        >
            <div
                v-if="multiple&&selectList.length"
                class="tagList"
            >
                <div
                    v-for="item in selectList"
                    :key="item.label"
                    class="tag"
                >
                    <span>{{ item.label }}</span>
                    <span
                        class="icon"
                        @click="handleRemoveItem(item.value)"
                    ><ke-icon name="guanbi1"></ke-icon></span>
                </div>
            </div>
        </ke-input>
        <div :class="{downList:showDownList}">
            <ke-scrollbar
                class="ke-select-downList"
                :class="{
                    list_open:showDownList,
                    list_close:!showDownList
                }"
                height="auto"
            >
                <slot />
            </ke-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, computed, toRefs } from 'vue'
import { selectProps, SelectProps, ListItem } from './select.ts'
import { selectKey } from './constant'

const selectRef = ref()

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps(selectProps)

const iptValue = ref(
    ((props.modelValue as string[]).length || (props.modelValue as string[]).length === 0) ? '' : props.modelValue,
)
const hovering = ref(false)

const suffixIcon = computed(() => {
    if (props.clearable && hovering.value && iptValue.value) {
        return ''
    } 
    return showDownList.value ? 'jiantoushang' : 'jiantouxia'
})

const selectList = ref<ListItem[]>([])

const updateSelectList = (newList:ListItem[]) => {
    selectList.value = newList
    const updateList = newList.map(item => item.value)
    emit('update:modelValue', updateList)
    emit('change', updateList)
}
const handleMouseEnter = () => {
    hovering.value = true
} 
const handleMouseLeave = () => {
    hovering.value = false
}

const handleRemoveItem = (val:string|number) => {
    const newList = selectList.value.filter(item => item.value !== val)
    selectList.value = [...newList]
    const updatedList = selectList.value.map(item => item.value)
    emit('update:modelValue', updatedList)
    emit('change', updatedList)
}

const handleClick = () => {
    document.onclick = (e:Event) => {
        const target = e.target as HTMLElement
        const selectDom = selectRef.value as HTMLElement
        if (!selectDom.contains(target)) {
            showDownList.value = false
            document.onclick = null
        }
    }
    if (props.disabled) {
        return
    }
    showDownList.value = !showDownList.value
}

const showDownList = ref(false) 

const updateValue = (val:string|number) => {
    iptValue.value = val
    showDownList.value = false
    emit('update:modelValue', val)
    emit('change', val)
}

defineOptions({
    name: 'KeSelect',
})
provide(
    selectKey, 
    {
        ...((toRefs(props) as unknown) as SelectProps),
        updateValue,
        updateSelectList,
        selectList,
    },
)

</script>

<style lang="less" scoped>
@import '../style/index.less';

.tagList {
    min-height: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;

    .tag {
        user-select: none;
        cursor: pointer;
        float: left;
        display: flex;
        height: 24px;
        padding: 0 5px;
        font-size: 12px;
        border-radius: 5px;
        color: #909399;
        background-color: #f0f2f5;
        line-height: 24px;

        .icon {
            cursor: pointer;
        }
    }

    .tag + .tag {
        margin: 5px;
    }
}
</style>