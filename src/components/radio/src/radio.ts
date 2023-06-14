import { buildProps } from '../../../utils/buildProps'

export const radioProps = buildProps({
    modelValue: {
        type: [String, Boolean, Number],
        default: '',
    },
    label: {
        type: [String, Number, Boolean],
        default: '',
    },
    size: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
    },
})
