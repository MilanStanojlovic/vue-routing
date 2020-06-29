<template>
  <div>
    <h1>User Detail</h1>
    <p>User Loaded has id: {{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="link">Edit user</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  }
};
</script>

<style>
</style>