import yfButton from './src/index.vue'

yfButton.install = function(Vue){
    Vue.component(yfButton.name,yfButton)
}
export default yfButton