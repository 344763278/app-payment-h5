import KikoMessage from './packages/message/index.js'
import KikoLoading from './packages/loading/index.js'

const install = function(Vue) {
    Vue.component(KikoMessage.name, KikoMessage)
    Vue.component(KikoLoading.name, KikoLoading)

    Vue.prototype.$kiko_message = KikoMessage.installMessage
}
export default install
