import { buildProps } from '../../../utils/buildProps'

export const selectProps = buildProps({
    modelValue: {
        type: [Number, String, Array<number>, Array<string>],
    },
})