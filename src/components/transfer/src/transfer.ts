import { buildProps } from '../../../utils/buildProps'

export interface dataItem {
    label:string|number,
    key:string|number,
    disabled:boolean,
    [index:string]:unknown
}

export const transferProps = buildProps({
    modelValue: {
        type: Array,
    },
    data: {
        type: Array<dataItem>,
    },
    filterable: {
        type: Boolean,
    },
    props: {
        type: Object,
    },
    titles: {
        type: Array,
    },
    buttonTexts: {
        type: Array,
    },
})