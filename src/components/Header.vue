<template>
  <div class="header">
    <router-link :to="{ name: 'Home' }">
      <img class="logo" src="../assets/logo.svg" alt="" />
    </router-link>
    <div class="search">
      <input type="text" placeholder="Search on Shoping" v-model="inputtext" />
      <span>
        <img src="../assets/search.svg" alt="" @click="search" />
      </span>
    </div>
    <div class="header__nav">
      <router-link :to="{ name: 'Login' }">
        <div class="header__option">
          <span class="header__optionLineOne" v-if="user"
            >Hello {{ user.displayName }}
          </span>
          <span class="header__optionLineOne" v-else>Hello Guest </span>
          <span class="header__optionLineTwo" @click="signout" v-if="user"
            >Sign out
          </span>
          <span class="header__optionLineTwo" v-else>Sign in </span>
        </div>
      </router-link>
      <div class="header__option">
        <span class="header__optionLineOne">Returns </span>
        <span class="header__optionLineTwo">Orders </span>
      </div>
      <router-link :to="{ name: 'Checkout' }">
        <div class="header__optionBasket">
          <img src="../assets/basket.svg" alt="" />
          <strong
            ><span class="header__optionLineTwo header__basketoption">
              {{ basket?.length }}</span
            ></strong
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "../firebase";
export default {
  setup() {
    const state = {
      inputtext: "",
    };

    return {
      state,
    };
  },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    signout() {
      auth.signOut();
    },
  },
  computed: {
    ...mapState(["user", "basket"]),
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #133c55;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
  margin-left: 20px;
  cursor: pointer;
}

.search {
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 20px;
}

.search input {
  height: 30px;
  padding: 10px;
  border: none;
  width: 50%;
  outline: none;
  border-radius: 5px 0px 0px 5px;
  max-width: 100%;
  min-width: 50%;
}

.search span {
  width: 30px;
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
}

.header__nav {
  position: absolute;
  right: 10px;
  top: 0;
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}

.header__option {
  display: flex;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 10px;
}

.header__optionLineOne {
  font-size: 10px;
}

.header__optionLineTwo {
  font-size: 18px;
  font-weight: 800px;
}

.header__optionBasket {
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
}

.header__optionBasket img {
  margin-right: 5px;
}

@media (max-width: 730px) {
  .search {
    display: none;
  }

  .header__optionLineOne {
    font-size: 6px;
  }

  .header__optionLineTwo {
    font-size: 14px;
    font-weight: 800px;
  }
}
</style>
