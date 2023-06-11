<template>
    <main class="ke-main">
        <slot></slot>
    </main>
</template>

<script setup lang="ts">

defineOptions({
    name: 'KeMain',
})

</script>

<style lang="less" scoped>
@import '../style/main.less';
</style>