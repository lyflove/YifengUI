import yfButton from './src/button.vue'

yfButton.install = function(Vue){
    Vue.component(yfButton.name,yfButton)
}
export default yfButton