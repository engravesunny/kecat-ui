import { buildProps } from '@/utils/buildProps'
import { ExtractPropTypes } from 'vue'
import type Row from './index.vue'

export const RowJustify = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
] as const

export const RowAlign = ['top', 'middle', 'bottom'] as const
export const rowProps = buildProps({
    justify: {
        type: String,
        values: RowJustify,
        default: 'flex-start',
    },
    gutter: {
        type: Number,
        default: 0,
    },
    align: {
        type: String,
        values: RowAlign,
        default: 'top',
    },
})

export type RowProps = ExtractPropTypes<typeof rowProps>
export type RowInstance = InstanceType<typeof Row>
