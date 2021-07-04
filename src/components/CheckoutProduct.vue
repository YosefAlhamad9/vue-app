<template>
  <div className="checkoutProduct">
    <img :src="image" alt="" className="checkoutProduct__image" />

    <div className="checkoutProduct__info">
      <p className="checkoutProduct__title">{{ title }}</p>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div className="checkoutProduct__rating">
        <p>⭐</p>
      </div>

      <button @Click="REMOVE_FROM_BASKET(id)">
        Remove from Basket
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["image", "title", "rating", "price", "id"],

  methods: {
    ...mapMutations(["REMOVE_FROM_BASKET"]),
  },
};
</script>

<style scoped>
.checkoutProduct {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.checkoutProduct__info {
  padding-top: 20px;
  margin-left: 10px;
}

.checkoutProduct__info > button {
  margin-top: 20px;
  color: #fff;
  background-color: #133c55;
  border: 1px solid;
  border-color: #133c55;
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.checkoutProduct__image {
  object-fit: contain;
  width: 180px;
  height: 180px;
}

.checkoutProduct__rating {
  display: flex;
}

.checkoutProduct__title {
  font-size: 17px;
  font-weight: 800;
}
</style>
