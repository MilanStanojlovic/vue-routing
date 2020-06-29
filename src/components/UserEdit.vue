<template>
  <div>
    <h1>User Edit</h1>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-primary" @click="setConfirmed">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },

  methods: {
    setConfirmed() {
      this.confirmed = true;
    }
  },

  //the only place you can check can user leave the component is inside of it
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
</style>