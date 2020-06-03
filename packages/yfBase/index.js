import yfBase from './src/base.vue'

yfBase.install = function(Vue){
    Vue.component(yfBase.name,yfBase)
}
export default yfBase