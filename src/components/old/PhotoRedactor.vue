<template>
<div class="container">
  <div class="flex">
    <div class="image-wrapper">
      <img
          v-if="isCatVisible"
          :class="[imgFilters]"
          :style="imgStyles"
          src="../../assets/cat.jpg"
      >
      <p v-else>Кот скоро вернется.</p>
    </div>
    <div class="controls">
      <h1>Кот просит быть patient</h1>
      <h2>Фильтры</h2>
      <div class="btn-group flex">
        <button type="button"
                @click="imgFilters.sepia = !imgFilters.sepia"
                :class="imgFilters.sepia ? 'active': '' "
        >
          Сепия
        </button>

        <button type="button"
                @click="imgFilters.border = !imgFilters.border"
                :class="imgFilters.border ? 'active': ''"
        >
          Рамка
        </button>

      </div>

      <h2> Размер</h2>
      <div class="btn-group">
        <label>
          Ширина: {{ imgSize.currentWidth }}
          <input
            type="range"
            :value="imgSize.currentWidth"
            @input="imgSize.currentWidth = $event.target.value"
            :min="imgSize.minWidth"
            :max="imgSize.maxWidth"
          >
        </label>
        <label>
          Высота: {{ imgSize.currentHeight }}
          <input
            type="range"
            :value="imgSize.currentHeight"
            @input="imgSize.currentHeight = $event.target.value"
            :min="imgSize.minHeight"
            :max="imgSize.maxHeight"
          >
        </label>
      </div>

      <button @click="isCatVisible = !isCatVisible">
        показать / скрыть
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PhotoRedactor",
  data(){
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false

      },
      imgSize: {
        maxWidth: 680,
        maxHeight: 480,
        currentWidth:200,
        currentHeight: 200,
      }
    }

    },
    computed: {
      imgStyles(){
        return {
          width: `${this.imgSize.currentWidth}px`,
          height: `${this.imgSize.currentHeight}px`,
        }
      }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 40px;
  }
  .controls {
    margin-left: 20px;
  }
  .image-wrapper {
    width: 200px;
    height: 200px;
    background-color: #cecece;
  }
  img {
    transition: 0.2s ease;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 5px dashed #464646
    }
    &.small {
      width: 400px;
    }
  }
  button {
    margin-right: 10px;
    &.active {
      background-color: #dbdbdb;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .btn-group {
    margin-bottom: 20px;
  }
  input[type="range"] {
    display: block;
  }
</style>
