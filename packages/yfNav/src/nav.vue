<template>
    <div id="yfNav"
    :title="title"
    >
        <div class="yfNav-left" v-on:click="handleClick('left')">
            <i v-if="leftArrow">
                <img v-if="leftArrowSrc!==''" :src="leftArrowSrc" alt="">
                <img v-else src="../../../src/assets/back.png" alt="">
            </i>
            <span>
                {{leftText}}
            </span>
        </div>
        <p class="yfNav-title">{{title}}</p>
        <div v-if="rightText" class="yfNav-right" v-on:click="handleClick('right')">
            {{rightText}}
        </div>
        <div v-if="rightArrowSrc" class="yfNav-right" v-on:click="handleClick('right')">
            <img :src="rightArrowSrc" >
        </div>
    </div>
</template>
<script>

export default {
    name:'yfNav',
    components:{
    },
    provide(){
        
    },
    props:{
        leftArrow:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'',
        },
        leftText:{
            type:String,
            default:''
        },
        rightText:{
            type:String,
            default:'',
        },
        leftArrowSrc:{
            type:String,
            default:'',
        },
        rightArrowSrc:{
            type:String,
            default:'',
        }

    },
    
    methods: {
        handleClick(dir,evt){
            if(dir==='left'){
                this.$emit('left-click', evt);
            }else{
                this.$emit('right-click', evt);
            }
            
        }
    },
}
</script>
<style lang="stylus" scoped>
#yfNav
    line-height 44px
    position relative
    width 100%
    height 44px
    background rgba(33,127,221,0.9)
    z-index 99
    color white
    .yfNav-title
        text-align center
        font-size 19px
        height 100%
    .yfNav-left
        position absolute
        height 100%
        left 16px
        span 
            color #3399FF
        img 
            width 20px
            height 20px
            padding 5px
            margin-top 7px
    .yfNav-right
        position absolute
        height 100%;
        top 0
        right 0
        margin-right 8px
        color #3399FF
        img 
            width 20px
            height 20px
            padding 5px
            margin-top 7px
</style>