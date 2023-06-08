import { buildProps } from '@/utils/buildProps'
 
export const buttonType = ['primary', 'danger', 'success', 'warning', 'info', 'default']
export const buttonSize = ['small', 'normal', 'large']
export const buttonProps = buildProps({
    type: {
        type: String,
        values: buttonType,
        default: 'default',
    },
    round: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    plain: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        values: buttonSize,
        default: 'normal',
    },
})

export const comClsName = (...arg:string[]) => {    
    const clsPrefix = 'ke-button-'
    const classList:string[] = arg.map(item => {
        if (item) {
            return clsPrefix + item
        } 
        return ''
    })
    return classList
}