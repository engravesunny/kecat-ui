import { buildProps } from '../../../utils/buildProps'
import { ExtractPropTypes } from 'vue'

export const selectProps = buildProps({
    modelValue: {
        type: [Number, String, Array],
    },
    disabled: {
        type: Boolean,
    },
    clearable: {
        type: Boolean,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: [String, Number],
        default: 'Select',
    },
})
export interface ListItem {
    value:string|number,
    label:string|number
}
export type SelectProps = ExtractPropTypes<typeof selectProps>