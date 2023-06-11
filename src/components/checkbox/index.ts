import checkbbox from './src/checkbox.vue'
import checkbboxGroup from './src/checkbox-group.vue'
import { withInstall, withNoopInstall } from '../../utils/withInstall'

export const KeCheckbox = withInstall(checkbbox, {
    checkbboxGroup,
})
export const KeCheckboxGroup = withNoopInstall(checkbboxGroup)
export default KeCheckbox

export * from './src/checkbox-group'
export * from './src/checkbox'