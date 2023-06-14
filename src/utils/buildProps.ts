import { PropType } from 'vue'

export type PropInput<Type, Value, Validator, Default> = {
    type?: Type,
    default?:Default,
    required?:boolean,
    validator?:((val:any)=>val is Validator) | (()=>boolean),
    value?:Value
}

export const definePropType = <T>(val: any): PropType<T> => val

export type Props = Record<string, PropInput<any, any, any, any>>

export const buildProps = <PropType extends Props>(props:PropType):PropType => {
    const result:PropType = {} as PropType
    for (const key in props) {
        const prop = props[key]
        result[key] = { ...prop }
    }
    return result
} 