<template>
    <div
        class="ke-slider"
        :class="{isVertical:vertical}"
        :style="{width:`${vertical?height:''}`}"
    >
        <div
            ref="slider"
            class="ke-slider-runway"
            :class="{isDisabled:disabled}"
            @click="handleClick"
        >
            <div
                class="ke-slider-bar"
                :style="{
                    left:`${range?rangeLeft<rangeRight?rangeLeft:rangeRight:0}%`,
                    width:`${range?Math.abs(rangeRight-rangeLeft):value}%`
                }"
            ></div>
            <slider-button
                ref="sliderBtn"
                name="sliderLeft"
                :position="rangeLeft"
            ></slider-button>
            <slider-button
                v-if="range"
                ref="sliderBtn2"
                name="sliderRight"
                :position="rangeRight"
            ></slider-button>
            <div
                v-if="showStops"
                class="markList"
            >
                <div
                    v-for="item in markList"
                    :key="item.left"
                    :style="{left:`${item.left}%`}"
                    class="stop-item"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { sliderProps } from './silder'
import sliderButton from './button.vue'
import { provide, toRefs, ref, computed } from 'vue'
import { sliderContextKey } from './constant'

const props = defineProps(sliderProps)
const emit = defineEmits(['update:modelValue', 'change'])

const value = ref(((props.modelValue as number) / props.max) * 100)
const slider = ref<HTMLElement>()
const sliderValue = ref(1)
const sliderBtn = ref()
const sliderBtn2 = ref()
const max = ref(props.max)
const min = ref(props.min)
const preValue = ref((props.modelValue as Array<number>)[0])
const nextValue = ref((props.modelValue as Array<number>)[1])
  
const rangeRight = computed(() => ((nextValue.value + min.value) / max.value) * 100)
const rangeLeft = computed(() => ((preValue.value + min.value) / max.value) * 100)

const markList = computed(() => {
    const list = []

    // 标记数量
    const count = Math.ceil((max.value - min.value) / props.step)
    const stepLength = props.step / (max.value - min.value)
    for (let i = 0; i < count; i++) {
        list.push({ left: (stepLength * (i + 1)) * 100 })
    }
    return list
})
const updatePosition = (newPosition:number) => {    
    value.value = newPosition
}
const updateValue = (newVal:number) => {
    emit('update:modelValue', newVal)
    emit('change', newVal)
}

const updateRangePositionForBtn = (btnName:string, newPercent:number) => {
    if (btnName === 'sliderLeft') {
        preValue.value = (newPercent / 100) * max.value - min.value
    } else {
        nextValue.value = (newPercent / 100) * max.value - min.value
    }
}

const onPositionChange = () => {
    let pre = preValue.value
    let next = nextValue.value
    const preStr = pre.toString()
    const nextStr = next.toString()
    if (nextStr.length > 8 || preStr.length > 8) {
        pre = Math.round(pre)
        next = Math.round(next)
    }
    if (pre > next) {
        let temp = pre
        pre = next
        next = temp
    }
    emit('update:modelValue', [pre, next])
    emit('change', [pre, next])
}

const onPositionChangeEnding = () => {
    if (preValue.value > nextValue.value) {
        let temp = preValue.value
        preValue.value = nextValue.value
        nextValue.value = temp
    }
}    

const updateRangePosition = (newPercent:number) => {
    const truePercent = sliderBtn?.value?.getPosition(newPercent)
    let isLeft = Math.abs(truePercent - rangeLeft.value)
    let isRight = Math.abs(truePercent - rangeRight.value)
    
    if (isLeft > isRight) {
        nextValue.value = (truePercent / 100) * max.value - min.value
    } else {
        preValue.value = (truePercent / 100) * max.value - min.value
    }
    onPositionChange()
}

const handleClick = (e:MouseEvent) => {
    if (props.disabled) return
    resetSize()
    let newPercent = 0
    if (props.range) {
        if (props.vertical) {
            let clientY = e.clientY
            const sliderOffsetBottom = slider.value!.getBoundingClientRect().bottom
            newPercent = ((sliderOffsetBottom - clientY) / sliderValue.value) * 100
        } else {
            let clientX = e.clientX
            const sliderOffsetLeft = slider.value!.getBoundingClientRect().left
            newPercent = ((clientX - sliderOffsetLeft) / sliderValue.value) * 100
        }
        updateRangePosition(newPercent)
    } else {
        if (props.vertical) {
            let clientY = e.clientY
            const sliderOffsetBottom = slider.value!.getBoundingClientRect().bottom
            newPercent = ((sliderOffsetBottom - clientY) / sliderValue.value) * 100
        } else {
            let clientX = e.clientX
            const sliderOffsetLeft = slider.value!.getBoundingClientRect().left
            newPercent = ((clientX - sliderOffsetLeft) / sliderValue.value) * 100
        }
        
        sliderBtn?.value?.setPosition(newPercent)
    }
}

const resetSize = () => {
    if (slider.value) {
        sliderValue.value = slider.value.clientWidth
    }
}

provide(sliderContextKey, {
    ...toRefs(props),
    sliderValue,
    updatePosition,
    resetSize,
    updateValue,
    updateRangePositionForBtn,
    onPositionChange,
    onPositionChangeEnding,
})

defineExpose({
    updateRangePosition,
})

defineOptions({
    name: 'KeSlider',
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>