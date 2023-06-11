<template>
    <div
        class="ke-row"
        :style="{
            justifyContent:`${justify}`,alignItems:`${align}`,marginLeft:`-${gutter/2}px`,marginRight:`-${gutter/2}px`
        }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'
import { rowProps } from './row'
import { rowContextKey } from './content'

const props = defineProps(rowProps)

const rowProvide = {
    gutter: computed(() => props.gutter),
}

provide(rowContextKey, rowProvide)

defineOptions({
    name: 'KeRow',
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>