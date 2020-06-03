<template>
    <div
        id="yf-select"
        :lists="lists"
    >
        <yf-option v-for="(list,$index) in lists" :key="$index" :value="list"></yf-option>
    </div>
</template>
<script>
import clickoutside from '../../../src/utils/clickoutside';

import yfOption from '../../yfOption/src/option';

export default {
    name:'yfSelect',
    components:{
        yfOption
    },
    props:{
        multiple: Boolean,
        lists:{
            type:Array,
        },
        value:{
            required:true,
        }
    },
    data(){
        return{
            
        }
    },
    provide(){
        return {
            'select':this
        }
    },
    directives:{clickoutside},
    methods: {
        
    },

}
</script>
<style lang="stylus" scoped>
#yf-select{

}
</style>