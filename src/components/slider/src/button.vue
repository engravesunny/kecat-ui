<template>
    <div
        ref="btn"
        class="ke-slider-button-wrapper"
        :class="{grabbing:grabbing,hover:hover}"
        :style="{left:`${position||position===0?position:leftValue}%`}"
        @mousedown.stop="handleMouseDown"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click.stop=""
    >
        <div
            v-if="showTooltip&&(hover || grabbing)"
            class="ke-slider-tip"
            :class="`ke-slider-tip-${placement}`"
        >
            {{ isArray(modelValue)? (name==='sliderLeft'? modelValue[0]:modelValue[1]):modelValue }}
        </div>
        <div class="ke-slider-button"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, computed } from 'vue'
import { sliderContextKey, SliderContext } from './constant'
import { SliderButtonInitData, buttonProps } from './button'
import { isArray } from 'lodash-es'

const props = defineProps(buttonProps)

const { 
    updatePosition, 
    updateValue,
    vertical, 
    modelValue,
    min, 
    max, 
    resetSize, 
    sliderValue, 
    step,
    disabled,
    range,
    updateRangePositionForBtn,
    onPositionChange,
    onPositionChangeEnding,
    placement,
    showTooltip,
} = inject(sliderContextKey) as SliderContext

const leftValue = ref(((modelValue.value as number) / max.value) * 100)

const grabbing = ref(false)
const hover = ref(false)
const btn = ref<HTMLElement>()
const initData = {} as SliderButtonInitData
const currentPosition = computed(() => {
    if (props.position || props.position === 0) {
        return props.position
    } 
    return `${
        (((modelValue?.value as number) - min.value) / (max.value - min.value)) * 100
    }%`
})

const getClientXY = (event: MouseEvent | TouchEvent) => {
    let clientX: number
    let clientY: number
    if (event.type.startsWith('touch')) {
        clientY = (event as TouchEvent).touches[0].clientY
        clientX = (event as TouchEvent).touches[0].clientX
    } else {
        clientY = (event as MouseEvent).clientY
        clientX = (event as MouseEvent).clientX
    }
    return {
        clientX,
        clientY,
    }
}

const getPosition = (newPosition:number) => {
    if (newPosition < 0) {
        newPosition = 0
    } else if (newPosition > 100) {
        newPosition = 100
    }
    // 每步多长(物理层面)
    const lengthPerStep = 100 / ((max.value - min.value) / step.value)
    
    // 走了几步(物理层面)
    const steps = Math.round(newPosition / lengthPerStep)
    
    let positionNow = steps * lengthPerStep

    if (positionNow < 0) {
        positionNow = 0
    } else if (positionNow > 100) {
        positionNow = 100
    }
    return positionNow
}

const setPosition = (newPosition:number) => {
    if (newPosition < 0) {
        newPosition = 0
    } else if (newPosition > 100) {
        newPosition = 100
    }
    
    // 每步多长
    const lengthPerStep = 100 / ((max.value - min.value) / step.value)
    
    // 走了几步
    const steps = Math.round(newPosition / lengthPerStep)
    
    // 这几步一共多长
    let value = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value
    value = Math.round(value)
    let positionNow = steps * lengthPerStep
    if (positionNow < 0) {
        if (value < min.value) {
            value = min.value
        }
        positionNow = 0
    } else if (positionNow > 100) {
        if (value > max.value) {
            value = max.value
        }
        positionNow = 100
    }
    if (range.value) {
        if (positionNow !== props.position) {
            updateRangePositionForBtn(props.name as string, positionNow)
            onPositionChange()
        }
    } else {
        leftValue.value = positionNow
        updatePosition(positionNow)
        if (value !== modelValue.value) {
            updateValue(value)
        }
    }
    return positionNow
}

const onMoveStart = (e:Event) => {
    const event = e as MouseEvent|TouchEvent
    const { clientX, clientY } = getClientXY(event)
    
    if (vertical.value) {
        initData.startY = clientY
    } else {
        initData.startX = clientX
    }
    
    initData.startPosition = Number.parseFloat((currentPosition.value as string))
    initData.newPosition = initData.startPosition
}

const onMoving = (e:Event) => {
    const event = e as MouseEvent|TouchEvent
    const { clientX, clientY } = getClientXY(event)
    
    let diff:number
    if (vertical.value) {
        initData.currentY = clientY
        diff = ((initData.startY - initData.currentY) / sliderValue.value) * 100
    } else {
        initData.currentX = clientX
        diff = ((initData.currentX - initData.startX) / sliderValue.value) * 100
    }
    initData.newPosition = initData.startPosition + diff
    
    setPosition(initData.newPosition)
}

const onMoveEnding = () => {
    grabbing.value = false
    hover.value = false
    onPositionChangeEnding()
    document.removeEventListener('mousemove', onMoving)
    document.removeEventListener('mouseup', onMoveEnding)
}

const handleMouseDown = (e:Event) => {
    if (disabled.value) {
        return
    }
    grabbing.value = true
    hover.value = false
    if (resetSize) {
        resetSize()
    }
    onMoveStart(e)
    document.addEventListener('mousemove', onMoving)
    document.addEventListener('mouseup', onMoveEnding)
}
const handleMouseEnter = () => {
    if (disabled.value) {
        return
    }
    hover.value = true
}
const handleMouseLeave = () => {
    if (disabled.value) {
        return
    }
    if (grabbing.value === false) {
        hover.value = false
    }
}

defineExpose({
    setPosition,
    getPosition,
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>