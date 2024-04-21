<template>
  <div class="root">
    <label>
      Введите email:
      <input type="email" :value="email" @input="emailInput($event.target.value)"/>
    </label>
    <label>
      Введите пароль:
      <input type="password" :value="password" @input="passwordInput($event.target.value)"/>
    </label>
    <label>

    </label>
  </div>
</template>

<script>
export default {
  name: "MyComponents",
  data () {
    return{
      email: 'example@em.ru',
      password: '123456'
    }
  },
  methods: {
    emailInput(value) {
      this.email = value //здесь будет наше значение input - почта пользака
    },
    passwordInput(value){
      this.password = value //здесь будет наше значение input - пароль пользака
    }
  }
}
</script>

<style scoped>

</style>