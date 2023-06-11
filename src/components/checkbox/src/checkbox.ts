import { buildProps } from '../../../utils/buildProps'

export const checkProps = buildProps({
    modelValue: {
        type: [Boolean, String],
        defalut: 'null',
    },
    label: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: '',
    },
})

export const getString = (a:any):any => {
    if (a.children && a.children[0]?.children) {
        return getString(a.children[0])
    } 
    return a.children
}
