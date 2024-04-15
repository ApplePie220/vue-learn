<template>
<div class="product-card">
  <img
    :src="imgUrl"
    width="300px"
    >
  <div class="product-card_info">
    <h2>{{ title }}</h2>
    <p class="price">{{ price }}$</p>
    <p class="count">Доступно для доставки {{count}} шт.</p>
    <button type="button" @click="addToBasket">Добавить в корзину</button>
  </div>

</div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 80
      }
    },
    price: {
      type: Number,
      required: true
    } ,
    imgUrl: {
      type: String,
      default: 'https://hoff.ru/upload/iblock/21e/n4te02siu89ecm6zsh3nsd0gt0ve29e7.jpg'
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBasket(){
      this.$emit('addToBasket');
    }
  }
}
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;
  &__info {
    margin-top: 20px;
    h2, .price {
      font-weight: 500;
    }
    .count {
      color: rgb(143, 143, 143);
    }
    button {
      background-color: rgb(221, 56, 56);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 14px;
      display: block;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}
</style>
