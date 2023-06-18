import { buildProps } from '../../../utils/buildProps'
import type { ExtractPropTypes } from 'vue'

export const sliderProps = buildProps({
    modelValue: {
        type: [Number, Array<number>],
        default: 0,
    },
    disabled: {
        type: Boolean,
    },
    step: {
        type: Number,
        default: 1,
    },
    vertical: {
        type: Boolean,
    },
    max: {
        type: Number,
        default: 100,
    },
    min: {
        type: Number,
        default: 0,
    },
    showStops: {
        type: Boolean,
    },
    range: {
        type: Boolean,
    },
    placement: {
        type: String,
        default: 'top',
    },
    showTooltip: {
        type: Boolean,
        default: true,
    },
    height: {
        type: String,
    },
})

export type SliderProps = ExtractPropTypes<typeof sliderProps>