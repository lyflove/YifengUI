<template>
    <div class="totalSecondLabel">
        <div class="numberText">
            {{numberText}}
        </div>
    </div>
</template>
<script>
export default {
    name:"yfTotalSecondLabel",
    props:{
        numberText:{
            type:String,
            default:"0"
        }
    }
}
</script>
<style lang="stylus" scoped>
.totalSecondLabel
    background rgba(33,127,221,0.9)
    height 220px
    text-align center
    .numberText
        position relative
        height 140px
        width 140px
        margin 0 auto
        border-radius 70px
        overflow hidden
        border 1px solid white
        line-height 140px
        top 40px
        font-size 40px
        color white

        
</style>