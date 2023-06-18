<template>
    <div
        class="ke-input"
        :class="{isDisabled:disabled,isLarge:size==='large',isSmall:size==='small'}"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <template v-if="type!=='textarea'">
            <div
                class="ke-input-wrapper"
                :class="{isFocused:focused}"
                :style="{boxShadow:`0 0 0 1px ${borderColor} inset`}"
            >
                <!-- prefixIcon -->
                <div
                    v-if="prefixIcon||$slots.prefix"
                    class="ke-input-prefix"
                >
                    <slot name="prefix" />
                    <ke-icon :name="prefixIcon"></ke-icon>
                </div>
                <div class="ke-input-inner">
                    <input
                        ref="input"
                        class="ke-input-inner"
                        :class="{isReadonly:readonly}"
                        :type="inputType"
                        :placeholder="placeholder"
                        :name="name"
                        :max="max"
                        :min="min"
                        :autofocus="autofocus"
                        :step="step"
                        :readonly="readonly"
                        @focus="handleFocus"
                        @blur="handleBlur"
                        @input="handleInput"
                        @compositionstart="handleComposition"
                        @compositionend="handleCompositionEnd"
                    >
                </div>
                <!-- 字数限制 -->
                <span
                    v-if="maxlength&&showWordLimit"
                    class="ke-input-limit"
                >
                    <span>{{ inputLength + ' / ' + maxlength }}</span>
                </span>
                <!-- suffixIcon -->
                <div
                    v-if="$slots.suffix||suffixIcon||clearable&&InputValue||showPassword&&type==='password'&&InputValue"
                    class="ke-input-suffix"
                >
                    <div
                        v-if="clearable&&InputValue"
                        @click="handleClear"
                    >
                        <ke-icon name="guanbi1"></ke-icon>
                    </div>
                    <div
                        v-if="showPassword&&type==='password'&&InputValue"
                        @click="handleShowPassword"
                    >
                        <ke-icon
                            v-if="typeTemp==='password'"
                            name="yincang"
                        ></ke-icon>
                        <ke-icon
                            v-else
                            name="xianshi"
                        ></ke-icon>
                    </div>
                    <slot name="suffix" />
                    <ke-icon
                        v-if="suffixIcon"
                        :name="suffixIcon"
                    ></ke-icon>
                </div>
            </div>
        </template>
        <template v-else>
            <div
                class="ke-input-wrapper-textarea"
                :class="{isFocused:focused}"
                :style="{boxShadow:`0 0 0 1px ${borderColor} inset`}"
            >
                <textarea
                    id=""
                    ref="input"
                    class="ke-input-inner"
                    name=""
                    :rows="rows"
                    :placeholder="placeholder"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @input="handleInput"
                    @compositionstart="handleComposition"
                    @compositionend="handleCompositionEnd"
                ></textarea>
                <span
                    v-if="maxlength&&showWordLimit"
                    class="ke-input-textarea-limit"
                >
                    <span>{{ inputLength + ' / ' + maxlength }}</span>
                </span>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { inputProps } from './input'
import { isNil } from 'lodash-unified'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
    name: 'KeInput',
    inheritAttrs: false,
})

const props = defineProps(inputProps)
const emit = defineEmits(['focus', 'blur', 'mouseenter', 'mouseleave', 'input', 'update:modelValue'])

const typeTemp = ref<string>(props.type)
const input = ref<HTMLInputElement>() // input结点
const hovering = ref<boolean>(false) // 鼠标悬浮状态
const borderColor = ref<string>('#dcdfe6') // 边框颜色
const focused = ref<boolean>(false) // 聚焦状态
const isComposing = ref<boolean>(false)

// 计算属性
const inputLength = computed(() => (isNil(props.modelValue) ? 0 : props.modelValue?.toString().length))
const InputValue = computed(() => (isNil(props.modelValue) ? '' : props.modelValue.toString()))
const inputType = computed(() => {
    if (props.showPassword) {
        return typeTemp.value
    } 
    return props.type
})

const handleFocus = (event: FocusEvent) => {
    // 未被禁用
    if (!props.disabled) {
        borderColor.value = '#409eff'
        focused.value = true
        emit('focus', event)
    } else {
        input.value?.blur()
        return false
    }
}
const handleBlur = (event: FocusEvent) => {
    borderColor.value = '#dcdfe6'
    focused.value = false
    emit('blur', event)
    // if (props.validateEvent) {
    //     formItem?.validate?.('blur').catch((err) => debugWarn(err))
    // }
}
const handleMouseEnter = (event:MouseEvent) => {
    if (!props.disabled) {
        if (!focused.value) {
            borderColor.value = '#c0c4cc'
        }
        hovering.value = true
        emit('mouseenter', event)
    } else {
        return false
    }
}
const handleMouseLeave = (event:MouseEvent) => {
    if (!focused.value) {
        borderColor.value = '#dcdfe6'
    }
    hovering.value = false
    emit('mouseleave', event)
}
const setInputValue = (insertValue?:string) => {
    const inputDom = input.value 
    const processValue = insertValue || InputValue.value
    const formatterValue = props.formatter ? props.formatter(processValue) : processValue
    if (!inputDom || inputDom.value === formatterValue) return
    inputDom.value = formatterValue
}
const handleInput = async (event:Event) => {
    if (
        inputLength.value >= Number(props.maxlength)
        && (event as InputEvent).inputType !== 'deleteContentBackward'
    ) {
        if (isComposing.value) {
            return false
        }
        setInputValue()
        return false
    }
    let { value } = event.target as TargetElement
    if (props.formatter) {
        value = props.parser ? props.parser(value) : value
    }

    if (isComposing.value) return

    emit('update:modelValue', value)
    emit('input', value)
    await nextTick()
    setInputValue()
}
const handleClear = () => {
    const inputDom = input.value;
    (inputDom as HTMLInputElement).value = ''
    emit('update:modelValue', '')
}
const handleShowPassword = () => {
    if (typeTemp.value === 'password') {
        typeTemp.value = 'text'
    } else {
        typeTemp.value = 'password'
    }
}
const handleComposition = () => {
    isComposing.value = true
}
const handleCompositionEnd = (event:Event) => {
    if (isComposing.value) {
        isComposing.value = false
        let value = (event.target as HTMLInputElement).value
        
        if (value.length > Number(props.maxlength)) {
            value = value.slice(0, Number(props.maxlength))
            emit('update:modelValue', value)
            emit('input', value);
            (event.target as HTMLInputElement).value = value
            setInputValue(value)
        } else {
            handleInput(event)
        }
    }
}

const clear = () => {
    handleClear()
}
const blur = () => {
    const inputDom = input.value as HTMLInputElement
    inputDom.blur()
}
const focus = () => {
    const inputDom = input.value as HTMLInputElement
    inputDom.focus()
}

onMounted(() => {
    const inputDom = input.value
    inputDom?.addEventListener('input', () => {
        inputDom.style.height = 'auto'
        inputDom.style.height = inputDom.scrollHeight + 'px'
    })
})

defineExpose({
    clear, blur, focus, input: input.value,
})

</script>

<style lang="less" scoped>
@import '../style/index.less';
</style>