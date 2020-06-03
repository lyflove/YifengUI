import yfUploader from './src/uploader.vue'

yfUploader.install = function(Vue){
    Vue.component(yfUploader.name,yfUploader)
}
export default yfUploader