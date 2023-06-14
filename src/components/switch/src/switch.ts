import { buildProps, definePropType } from '../../../utils/buildProps'

export const switchProps = buildProps({
    modelValue: {
        type: Boolean,
    },
    activeText: {
        type: String,
    },
    inactiveText: {
        type: String,
    },
    inlinePrompt: {
        type: Boolean,
        default: false,
    },
    width: {
        type: [Number, String],
    },
    inactiveIcon: {
        type: String,
    },
    activeIcon: {
        type: String,
    },
    activeValue: {
        type: [String, Boolean, Number],
    },
    inactiveValue: {
        type: [String, Boolean, Number],
    },
    disabled: {
        type: Boolean,
    },
    loading: {
        type: Boolean,
    },
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    beforeChange: {
        type: definePropType<() => Promise<boolean> | boolean>(Function),
    },
    size: {
        type: String,
    },
})