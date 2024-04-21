<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: 'Russia',
        favTheme: ['IT'],
        agreeWithEmail: false,
        gender: 'female'
      },
      countries: [
        {
          labe: 'Россия',
          value: 'Russia'
        },
        {
          labe: 'Украина',
          value: 'Ukraine'
        },
        {
          labe: 'США',
          value: 'USA'
        }
      ],
      themes: [
        {
          labe: 'Инф. технологии',
          value: 'IT'
        },
        {
          labe: 'Языки',
          value: 'languages'
        },
        {
          labe: 'Математика',
          value: 'mathematics'
        }
      ]
    }
  },
  validations: {
    form: {
      login: { required, minLength: minLength(6) },
      email: {required, email},
      password: {required }

    }
  },
  methods: {
    checkForm(){
      this.v$.form.$touch()
      if (!this.v$.form.$error) {
        console.log("Валидация прошла успешно")
      }
    }
  }
}
</script>

<template>
<form class="sign-up" @submit.prevent="checkForm">
  <div class="form-group">
    <label for="login">Логин:</label>
    <input
      id="login"
      class="form-control"
      :class="v$.form.login.$error ? 'is-invalid' : ''"
      v-model.trim="form.login"
    >
    <p v-if="v$.form.login.$dirty && !v$.form.login.required" class="invalid-feedback">
      Обязательное поле
    </p>
    <p v-if="v$.form.login.$dirty && !v$.form.login.minLength" class="invalid-feedback">
      Логин должен быть не менее 6 символов
    </p>
  </div>
  <div class="form-group">
    <label for="login">Почта:</label>
    <input
        id="email"
        type="email"
        class="form-control"
        v-model.trim="form.email"
    >
  </div>
  <div class="form-group">
    <label for="login">Пароль:</label>
    <input
        id="password"
        type="password"
        class="form-control"
        v-model.trim="form.password"
    >
  </div>
  <div class="form-group">
    <label for="country">Страна проживания:</label>
    <select id="country" class="form-control" v-model="form.country">
      <option
          v-for="(country, index) in countries"
          :key="index"
          :value="country.value"
      >
        {{ country.labe }}
      </option>
    </select>
  </div>
  <div class="form-group">
    <label for="themes">Любимые темы:</label>
    <select id="themes" class="form-control" v-model="form.favTheme" multiple>
      <option
          v-for="(theme, index) in themes"
          :key="index"
          :value="theme.value"
      >
        {{ theme.labe }}
      </option>
    </select>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="notification" v-model="form.agreeWithEmail">
    <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
  </div>
  <div class="flex">
    <div class="form-check">
      <input class="form-check-input"
             value="male"
             type="radio"
             name="exampleRadios"
             id="male"
             v-model="form.gender"
      >
      <label class="form-check-label" for="male">Мужчина</label>
    </div>
    <div class="form-check">
      <input class="form-check-input"
             value="female"
             type="radio"
             name="exampleRadios"
             id="female"
             v-model="form.gender"
      >
      <label class="form-check-label" for="female">Женщина</label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Сохранить</button>
</form>
</template>

<style scoped>
.form-control {
  width: 400px;
}

.form-check {
  margin-right: 10px;
}

button {
  margin-top: 15px;
}
</style>

