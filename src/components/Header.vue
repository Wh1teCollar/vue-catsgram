<template>
  <header class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/cats/my">View</router-link>
    <router-link to="/cats/new">Upload</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #9795f0;
  padding: 1rem 2rem;
  color: honeydew;
  font-size: 2rem;
  margin: 0;
}
a {
  text-decoration: none;
  color: honeydew;
  padding: 1rem;
  cursor: pointer;
}
a:hover {
  color: tomato;
}
</style>