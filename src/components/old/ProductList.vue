<template>
<div class="product-list">
  <div class="flex top-information">
    <h1>Тумбочки</h1>
    <my-input v-model="searchText"/>
    {{ searchText }}
    <button>
      Найти
    </button>
  </div>
  <div class="product-list-container">
  <ul class="list-default">
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
</div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import MyInput from "./MyInput.vue";

export default {
  name: "ProductList",
  components: {MyInput, ProductCard},
  data() {
    return {
      searchText: '',
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

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-information {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;
}

.top-information button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  cursor: pointer;
  margin-left: 10px;
}

.product-list-container {
  overflow-x: auto;
  width: 80%; /* Устанавливаем ширину */
  display: flex; /* Включаем flexbox для центрирования */
  justify-content: center; /* Центрируем по горизонтали */
}

.list-default {
  list-style: none;
  padding: 0;
  display: flex;
}

.list-default li {
  margin-right: 20px;
}

</style>
