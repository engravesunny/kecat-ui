<template>
    <span
        class="ke-switch"
        :class="{
            isChecked:isChecked,
            isDisabled:disabled,
            isLoading:loading,
            isLarge:size==='large',
            isSmall:size==='small'
        }"
        @click.prevent="switchValue"
    >
        <input
            :id="id"
            ref="input"
            role="switch"
            type="checkbox"
            :disabled="disabled"
            :name="name"
            class="ke-switch-input"
            @change="handleChange"
        >
        <span
            v-if="(inactiveText||inactiveIcon) && !inlinePrompt"
            class="ke-switch-label ke-switch-label-left"
            :class="{isActive:!isChecked}"
        >
            <ke-icon
                v-if="inactiveIcon"
                :name="inactiveIcon"
            ></ke-icon>
            <span>{{ inactiveText }}</span>
        </span>
        <span
            class="ke-switch-core"
            :style="{width:`${width?width+'px':'unset'}`}"
        >
            <span
                v-if="inlinePrompt"
                class="ke-switch-inner"
            >
                <template v-if="isChecked">
                    <span class="text">{{ activeText }}</span>
                    <ke-icon
                        v-if="activeIcon"
                        :name="activeIcon"
                    ></ke-icon>
                </template>
                <template v-else>
                    <span class="text">{{ inactiveText }}</span>
                    <ke-icon
                        v-if="inactiveIcon"
                        :name="inactiveIcon"
                    ></ke-icon>
                </template>
            </span>
            <div class="ke-switch-action">
                <template v-if="loading">
                    <ke-icon
                        class="is-loading"
                        name="jiazai"
                    ></ke-icon>
                </template>
            </div>
        </span>
        <span
            v-if="(activeText||activeIcon) && !inlinePrompt"
            class="ke-switch-label ke-switch-label-right"
            :class="{isActive:isChecked}"
        >
            <span>{{ activeText }}</span>
            <ke-icon
                v-if="activeIcon"
                :name="activeIcon"
            ></ke-icon>
        </span>
    </span>
</template>

<script setup lang="ts">
import { switchProps } from './switch'
import { computed, ref } from 'vue'

const input = ref<HTMLInputElement>()

const isChecked = computed(() => props.modelValue === true)

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue', 'change'])
const handleChange = () => {
    emit('update:modelValue', !props.modelValue)
    emit('change', !props.modelValue)
}

const switchValue = () => {
    if (props.disabled || props.loading) {
        return
    }
    const { beforeChange } = props
    if (!beforeChange) {
        handleChange()
        return
    }
    const shouldChange = beforeChange()
    const isPromiseOrBool = [shouldChange instanceof Promise, shouldChange instanceof Boolean].includes(true)
    if (!isPromiseOrBool) {
        console.error(
            'not a promise or boolean',
            'beforeChange must return type `Promise<boolean>` or `boolean`',
        )
    }
    if (shouldChange instanceof Promise) {
        shouldChange.then(res => {
            if (res) {
                handleChange()
            }
        }).catch(error => {
            Promise.reject(error)
        })
    } else if (shouldChange) {
        handleChange()
    }
}

defineOptions({
    name: 'KeSwitch',
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>