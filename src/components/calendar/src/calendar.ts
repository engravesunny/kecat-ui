import { buildProps } from '../../../utils/buildProps'

export const calendarProps = buildProps({
    modelValue: {
        type: [String, Number],
        default: '',
    },
})