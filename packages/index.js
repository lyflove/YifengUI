import yfButton from './yfButton'

const components = {
    yfButton
}

const install = function(Vue){
    Object.values(components).forEach(component => {
        Vue.component(component.name,component);
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default{
    install,
    yfButton
}