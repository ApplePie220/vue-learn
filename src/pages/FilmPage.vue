<template>
  <div class="film-page">
    <div class="container" v-if="film">
      <h1>{{ film.title }}</h1>
      <img
          :src="film.img"
          :alt="film.title"
      >
      <div class="section">
        <p class="section__title">Немного о сюжете:</p>
        <p class="section__description">{{ film.description }}</p>
      </div>
      <div class="section">
        <p class="section__title">Рейтинг:</p>
        <p class="section__description">{{ film.rating }}</p>
      </div>
      <div class="section">
        <p class="section__title">Актерский состав:</p>
        <p class="section__description">{{ film.actors.join(', ') }}</p>
      </div>
      <div class="section">
        <p class="section__title">Режисеры:</p>
        <p class="section__description">{{ film.directors.join(', ') }}</p>
      </div>
      <div class="line" />
      <div class="review">
        <h3>Смотрели этот фильм?</h3>
        <p>Самое время оставить отзыв о нем:</p>
        <ul>
          <li
              v-for="reactions in reaction"
              :key="reactions.id"
          >
            <button type="button" class="btn btn-outline-dark">
              {{ reactions.title }}
            </button>
          </li>
        </ul>

      </div>
    </div>
  </div>

</template>

<script>
import films from '@/mocks/films.js'
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      film: null
    }
  },
  computed: {
    ...mapGetters(['getReactions']),
    reaction(){
      return this.getReactions
    }
  },
  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
    }
  }
}
</script>

<style lang="scss" scoped>
.film-page {
  padding-bottom: 100px;
  .back {
    color: #351c1c;
    margin-left: 30px;
    margin-top: 30px;
  }
  h1 {
    color: #5a1414;
    padding-bottom: 15px;
    position: relative;
  }
  .line {
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
    margin-bottom: 45px;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 1160px;
    height: 600px;
    margin-bottom: 30px;
  }
  .section {
    &__title {
      color: #EB5804;
      font-weight: 700;
      font-size: 25px;
      margin-bottom: 10px;
    }
    &__description {
      color: #6e1818;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .review {
    h3 {
      color: #aa4d0f;
    }
    p {
      font-weight: 600;
      font-size: 18px;
      color: #EB5804;
    }
    ul {
      padding-left: 0;
      list-style: none;
      display: flex;
      li {
        margin-right: 15px;
      }
    }
  }
}
</style>

