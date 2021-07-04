<template>
  <div class="login">
    <router-link :to="{ name: 'Home' }">
      <img class="login__logo" src="../assets/logo2.svg" />
    </router-link>
    <div class="login__container">
      <h1>Sign-in</h1>
      <form @submit.prevent="createAccount">
        <h5>E-mail</h5>
        <input type="text" v-model="Email" />

        <h5>Password</h5>
        <input type="password" v-model="Password" />

        <button type="submit" @Click="signin" class="login__signInButton">
          Sign In
        </button>
      </form>

      <button @Click="register" class="login__registerButton">
        Create your Shoping Account
      </button>
      <button @click="google" class="login__registerButton">
        SignIn with Google
      </button>
    </div>
  </div>
</template>

<script>
import { auth, provider } from "../firebase";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      Email: "",
      Password: "",
      error: "",
    };
  },
  methods: {
    register() {
      auth
        .createUserWithEmailAndPassword(this.Email, this.Password)
        .then((result) => {
          this.SET_USER(result.user);
        })
        .catch((error) => console.log(error.message))
        .then(() => {
          this.$router.replace({ name: "Home" });
        });
    },
    signin() {
      auth
        .signInWithEmailAndPassword(this.Email, this.Password)
        .then((result) => {
          this.SET_USER(result.user);
        })
        .catch((error) => console.log(error.message))
        .then(() => {
          this.$router.replace({ name: "Home" });
        });
    },
    google() {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          this.SET_USER(result.user);
        })
        .catch((error) => console.log(error.message))
        .then(() => {
          this.$router.replace({ name: "Home" });
        });
    },
    ...mapMutations(["SET_USER"]),
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  padding-top: 100px;
}

.login__logo {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.login__container {
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
}

.login__container > h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

.login__container > form > h5 {
  margin-bottom: 5px;
}

.login__container > form > input {
  width: 98%;
  height: 30px;
  background-color: #ffffff;
  margin-bottom: 10px;
}

.login__container > p {
  margin-top: 15px;
  font-size: 12px;
}
.login__signInButton {
  background: #133c55;
  border: 1px solid;
  margin-top: 10px;
  border-color: #288cca #133c55 #041c2b;
  color: #fff;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
}

.login__registerButton {
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  color: #111;
  cursor: pointer;
}
</style>
