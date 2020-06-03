import yfButton from './yfButton'
import yfInput from './yfInput'
import yfSelect from './yfSelect'
import yfMenu from './yfMenu'
import yfBase from './yfBase'
import yfSlider from './yfSlider'
import yfNav from './yfNav'
import yfTotalLabel from './yfTotalLabel'
import yfTotalLabelSecond from './yfTotalLabel/secondIndex'
import yfTotalLabelThird from './yfTotalLabel/thirdIndex'
import yfuploader from './yfUploader'

const components = {
    yfButton,
    yfInput,
    yfSelect,
    yfMenu,
    yfBase,
    yfSlider,
    yfNav,
    yfTotalLabel,
    yfTotalLabelSecond,
    yfTotalLabelThird,
    yfuploader,
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
    yfButton,
    yfInput,
    yfSelect,
    yfMenu,
    yfBase,
    yfSlider,
    yfNav,
    yfTotalLabel,
    yfTotalLabelSecond,
    yfTotalLabelThird,
    yfuploader,
}