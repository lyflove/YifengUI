<template>
  <div class="app">
      <yf-nav title="标题" leftArrow v-on:left-click="show=true"></yf-nav>
      <yf-button text=""  :normal="false"  :size="{h:'30px',w:'180px'}">
          哈哈 
      </yf-button>
      <yf-button block :text="buttonText" normal  type="info">
          xx 
      </yf-button>
      <yf-button text="哈哈" :normal="false"  type="danger" width="160px" height="30px;">
           
      </yf-button>
      <yf-button text="哈哈" :normal="false"  type="primary" width="160px" >
           
      </yf-button>
      <yf-button text="" :normal="false"  type="warning" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button text="" plain  type="warning" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button text="" plain  type="primary" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button text="" disabled  type="primary" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button text="" disabled  type="danger" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button text="" round=10 disabled  type="danger" :size="{h:'30px',w:'180px'}">
           我不是哈哈
      </yf-button>
      <yf-button loading  :size="{h:'30px',w:'180px'}">
          哈哈 
      </yf-button>
      <yf-button loading type="primary"  :size="{h:'40px',w:'180px'}">
          哈哈 
      </yf-button>
      <yf-button loading loadingText="加载中..."  type="primary"  :size="{h:'40px',w:'180px'}">
          哈哈 
      </yf-button>
<!-- 
      <yf-input placeholder="xxx">

      </yf-input> -->
      <!-- <yf-input>

      </yf-input> -->
      <!-- <yf-select :list="lists" :value="1">

      </yf-select> -->
    <yf-menu 
            :show="show" 
            v-on:closeMe="show=false" 
            :originLists="originLists"
        >
        </yf-menu>
    
  </div>
</template>

<script>
import yfButton from '../packages/yfButton/index'
import yfInput from '../packages/yfInput/index'
import yfSelect from '../packages/yfSelect/index'
import yfMenu from '../packages/yfMenu/index'
import yfSlider from '../packages/yfSlider/index'
import yfNav from '../packages/yfNav/index'

export default {
  name:'App',
  components:{
      yfButton,
      yfInput,
      yfSelect,
      yfMenu,
      yfSlider,
      yfNav
      
  },
  data(){
      return{
          buttonText:'哈哈',
          lists:['1','2'],
        //   backgroundImage:'../../../src/assets/backgroundImage.png',
        //   imageLists:['../../../src/assets/left/1.png','../../../src/assets/left/2.png'],
          originLists:[{
              modName:'菜单1',
              map:{
                  bean:[{
                   modName:'子菜单1'   
                  }]
              }

          },{
              modName:'菜单2',
              map:{
                  bean:[{
                   modName:'子菜单2'   
                  }]
              }

          }],
          show:true,
      }
  },
  mounted(){
      this.show = true;
  },
  methods:{
      left(){
          
      },
      right(){

      },
      toPage(url){
          alert(url);
      },
      
  }
}
</script>
<style lang="stylus" scoped>
.app{
    width 100%;
    height 100%;
}
</style>
