<template>
    <aside
        class="ke-asider"
        :style="{width:`${width}`}"
    >
        <slot></slot>
    </aside>
</template>

<script setup lang="ts">

defineProps({
    width: {
        type: String,
        default: '300px',
    },
})

defineOptions({
    name: 'KeAsider',
})

</script>

<style lang="less" scoped>
@import '../style/asider.less';
</style>