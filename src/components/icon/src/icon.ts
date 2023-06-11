import { buildProps } from '../../../utils/buildProps'

export const iconProps = buildProps({
    name: {
        type: String,
        default: 'js',
    },
    size: {
        type: String,
        default: 'inherit',
    },
    color: {
        type: String,
        default: 'inherit',
    },
})