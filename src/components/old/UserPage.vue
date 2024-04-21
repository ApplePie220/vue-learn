<script>
import Modal from './Modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    }
  }
}

</script>

<template>
<div class="user-page">
  <button
    class="btn btn-primary"
    @click="openModal"
    >
    Подробнее
  </button>
  <modal
      v-if="isModalOpen"
      title="Неважное пользовательское соглашение"
      @close="isModalOpen = false"
  >
    <div class="information">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
      </p>
    </div>
  </modal>

</div>
</template>

<style scoped>

</style>