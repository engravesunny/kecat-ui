import select from './src/select.vue'
import option from './src/option.vue'
import { withInstall, withNoopInstall } from '../../utils/withInstall'

export const KeSelect = withInstall(select, { option })
export const KeOption = withNoopInstall(option)

export default KeSelect
