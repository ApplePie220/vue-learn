<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isRulesReaded: false
    }
  },
  created() {
    this.$log()
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    onScroll(){
      this.isRulesReaded = true;
    }
  }
}
</script>

<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
            class="modal-body"
            @scroll="onScroll"
        >
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
                type="button"
                class="btn btn-secondary"
            >
              Отмена
            </button>
            <button
                type="button"
                class="btn btn-primary"
                :disabled="!isRulesReaded"
            >
              Принять
            </button>
          </slot>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.modal {
  display: block;
}

.modal-body {
  height: 200px;
  overflow-y: scroll;
}
</style>
