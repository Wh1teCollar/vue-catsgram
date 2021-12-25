<template>
  <div class="home">
    <CatPhoto v-for="cat in catsList" v-bind:cat="cat" v-bind:key="cat.id" />
  </div>
</template>

<script>
import CatPhoto from "@/components/CatPhoto";
export default {
  props: ["catsList"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    CatPhoto,
  },
};
</script>

<style scoped>
.home {
  padding: 1rem 2rem;
  color: honeydew;
}
@media (max-width: 500px) {
  .home {
    padding: 0.5rem 1rem;
  }
}
</style>