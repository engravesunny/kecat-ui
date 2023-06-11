import { buildProps } from '../../../utils/buildProps'

export const checkGroupProps = buildProps({
    modelValue: {
        type: Array,
    },
    // 最大可选数量
    max: {
        type: Number,
        default: 9999,
    },
    // 最小
    min: {
        type: Number,
        default: 0,
    },
})
