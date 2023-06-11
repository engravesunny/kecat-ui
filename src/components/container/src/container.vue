<template>
    <section
        class="ke-container"
        :class="{isVertical:isVertical||verticalTest}"
    >
        <slot />
    </section>
</template>

<script setup lang="ts">
import { ref, useSlots, onBeforeMount, computed } from 'vue'
import type { Component, VNode } from 'vue'

const props = defineProps({
    direction: {
        type: String,
        default: 'horizontal',
    },
})

const slots = useSlots()

const isVertical = ref<boolean>(false)

const verticalTest = computed(() => {
    if (props.direction === 'vertical') {
        return true
    }
    if (props.direction === 'horizontal') {
        return false
    }
    if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
            const tag = (vNode.type as Component).name
            console.log(tag)
            
            return tag === 'KeHeader' || tag === 'KeFooter'
        })
    } 
    return false
})

const handleVertical = () => {
    if (props.direction === 'vertical') {
        isVertical.value = true
    }
    if (props.direction === 'horizontal') {
        isVertical.value = false
    }
    if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        isVertical.value = vNodes.some((vNode) => {
            const tag = (vNode.type as Component).name
            console.log(tag)
            
            return tag === 'KeHeader' || tag === 'KeFooter'
        })
    } 
}

onBeforeMount(() => {
    handleVertical()
})

defineOptions({
    name: 'KeContainer',
})

</script>

<style lang="less" scoped>
@import '../style/container.less';
</style>