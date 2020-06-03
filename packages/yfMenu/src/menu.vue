<template>
        <transition name="slide-fade">
            <div id="yfMenu" v-if="show"  v-on:click="closeMe">
                <div class="yfMenu_content" @click.stop>
                    <div class="yfMenu_top" :style="{
                        backgroundImage:'url('+backgroundImage+')'            
                    }">

                    </div>
                    <img class="headImage" @click="logout" :src="headImage===''?require('../../../src/assets/default.png'):headImage">
                    <div class="yfMenu_box">
                        <ul class="imglist">
                            <li></li>
                            <li :style="{
                                background:index===$index?'rgb(51,148,220)':'transparent'
                            }"  v-for="(list,$index) in imgLists" v-on:click="toNextStep($index,0)">
                                <img :src="list">
                            </li>
                        </ul>
                        <ul class="originlist infolist" > 
                            <li>
                                
                            </li>
                            <li v-for="(list,$index) in originLists" v-on:click="toNextStep($index,0)">
                                <span class="modName">{{list.modName}}</span>
                            </li>
                        </ul>
                        <ul class="secendlist infolist" 
                        :class="showMove1?'movelist':''"
                        >
                            <li>
                                <img v-on:click="leftClick" class="yfMenu_box_backImg" src='../../../src/assets/back.png'>
                            </li>
                            <li  v-for="(list,$index) in levelOneLists" v-on:click="toNextStep($index,1)">
                                <span class="modName">{{list.modName}}</span>
                            </li>
                        </ul>
                        <ul class="thirdlist infolist"
                        :class="showMove2?'movelist':''">
                            <li>
                                <img v-on:click="leftClick" class="yfMenu_box_backImg" src='../../../src/assets/back.png'>
                            </li>
                            <li v-for="(list,$index) in levelTwoLists" v-on:click="toNextStep($index,2)">
                                <span class="modName">{{list.modName}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
</template>
<script>
// import clickoutside from '../../../src/utils/clickoutside';

export default {
    name:'yfMenu',
    components:{
        
    },
    props:{
        show:{
            type:Boolean,
            default:false,
        },
        backgroundImage:{
            type:String,
            default:'',
        },
        headImage:{
            type:String,
            default:'',
        },
        originLists:{
            type:Array,
            default:()=>{
                return []
            }
        },
        imgLists:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return{
            showMove1:false,
            showMove2:false,
            levelOneLists:[],
            levelTwoLists:[],
            type:"",
            title:'菜单',
            index:-1
        }
    },
    created() {
        
    },
    watch:{

    },
    computed: {
        leftText(){
            if(!this.showMove2 && !this.showMove1){
                return '';
            }
            return '返回';
        },
        leftArrow(){
            if(!this.showMove2 && !this.showMove1){
                return false;
            }
            return true;
        },
        
        
    },
    mounted() {
        // let bodyHeight = window.screen.availHeight;
        // let yfMenu = document.getElementById("yfMenu");
        // alert(bodyHeight);
        // yfMenu.style.height = bodyHeight + 'px';
        // alert(yfMenu);
    },
    methods: {
        logout(){
            this.$emit("logout");
        },
        closeMe(){
            this.$emit("closeMe");
        },
        leftClick(){
            if(this.showMove2){
                this.showMove2 = false;
            }else{
                this.showMove1 = false;
                this.index=-1;
            }
        },
        toNextStep(index,level){
            if(level === 0){
                if(this.originLists[index].map && this.originLists[index].map.bean && this.originLists[index].map.bean.length > 0){
                    //ul2左移
                    this.levelOneLists = this.originLists[index].map.bean;
                    this.showMove2 = false;
                    this.showMove1 = true;
                    this.title = this.originLists[index].modName;
                    this.index = index;
                }else{
                    // alert(this.originLists[index].modName);
                    let url = this.originLists[index].url;
                    this.$emit('toNextStep', url);
                    
                }
            }else if(level === 1){
                if(this.levelOneLists[index].map && this.levelOneLists[index].map.bean  && this.levelOneLists[index].map.bean.length > 0){
                    this.levelTwoLists = this.levelOneLists[index].map.bean;
                    this.showMove2 = true;
                    this.title = this.levelOneLists[index].modName;
                }else{
                    let url = this.levelOneLists[index].url;
                    this.$emit('toNextStep', url);
                }
            }else{
                let url = this.levelTwoLists[index].url;
                this.$emit('toNextStep', url);
            }
        },
    },
}
</script>
<style lang="stylus" scoped>
#yfMenu
    position fixed
    width 100%
    height 100%
    top 0
    background transparent
    z-index 9999
    .yfMenu_content
        position absolute
        width w=80%
        height 100%
        overflow-x hidden
        overflow-y auto
        top 0
        .yfMenu_top
            width 100%
            height 220px
            background rgb(35,126,216)
            background-size 100% 100%
            z-index 1
        .headImage
            z-index 999
            position absolute
            margin-top 185px
            width 70px
            height 70px
            border-radius 35px
            top 0
            left 50%
            margin-left -35px
            overflow hidden
        .yfMenu_box
            width 100%
            height calc(100% - 220px)
            position relative
            ul
                padding 0
                margin 0;
                height 100%
                position absolute
                li
                    margin-top 8px
                    height 30px
                    list-style none
                    position relative
                    img,span 
                        display inline-block
        .imglist
            display inline-block
            width 80px
            text-align center
            background rgb(35,126,216)
            li
                width 80px
                height 30px
                background transparent
                img
                    margin-left 40px
                    margin-top 5px
                    width 20px
                    height 20px
        .infolist
            box-shadow: -2px 0px 8px 3px rgb(15,108,209)
            color white
            span
                height 30px
                line-height 30px
                margin-left 16px
            .modName
                margin-left 50px
        .originlist
            left 80px
            width calc(100% - 80px)
            background rgb(35,126,216)
            z-index 8
            box-shadow: -2px 0px 8px 3px rgb(15,108,209)
            
        .secendlist
            left 100%
            width calc(100% - 80px)
            transform: translateX(0);
            transition: transform 0.4s
            z-index 9
            background rgb(33,127,221)
            overflow-y scroll
        .thirdlist
            left 100%;
            width calc(100% - 80px)
            transform: translateX(0);
            transition: transform 0.3s
            background rgb(33,127,221)
            z-index 10   
        .movelist
            transform translateX(-100%)
            transition: transform 0.3s linear 0s
        

.yfMenu_box_backImg
    width 20px
    height 20px
    padding 5px

@keyframes slide-in 
    0%
        left -100%
    100%
        left 0
.slide-fade-enter-active 
    animation: slide-in .8s
    
.slide-fade-leave-active 
    animation: slide-in .5s reverse;
   



</style>