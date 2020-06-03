<template>
    <div
    
    :class="[
        type === 'textarea' ? 'yf-textarea':'yf-input'
    ]">
       <template v-if="type !== 'textarea'">
           <input :style="" class="yf-input__inner" type="text" :placeholder="placeholder">
       </template>
    </div>
</template>
<script>
export default {
    name:'yfInput',
    data(){
        return{

        }
    },
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        }
        
    }
}
</script>
<style lang="stylus" scoped>
.yf-input
    position inline-block
.yf-input__inner
    width 180px
    height 22px
    margin 4px auto
    &:focus
        outline-color #33CC33

</style>