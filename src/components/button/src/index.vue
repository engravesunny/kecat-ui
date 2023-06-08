<template>
    <button 
        class="ke-button"
        :class="[
            ...comClsName(
                type,
                round?'round':'',
                circle?'circle':'',
                disabled?'disabled':'',
                plain?'plain':'',
                size,
            )]"
        @click="$event=>emitClick($event)"
    >
        <!-- loading -->
        <template v-if="loading">
            <slot
                v-if="$slots.loading"
                name="loading"
            />
            <ke-icon
                v-else
                name="loading"
            />
            <slot
                v-if="$slots.loadingText"
                name="loadingText"
            />
        </template>
        <!-- icon -->
        <template v-if="icon || $slots.icon">
            <slot
                v-if="$slots.icon"
                name="icon"
            />
            <ke-icon
                v-else
                :name="icon"
            />
        </template>
        <span
            v-if="$slots.default"
            class="ke-button-text"
        >
            <slot />
        </span>
    </button>
</template>

<script lang="ts" setup>
import { buttonProps, comClsName } from './button'
import KeIcon from '../../icon/src/index.vue'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])
defineOptions({
    name: 'KeButton',
})
const emitClick = (e:Event) => {
    if (!props.disabled) {
        emits('click', e)
    } else {
        return false
    }
}

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>
