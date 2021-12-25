<template>
  <div>
    <h1 class="title">Upload</h1>
    <p>The page is under construction</p>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Loader,
  },
};
</script>

<style scope>
</style>
