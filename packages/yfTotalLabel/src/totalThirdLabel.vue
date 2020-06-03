<template>
    <div class="totalThirdLabel"
        :titleText="titleText"
    >
        <div class="totalBox">
            <div class="titleText">
                <span>{{titleText}}</span>
            </div>
            <div class="numberText">
                <span>{{numberText}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"yfTotalThirdLabel",
    props:{
        numberText:{
            type:String,
            default:"0"
        },
        titleText:{
            type:String,
            default:"总数"
        }
    }
}
</script>
<style lang="stylus" scoped>
.totalThirdLabel
    position relative
    height 230px
    width 100%
    text-align center
    .totalBox
        position absolute
        width 70%
        height 165px
        margin-left 15%
        margin-top 40px
        overflow hidden
        border-radius 0 0 30px 30px
        box-shadow 0px 5px 5px 0px rgb(23,105,188)
        .titleText
            width calc(100% + 1px)
            height 40px
            padding-right 1px
            line-height 40px
            color white
            background rgb(109,221,177)
            text-align right 
            overflow hidden
            border-right 2px solid lightgray
            font-size 16px
            span 
                margin-right 16px
        .numberText
            position relative
            background white
            height 120px
            line-height 120px
            font-size 40px
            overflow hidden
            border-radius 0 0 30px 30px
            box-shadow 2px 2px 0 2px lightgray
            
            
           
        
</style>