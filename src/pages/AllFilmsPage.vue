<template>
  <div class="films-page container">
    <h2>Выбери фильм на свой вкус</h2>
    <films-list :films="films" />
  </div>
</template>

<script>
import FilmsList from '../components/FilmsList.vue'
import films from '../mocks/films.js'


export default {
  components: {FilmsList},
  data() {
    return {
      films
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
  color: #712f2f;
  margin-bottom: 30px;
}
</style>
