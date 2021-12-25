<template>
  <div>
    <h1 class="title">Home</h1>
    <Loader />
    <Body v-bind:catsList="catsList" />
  </div>
</template>

<script>
import axios from "axios";
import Body from "@/components/Body";
import Loader from "@/components/Loader";
export default {
  mounted() {
    const headers = { "x-api-key": "db2157d0-39de-439e-b8fe-7e033060a0f0" };
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=20", { headers })
      .then((response) => (this.catsList = response.data));
  },
  data() {
    return {
      catsList: [],
    };
  },
  components: {
    Body,
    Loader,
  },
};
</script>

<style scope>
</style>
