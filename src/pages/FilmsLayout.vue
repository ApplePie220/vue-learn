<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: {MainHeader}
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