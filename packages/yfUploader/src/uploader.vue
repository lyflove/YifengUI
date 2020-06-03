<template>
    <div class="yfuploader">
        <img src="../../../src/assets/pic.png" alt="">
        <input type="file" name="image"  accept="image/*" multiple onfocus="this.blur()" id="uploader" v-on:change='handleInputChange'>
    </div>
</template>
<script>
export default {
    name:"yfUploader",
    methods: {
        handleInputChange(){
            let uploader = document.getElementById("uploader");
            this.$emit('afterRead', uploader.files);
        }
    },
}
</script>
<style lang="stylus" scoped>
.yfuploader
    position relative
    width 40px
    height 40px
    img 
        position absolute
        width 40px
        height 40px
    input 
        position absolute
        height 40px
        width 40px
        opacity 0
        

</style>