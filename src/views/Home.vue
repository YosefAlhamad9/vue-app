<template>
  <div class="home">
    <!-- Header -->

    <Header />

    <!-- Home page -->

    <HomeScreen />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import HomeScreen from "../components/HomeScreen.vue";
export default {
  name: "Home",
  components: {
    Header,
    HomeScreen,
  },
};
</script>

<style scoped></style>
