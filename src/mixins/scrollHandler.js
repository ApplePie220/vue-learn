export default {
    methods: {
    onScrollEnd(){
    },
    onScroll(event){
        const container = event.target
        if (container.clientWidth + container.scrollTop > container.scrollHeight) {
            this.onScrollEnd()

        }
      }
    }
}