<template>
  <div>
    <h1 class="title">Upload</h1>
    <p>The page is under construction</p>
    <Loader v-if="isLoading" />
    <Body />
  </div>
</template>

<script>
import Body from "@/components/Body";
import Loader from "@/components/Loader";
export default {
  data() {
    return {
      isLoading: true,
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
