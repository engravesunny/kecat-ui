import main from './src/main.vue'
import footer from './src/footer.vue'
import header from './src/header.vue'
import container from './src/container.vue'
import asider from './src/asider.vue'
import { withInstall, withNoopInstall } from '../../utils/withInstall'

export const KeContainer = withInstall(container, {
    asider,
    footer,
    header,
    main,
})

export const KeMain = withNoopInstall(main)
export const KeHeader = withNoopInstall(header)
export const KeFooter = withNoopInstall(footer)
export const KeAsider = withNoopInstall(asider)

export default KeContainer

export type ContainerInstance = InstanceType<typeof container>
export type AsideInstance = InstanceType<typeof asider>
export type FooterInstance = InstanceType<typeof footer>
export type HeaderInstance = InstanceType<typeof header>
export type MainInstance = InstanceType<typeof main>
