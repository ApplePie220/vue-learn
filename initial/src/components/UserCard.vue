<template>
  <div class="user-card">
    <h1>Научу зарабывать 1 рубль в час</h1>
    <div class="main-information">
      <img src="../assets/main.jpg" width="400px">
      <div class="info">
        <h2>
          {{ getAuthorFullName }}
        </h2>
        <strong>Бизнес-коуч</strong>
        <ul>
          <li>Учу людей делать РЕАЛЬНЫЕ деньги, на себя времени нет, но есть на вас.</li>
          <li>"Успешный успех" давно в прошлом, я за "Провальный успех".</li>
          <li>Пообещал, что сделаю стрижку в стиле McDonald's, когда кого-нибудь обману.</li>
        </ul>
      </div>

    </div>
    <p> Участников: {{ users.length }}</p>
    <ul>
      <li v-for="(user, index) in users" :key="index">
          {{ `${index + 1}. ${getUserFullName(user)}` }}
      </li>
    </ul>
    <button type="button" @click="currentPage--">
      Пред.
    </button>

    <button v-for="page in pages" :key="page" type="button" @click="currentPage = page--">
      {{ page }}
    </button>

    <button type="button" @click="currentPage++">
      След.
    </button>
    <p>Страница {{ currentPage }} из {{ pages }}</p>

  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      firstName: 'Максим',
      secondName: 'Богдан',
      lastName: 'Благословленный',
      users: [
        {
          firstName: 'Барни',
          secondName: 'Джей',
          lastName: 'Стинсон'
        },
        {
          firstName: 'Нильсон',
          secondName: 'Кей',
          lastName: 'Блабла'
        },
        {
          firstName: 'Маршалл',
          secondName: 'Дмитрий',
          lastName: 'Эриксон'
        }
      ],
      pages: 3,
      currentPage: 1

    }
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName}  ${this.secondName}  ${this.lastName}`.toUpperCase()
    }
  },
  methods: {
    getUserFullName(user) {
      return `${user.firstName}  ${user.secondName}  ${user.lastName}`
    },
    loadUsers(page) {
      console.log(`Загрузка пользователей: страница - ${page}`)
    }
  },
  watch: {
    currentPage(page){
       this.loadUsers(page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-card {
    margin-top: 40px;
  }
  .info {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 14px;
  }
</style>