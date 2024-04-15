<template>
<div class="product-list">
  <h1>Тумбочки</h1>
  <ul class="list-default flex">
    <li
        v-for="(product, index) in products"
        :key="index"
    >
      <product-card
          :title="product.title"
          :price="product.price"
          :imgUrl="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
      />
    </li>
  </ul>
</div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: {ProductCard},
  data() {
    return {
      products: [
        {
          title: "Тумбочка Tesammans",
          price: 60,
          imgUrl: 'https://hoff.ru/upload/iblock/21e/n4te02siu89ecm6zsh3nsd0gt0ve29e7.jpg',
          count: 19
        },
        {
          title: "Тумбочка Olivia",
          price: 40,
          imgUrl: 'https://hoff.ru/upload/iblock/5d6/5d67750d1f6dc061daf2de62c31f00cf.jpg',
          count: 20
        },
          {
          title: "Тумбочка Scandica Horten",
          price: 60,
          imgUrl: 'https://hoff.ru/upload/iblock/1d6/1d64be1e2a7938169371ff39ac51a4d2.jpg',
          count: 45
        }
      ]
    }
  },
  methods: {
    addToBasket(index){
      console.log(index)
    }
  }
}
</script>

<style lang="scss">
li {
  margin-right: 20px;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}
</style>