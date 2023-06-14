import { buildProps } from '../../../utils/buildProps'
import { ExtractPropTypes } from 'vue'

export const radioGroupProps = buildProps({
    label: {
        type: [String, Number, Boolean],
    },
    modelValue: {
        type: [String, Number, Boolean],
    },
    size: {
        type: String,
    },
    disabled: {
        type: Boolean,
    },
    name: {
        type: String,
    },
    id: {
        type: String,
    },
})
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
