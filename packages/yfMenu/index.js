import yfMenu from './src/menu.vue'

yfMenu.install = function(Vue){
    Vue.component(yfMenu.name,yfMenu)
}
export default yfMenu