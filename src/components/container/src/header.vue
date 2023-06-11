<template>
    <header
        class="ke-header"
        :style="{height:`${height}`}"
    >
        <slot />
    </header>
</template>

<script setup lang="ts">

defineProps({
    height: {
        type: String,
        default: '60px',
    },
})

defineOptions({
    name: 'KeHeader',
})

</script>

<style lang="less" scoped>
@import '../style/header.less';
</style>