<script>
import MainHeader from "@/components/MainHeader.vue";
import {mapActions} from "vuex"

export default {
  components: {MainHeader},
  methods: {
    ...mapActions({
      load: 'loadReactions'
    })
  },
  created() {
    this.load(1000)
    // this.$store.dispatch("loadReactions", 1000)
  }
}
</script>

<template>
  <div class="films-layout">
    <main-header />
    <router-view />
  </div>
</template>

<style scoped>

</style>