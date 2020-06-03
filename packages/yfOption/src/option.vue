<template>
    <li id="yfOption"
        :value="value"
        :class="[
            selected?'yfOption-selected':'yfOption-normal',
        ]"
    >
        <slot>
            <span>{{currentLabel}}</span>
        </slot>
    </li>
</template>
<script>
export default {
    name:'yfOption',
    inject:['select'],
    props:{
        value: {
            required: true
        },
        
        label: [String, Number],
        disabled:{
            type:Boolean,
            default:false,
        },
        selectedIndex:{

        }
        
    },
    data(){
        return {
            text:'',
        }
    },
    computed:{
        currentLabel() {
            return this.label || (this.isObject ? '' : this.value);
        },
        selected(){
            if (!this.select.multiple) {
                return this.isEqual(this.value, this.select.value);
            } else {
                return this.contains(this.select.value, this.value);
            }
        },
        isObject() {
            return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
        },
    },
    methods: {
        isEqual(a, b) {
            console.log("isObject:"+this.isObject);
            if (!this.isObject) {
                return a === b;
            } else {
                const valueKey = this.select.valueKey;
                return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
            }
        },
        contains(arr = [], target) {
            if (!this.isObject) {
                return arr && arr.indexOf(target) > -1;
            } else {
            const valueKey = this.select.valueKey;
                return arr && arr.some(item => {
                    return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
                });
            }
        },
    },

}
</script>
<style lang="stylus" scoped>
#yfOption
    height 22px
    line-height normal
.yfOption-selected
    color #3399FF
.yfOption-normal
    color white
</style>