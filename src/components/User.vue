<template>
  <div>
    <h1>User Page</h1>
    <hr />
    <!-- <p>Loaded ID: {{ id }}</p> -->
    <button @click="navigateToHome" class="btn btn-primary">To Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>