<template>
  <div>
    <h1>User Edit</h1>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-primary">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>