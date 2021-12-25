<template>
  <div class="home">
    <CatPhoto />
  </div>
</template>

<script>
import CatPhoto from "@/components/CatPhoto";
export default {
  data: {
    catsArray: [],
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
  font-size: 1.5rem;
  margin: 20px 0;
}
</style>