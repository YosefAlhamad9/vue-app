<template>
  <div class="product">
    <img :src="image" alt="" />
    <div class="product__info">
      <p>
        <span>{{ title.substring(0, 100) + "..." }}</span>
      </p>
      <p class="product__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div class="product__rating">
        <p>⭐</p>
      </div>
    </div>
    <button @click="ADD_TO_BASKET(item)">Add to Basket</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["image", "title", "rating", "price", "id"],
  data() {
    return {
      item: {
        id: this.id,
        title: this.title,
        image: this.image,
        price: this.price,
        rating: this.rating,
      },
    };
  },
  methods: {
    ...mapMutations(["ADD_TO_BASKET"]),
  },
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: rgba(255, 255, 255, 0.712);
  z-index: 1;
}

.product > img {
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
}

.product__info {
  height: 100px;
  margin-bottom: 15px;
}

.product__price {
  margin-top: 5px;
}

.product__rating {
  display: flex;
}

.product > button {
  background: #133c55;
  border: 1px solid;
  margin-top: 10px;
  border-color: #288cca #133c55 #041c2b;
  color: #fff;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
