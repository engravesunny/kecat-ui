<template>
    <div class="ke-transfer">
        <div class="ke-transfer-container left">
            <div class="ke-transfer-header">
                <ke-checkbox
                    v-model="checkAllLeft"
                    large
                    @change="handleChangeLeftAll"
                >
                    {{ titles&&titles[0]?titles[0]:"List1" }}
                </ke-checkbox>
                <span class="count">
                    {{ leftCheckedList.length + '/' + leftTotalList?.length }}
                </span>
            </div>
            <div
                v-if="filterable"
                class="ke-transfer-filter"
            >
                <ke-input
                    v-model="leftIpt"
                    clearable
                    prefix-icon="bianji"
                    :placeholder="filterPlaceholder?filterPlaceholder:'State Abbreviations'"
                ></ke-input>
            </div>
            <ke-scrollbar
                v-if="leftTotalList.length"
                ref="leftBar"
                height="270px"
            >
                <ke-checkbox-group
                    v-model="leftCheckedList"
                    class="ke-transfer-options"
                >
                    <ke-checkbox
                        v-for="item in leftIpt.length?leftFilterList:leftTotalList"
                        :key="item.key"
                        :label="item.key"
                        :disabled="item.disabled"
                        @change="leftItemChange"
                    >
                        {{ item.label }}
                    </ke-checkbox>
                </ke-checkbox-group>
            </ke-scrollbar>
            <div
                v-else
                class="not-data"
            >
                Not Data
            </div>
        </div>
        <div class="ke-transfer-mid">
            <ke-button
                type="primary"
                :disabled="!rightCheckedList.length"
                @click="handleLeftClick"
            >
                <span class="btnText">
                    <ke-icon name="test"></ke-icon>
                    {{ buttonTexts&&buttonTexts[0]?buttonTexts[0]:'' }}
                </span>
            </ke-button>
            <ke-button
                type="primary"
                :disabled="!leftCheckedList.length"
                @click="handleRightClick"
            >
                <span class="btnText">
                    {{ buttonTexts&&buttonTexts[1]?buttonTexts[1]:'' }}
                    <ke-icon name="test1"></ke-icon>
                </span>
            </ke-button>
        </div>
        <div class="ke-transfer-container right">
            <div class="ke-transfer-header">
                <ke-checkbox
                    v-model="checkAllRight"
                    large
                    @change="handleChangeRightAll"
                >
                    {{ titles&&titles[1]?titles[1]:"List2" }}
                </ke-checkbox>
                <span class="count">
                    {{ rightCheckedList.length + '/' + rightTotalList.length }}
                </span>
            </div>
            <div
                v-if="filterable"
                class="ke-transfer-filter"
            >
                <ke-input
                    v-model="rightIpt"
                    clearable
                    prefix-icon="bianji"
                    :placeholder="filterPlaceholder?filterPlaceholder:'State Abbreviations'"
                ></ke-input>
            </div>
            <ke-scrollbar
                v-if="(rightIpt.length?rightFilterList:rightTotalList).length"
                ref="rightBar"
                height="270px"
            >
                <ke-checkbox-group
                    v-model="rightCheckedList"
                    class="ke-transfer-options"
                >
                    <ke-checkbox
                        v-for="item in rightIpt.length?rightFilterList:rightTotalList"
                        :key="item.key"
                        :label="item.key"
                        :disabled="item.disabled"
                        @change="rightItemChange"
                    >
                        {{ item.label }}
                    </ke-checkbox>
                </ke-checkbox-group>
            </ke-scrollbar>
            <div
                v-else
                class="not-data"
            >
                Not Data
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { transferProps, dataItem } from './transfer'
import { onBeforeMount, ref, computed, nextTick } from 'vue'

const emit = defineEmits(['change', 'left-check-change', 'right-check-change'])
const props = defineProps(transferProps)
const leftBar = ref()
const rightBar = ref()
const leftIpt = ref('')
const rightIpt = ref('')
const totalList = ref<dataItem[]>()
const checkAllLeft = ref(false)
const checkAllRight = ref(false)
const leftCheckedList = ref<string[]|number[]>([])
const rightCheckedList = ref<string[]|number[]>([])
const leftTotalList = ref<dataItem[]>([])
const rightTotalList = ref<dataItem[]>([])
const leftFilterList = computed(() => leftTotalList.value.filter(item => item.label.toString().includes(leftIpt.value)))
const rightFilterList = computed(
    () => rightTotalList.value.filter(item => item.label.toString().includes(rightIpt.value)),
)
const handleChangeLeftAll = (e:any) => {    
    if (e) {
        if (leftTotalList.value.length === 0) {
            checkAllLeft.value = false
        } else {
            leftCheckedList.value = (leftTotalList.value as dataItem[]).map(item => {
                if (item.disabled) {
                    return null
                } 
                return item.key
            }).filter(item => item !== null) as string[]
        }
    } else {
        leftCheckedList.value = []
    }
    if (leftCheckedList.value.length === 0) {
        checkAllLeft.value = false
    }
}
const handleChangeRightAll = (e:any) => {
    if (e) {
        if (rightTotalList.value.length === 0) {
            checkAllRight.value = false
        } else {
            rightCheckedList.value = (rightTotalList.value as dataItem[]).map(item => {
                if (item.disabled) {
                    return null
                } 
                return item.key
            }).filter(item => item !== null) as string[]
        }
    } else {
        rightCheckedList.value = []
    }
    if (rightCheckedList.value.length === 0) {
        checkAllRight.value = false
    }
}
const handleLeftClick = async () => {
    // 1.将右边选中的添加到左边原有的
    const targetList = rightCheckedList.value
    const originList = leftTotalList.value
    const resultList = (totalList.value as dataItem[]).filter(data => targetList.some(tar => tar === data.key)
        || originList.some(ori => ori.key === data.key))
    leftTotalList.value = resultList
    checkAllRight.value = false
    // 2.右边清空
    rightTotalList.value = rightTotalList.value.filter(rtl => !targetList.some(tarl => tarl === rtl.key))
    // 3.右边选中清空
    rightCheckedList.value = []

    emit('change', { dir: 'left', keys: targetList })
    await nextTick()
    leftBar.value.updateBarSize()
    rightBar.value.updateBarSize()
}
const handleRightClick = async () => {
    const targetList = leftCheckedList.value
    const originList = rightTotalList.value
    const resultList = (totalList.value as dataItem[]).filter(data => targetList.some(tar => tar === data.key)
        || originList.some(ori => ori.key === data.key))
    rightTotalList.value = resultList
    checkAllLeft.value = false
    leftTotalList.value = leftTotalList.value.filter(rtl => !targetList.some(tarl => tarl === rtl.key))
    leftCheckedList.value = []

    emit('change', { dir: 'right', keys: targetList })
    await nextTick()
    leftBar.value.updateBarSize()
    rightBar.value.updateBarSize()
}
const leftItemChange = () => {
    if (leftCheckedList.value.length === leftTotalList.value.length) {
        checkAllLeft.value = true
    } else {
        checkAllLeft.value = false
    }
    emit('left-check-change', leftCheckedList.value)
}
const rightItemChange = () => {
    if (rightCheckedList.value.length === rightTotalList.value.length) {
        checkAllRight.value = true
    } else {
        checkAllRight.value = false
    }
    emit('right-check-change', rightCheckedList.value)
}

export interface Prop {
    key:string,
    label:string,
    disabled:string
}

onBeforeMount(() => {
    let dataList:any
    if (props.props) {
        const alias = props.props as Prop
        
        const data:dataItem[] = []
        props.data?.forEach(item => {
            data.push({
                key: item[alias.key ? alias.key : 'key'] as string|number,
                label: item[alias.label ? alias.label : 'label'] as string|number,
                disabled: item[alias.disabled ? alias.disabled : 'disabled'] as boolean,
            })
        })
        
        totalList.value = Array.from(data as Array<dataItem>) as Array<dataItem>
        leftTotalList.value = Array.from(data as Array<dataItem>) as Array<dataItem>
        dataList = data as Array<dataItem>
    } else {
        totalList.value = Array.from(props.data as Array<dataItem>) as Array<dataItem>
        leftTotalList.value = Array.from(props.data as Array<dataItem>) as Array<dataItem>
        dataList = props.data as Array<dataItem>
    }
    if (!dataList.length) return
    props.modelValue?.forEach(item => {
        for (let i = 0; i < dataList.length; i++) {
            if (item === dataList[i].key) {
                rightTotalList.value.push(dataList[i])
                leftTotalList.value = leftTotalList.value.filter(item => item.key !== dataList[i].key)
            }
        }
    })
})
defineOptions({
    name: 'KeTransfer',
})
</script>

<style lang="less" scoped>
@import "../style/index.less";
</style>