<template>
  <div>
      <yf-button text=""  :normal="false"  :size="{h:'30px',w:'180px'}">
          哈哈 
      </yf-button>
      <yf-button block :text="buttonText" normal  type="info">
          xx 
      </yf-button>
      <yf-button text="哈哈" :normal="false"  type="danger" width="160px" height="30px;">
           
      </yf-button>
      <yf-button text="哈哈" :normal="false"  type="primary" :size="{h:'30px',w:'200px'}">
           
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
  </div>
</template>

<script>
// import yfButton from '../packages/yfButton/index'
export default {
  name:'App',
  components:{
  },
  data(){
      return{
          buttonText:'哈哈'
      }
  },
  
  methods:{
      
  }
}
</script>