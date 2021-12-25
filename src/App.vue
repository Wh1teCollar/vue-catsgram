<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
  width: 100%;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.container {
  padding: 1rem 2rem;
  color: honeydew;
  font-size: 1.5rem;
  margin: 0;
  min-height: 100vh;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
}
</style>
