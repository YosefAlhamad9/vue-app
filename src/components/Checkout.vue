<template>
  <Header />
  <div class="checkout">
    <div class="checkout__left">
      <div>
        <div class="info">
          <h3 v-if="user">Hello, {{ user.displayName }}</h3>
          <h3 v-else>Hello, Guest</h3>

          <h2 class="checkout__title">Your shopping Basket</h2>
        </div>

        <div
          class="basket_product"
          v-for="(item, index) in basket"
          :key="index"
        >
          <CheckoutProduct
            :id="item.id"
            :title="item.title"
            :image="item.image"
            :price="item.price"
            :rating="item.rating"
          />
        </div>
      </div>
    </div>
    <div class="checkout__right">
      <Subtotal />
    </div>
  </div>
</template>

<script>
import CheckoutProduct from "./CheckoutProduct.vue";
import Subtotal from "./Subtotal.vue";
import Header from "./Header.vue";
import { mapState } from "vuex";
export default {
  components: {
    CheckoutProduct,
    Subtotal,
    Header,
  },
  computed: {
    ...mapState(["basket", "user"]),
  },
};
</script>

<style scoped>
.checkout {
  display: flex;
  padding: 20px;
  background-color: #ffffff;
  height: max-content;
}

.checkout__title {
  margin-right: 10px;
  padding-left: 20px;
  padding: 10px;
}

.basket_product {
  margin-top: 100px;
}

h3 {
  padding-left: 13px;
}

.info {
  display: flex;
  height: 120px;
  border-bottom: 2px solid lightgray;
  justify-content: center;
  flex-direction: column;
}
</style>
