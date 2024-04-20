<script>

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    marked() {
      return marked
    },
    combinedText() {
      const upperCase = this.text.toUpperCase().replace(':)', '🙂');
      return `${upperCase}`
    }
  }
}
</script>

<template>
  <div class="text-editor">
  <textarea v-model="text"></textarea>
    <div class="output-text" :innerText="combinedText">
    </div>
  </div>
</template>

<style scoped>

</style>