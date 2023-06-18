import type { InjectionKey, Ref } from 'vue'
import { SelectProps, ListItem } from './select'

export interface SelectContext extends SelectProps {
    updateValue:(val:string|number)=>void,
    updateSelectList:(val:ListItem[])=>void,
    selectList:Ref<ListItem[]>
}

export const selectKey: InjectionKey<SelectContext> = Symbol('ElSelect')