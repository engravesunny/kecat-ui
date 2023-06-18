import { buildProps } from '../../../utils/buildProps'

export interface SliderButtonInitData {
    hovering: boolean
    dragging: boolean
    isClick: boolean
    startX: number
    currentX: number
    startY: number
    currentY: number
    startPosition: number
    newPosition: number
    oldValue: number
}

export const buttonProps = buildProps({
    position: {
        type: Number,
    },
    name: {
        type: String,
    },
})
