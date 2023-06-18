<template>
    <div class="ke-select-option">
        <span>{{ label }}</span>
    </div>
</template>

<script setup lang="ts">
import { SelectOptionProps } from './option'

const props = defineProps(SelectOptionProps)

defineOptions({
    name: 'KeOption',
})
</script>
