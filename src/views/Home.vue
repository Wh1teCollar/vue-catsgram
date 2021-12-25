<template>
  <div>
    <h1>Home</h1>
    <Loader />
    <Body />
  </div>
</template>

<script>
import Body from "@/components/Body";
import Loader from "@/components/Loader";
export default {
  components: {
    Body,
    Loader,
  },
};
</script>

<style scope>
</style>
