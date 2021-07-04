<template>
  <router-view />
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

a {
  text-decoration: none;
}
</style>
