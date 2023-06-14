import { buildProps } from '../../../utils/buildProps'

export const inputProps = buildProps({
    modelValue: {
        type: [String, Number],
    },
    formatter: {
        type: Function,
    },
    parser: {
        type: Function,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'text',
    },
    showPassword: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: 'please enter',
    },
    suffixIcon: {
        type: String,
        default: '',
    },
    prefixIcon: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: '',
    },
    showWordLimit: {
        type: Boolean,
        default: true,
    },
    maxlength: {
        type: [Number, String],
    },
    rows: {
        type: [Number, String],
        default: '2',
    },
    name: {
        type: String,
    },
    max: {
        type: Number,
    },
    min: {
        type: Number,
    },
    step: {
        type: Number,
    },
    autofocus: {
        type: Boolean,
    },
})
