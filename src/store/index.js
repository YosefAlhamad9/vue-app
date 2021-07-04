import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    User: UserModule,
  },
});
