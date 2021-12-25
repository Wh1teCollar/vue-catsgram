<template>
  <div class="catPhoto">
    <img :src="cat.url" alt="cat.id" />
  </div>
</template>

<script>
export default {
  props: ["cat"],
};
</script>

<style scoped>
.catPhoto {
  padding: 1rem;
}
img {
  background-color: rgb(70, 70, 70, 0.4);
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.8);
  border-radius: 10px;
  height: auto;
  width: 420px;
}
@media (max-width: 500px) {
  img {
    border-radius: 10px;
    height: auto;
    width: 300px;
  }
}
</style>