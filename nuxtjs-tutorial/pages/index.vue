<template lang="pug">
div 
  h1 Hello World
  <Footer />
  <Header />
</template>

<script>
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

export default {
  components: {
    Header,
    Footer
  }
};
</script>