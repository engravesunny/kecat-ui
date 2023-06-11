<template>
    <div
        ref="col"
        class="ke-col"
        :class="`ke-col-${span}`"
        :style="{
            padding:`0 ${gutter/2}px`
        }"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { rowContextKey } from '../../row/src/content'
import { inject, computed, onMounted, ref } from 'vue'
import { ColProps } from './col'

const col = ref<HTMLElement>()

defineProps(ColProps)

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) }) 

defineOptions({
    name: 'KeCol',
})

onMounted(() => {
    if (gutter.value !== 0) {
        col.value?.classList.add('is-gutter')
    }
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>