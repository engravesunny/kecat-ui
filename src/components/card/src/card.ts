import { buildProps } from '../../../utils/buildProps'

export const cardProps = buildProps({
    bodyStyle: {
        type: Object,
        default: {
            padding: '20px',
        },
    },
    shadow: {
        type: String,
        values: ['always', 'hover', 'never'],
        default: 'always',
    },
})