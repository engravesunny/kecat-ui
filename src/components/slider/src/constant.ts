import type { InjectionKey, Ref, ToRefs } from 'vue'
import type { SliderProps } from './silder'

export interface SliderContext extends ToRefs<SliderProps> {
  updatePosition:(val:number)=>void,
  sliderValue:Ref<number>,
  resetSize:()=>void,
  updateValue:(val:number)=>void,
  updateRangePositionForBtn:(name:string, val:number)=>void,
  onPositionChange:()=>void,
  onPositionChangeEnding:()=>void
}

export const sliderContextKey: InjectionKey<SliderContext> = Symbol('sliderContextKey')
