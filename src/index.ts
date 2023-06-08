import type { App } from 'vue'
import * as components from './components/index'
import '@/style/index.less'
import { version } from '../package.json'

const ketui = () => {
    const install = (app:App) => {
        Object.values(components).forEach(component => {
            app.use(component)
        })
    }
    return { install, version }
}
export default ketui
export * from './components'
export { version } 
