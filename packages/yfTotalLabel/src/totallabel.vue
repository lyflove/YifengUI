<template>
    <div class="totalLabel">
        <li>
            <span class="titleText">{{titleText}}</span>
            <span class="numberText">{{numberText}}</span>
        </li>
    </div>
</template>
<script>
export default {
    name:"yfTotalLabel",
    props:{
        titleText:{
            type:String,
            default:'T'
        },
        numberText:{
            type:Number,
            default:0
        }
    }
}
</script>
<style lang="stylus" scoped>
.totalLabel
    background rgba(33,127,221,0.9)
    height 120px
    li
        margin-left 32px
        color white
        height 60px
        line-height 60px
        overflow hidden
        .titleText
            position absolute
            font-size 18px
            width 50%
            left 44px
        .numberText
            position absolute
            font-size 36px
            width 50%
            right 16px
            text-align right 
        
</style>