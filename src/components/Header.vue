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
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.4);
  border-radius: 10px;
  padding: 1rem 2rem;
  color: honeydew;
  font-size: 2rem;
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