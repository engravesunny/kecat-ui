<template>
    <footer
        class="ke-footer"
        :style="{height:`${height}`}"
    >
        <slot></slot>
    </footer>
</template>

<script setup lang="ts">

defineProps({
    height: {
        type: String,
        default: '60px',
    },
})

defineOptions({
    name: 'KeFooter',
})

</script>

<style lang="less" scoped>
@import '../style/footer.less';
</style>