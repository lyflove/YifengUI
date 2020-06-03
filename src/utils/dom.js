import Vue from 'vue';

const isServer = Vue.prototype.$isServer;    

export const on = (function(){
    if (!isServer && document.addEventListener) {
        return function(element,event,handle){
            element.addEventListener(event,handle,false);
        }
    } else {
        return function(element,event,handle){
            if (element && event && handle) {
                element.attachEvent('on' + event,handle);
            }
        }
    }
})();

export const off = (function(){
    if (!isServer && document.removeEventListener) {
        return function(element, event, handler) {
          if (element && event) {
            element.removeEventListener(event, handler, false);
          }
        };
    } else {
        return function(element, event, handler) {
          if (element && event) {
            element.detachEvent('on' + event, handler);
          }
        };
    }
})();