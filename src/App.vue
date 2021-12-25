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
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scope>
html {
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cecece;
  margin-top: 60px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
}
.container {
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.4);
  border-radius: 10px;
  padding: 1rem 2rem;
  color: honeydew;
  font-size: 1.5rem;
  margin: 20px 0;
}
</style>
