import radio from './src/radio.vue'
import radioGroup from './src/radio-group.vue'
import { withInstall, withNoopInstall } from '../../utils/withInstall'

export const KeRadio = withInstall(radio, {
    radioGroup,
})
export const KeRadioGroup = withNoopInstall(radioGroup)
export default KeRadio

export * from './src/radio-group'
export * from './src/radio'