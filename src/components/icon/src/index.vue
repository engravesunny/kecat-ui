<template>
    <div
        class="ke-icon"
        :class="`ke-icon-${name}`"
        :style="{
            fontSize:`${size}px`,
            color:`${color}`
        }"
    ></div>
</template>

<script setup lang="ts">
import { iconProps } from './icon'

defineProps(iconProps)
defineOptions({
    name: 'KeIcon',
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>