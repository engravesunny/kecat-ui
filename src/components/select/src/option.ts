import { buildProps } from '../../../utils/buildProps'

export const SelectOptionProps = buildProps({
    label: {
        type: [Number, String],
    },
    value: {
        type: [Number, String],
    },
    disabled: {
        type: Boolean,
    },
})