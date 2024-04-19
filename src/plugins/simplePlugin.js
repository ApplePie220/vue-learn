import scrollHandler from "@/mixins/scrollHandler.js";

export default {
    install(app) {
        app.mixin(scrollHandler)
        app.config.globalProperties.$log = function (){
            console.log('Simple plugin work');
        }
    }
}