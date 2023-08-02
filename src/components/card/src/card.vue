<template>
    <div
        class="ke-card"
        :class="{
            isShadow:shadow!=='never'&&(shadow==='always' || shadow==='hover'&&hovering)
        }"
        @mouseenter="hovering=true"
        @mouseleave="hovering=false"
    >
        <template v-if="$slots.header">
            <div class="header">
                <slot name="header" />
            </div>
        </template>
        <div
            class="card-body"
            :style="bodyStyle"
        >
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { cardProps } from './card'
import { ref } from 'vue'

defineProps(cardProps)

const hovering = ref(false)

defineOptions({
    name: 'KeCard',
})
</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>