import yfNav from './src/nav.vue'

yfNav.install = function(Vue){
    Vue.component(yfNav.name,yfNav)
}
export default yfNav