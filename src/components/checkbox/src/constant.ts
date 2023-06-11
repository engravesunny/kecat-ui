import { InjectionKey, WritableComputedRef } from 'vue'

export type CheckboxGroupContext = {
    checkList?: WritableComputedRef<any>,
    updateCheckList:(...args: any) => any,
    max?:number,
    min?:number
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupContextKey')