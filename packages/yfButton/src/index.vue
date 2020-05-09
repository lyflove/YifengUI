<template>
    <button id="yfbutton"
        @click="handleClick"
        :text="text"
        :type="type"
        :round="round"
        :width="width"
        :height="height"
        :loadingText="loadingText"
        :style="{
            width:realSize.w,
            height:realSize.h,
            background:buttonBgColor(),
            color:buttonColor(),
            border:buttonBorder(),
            cursor:disabled?'not-allowed':'pointer',
            opacity:disabled?0.5:1,
            borderRadius:round?round+'px':0,
            display:block?'block':''
        }"
        :class="[
            normal?'yfbutton-normal':'yfbutton-italic',
            {
            }
        ]">
        <!-- <i v-if="!loading" class="yfbutton-icon"></i> -->
        <span v-if="!loading&&text!==''">
           {{text}}
        </span>
        <span v-if="!loading&&text===''">
            <slot></slot>
        </span>
        
        <i v-if="loading" class="loading" :class="buttonBgColor()==='white'?'loadingNotWhite':''">{{loadingText}}</i>
        

    </button>
</template>
<script>
export default {
    name:'yfButton',
    props:{
        text:{
            type:String,
            default:''
        },
        loadingText:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'default'
        },
        round:{
            type:String,
            default:"0"
        },
        plain:Boolean,
        disabled:Boolean,
        normal:{
            type:Boolean,
            default:false
        },
        loading:Boolean,
        block:Boolean,
        width:{
            type:String,
            default:'80%',
        },
        height:{
            type:String,
            default:'40px',
        },
        size:{
            type:Object,
            default:function(){
                return {
                    w:'',
                    h:''
                }
            }
        }
    },
    computed: {
        realSize(){
            return {
                w:this.size.w===''?this.width:this.size.w,
                h:this.size.h===''?this.height:this.size.h,
            }
        }
    },
    methods: {
        handleClick(evt){
            this.$emit('click', evt);
        },
        buttonBgColor(){
            let colorMap = {
                'default':'white',
                'primary':'#33CC33',
                'info':'#3399FF',
                'danger':'#CC0000',
                'warning':'#CC9933'
            };
            return this.plain?'white':colorMap[this.type];
        },
        buttonColor(){
            let colorMap = {
                'default':'white',
                'primary':'#33CC33',
                'info':'#3399FF',
                'danger':'#CC0000',
                'warning':'#CC9933'
            };
            return this.plain?colorMap[this.type]:(this.type==='default'?'black':'white');
        },
        buttonBorder(){
            let colorMap = {
                'default':'lightgray',
                'primary':'#33CC33',
                'info':'#3399FF',
                'danger':'#CC0000',
                'warning':'#CC9933'
            };
            return "1px solid "+colorMap[this.type];
        }
    },
}
</script>
<style lang="stylus" scoped>
#yfbutton
    line-height normal
    margin 8px auto
    font-size 16px
    text-indent 4px
    letter-spacing 4px
    border 1px solid lightgray
    outline none

.yfbutton-normal
    font-style normal

.yfbutton-italic
    font-style italic    

.loading
    font-size 14px
    letter-spacing 0
    text-indent 0
    pointer-events none
    &:before 
        content '.'
        display inline-block
        width  1em
        height  1em
        margin-right 0.8em
        border 2px solid white
        border-radius 50%
        vertical-align -10%
        clip-path polygon(0% 0%, 100% 0% ,100% 80%, 0% 50%)
        animation rotating 2s cubic-bezier(.5 ,.5, .5, .8) infinite
        @keyframes rotating 
            from
                -webkit-transform  rotate(0deg)
            to
                -webkit-transform  rotate(360deg)
.loadingNotWhite
    &:before  
        border 2px solid black
.yfbutton-icon
    &:before
        content '\F0C8'

</style>