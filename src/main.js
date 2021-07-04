import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import router from "./router";

const store = createStore({
  state() {
    return {
      user: null,
      basket: [],
    };
  },

  mutations: {
    GET_BASKET_TOTAL(basket) {
      basket?.reduce((amount, item) => item.price + amount, 0);
    },
    ADD_TO_BASKET(state, action) {
      state = state;
      state.basket = [...state.basket, action];
    },
    REMOVE_FROM_BASKET(state, basket_id) {
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === basket_id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      state.basket = newBasket;
    },
    EMPTY_BASKET(state) {
      state.basket = [];
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
});

const app = createApp(App);

app.use(store).use(router);

app.mount("#app");
