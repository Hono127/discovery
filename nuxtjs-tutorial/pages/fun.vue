<template lang="pug">
div 
  h1 Welcome Fun Page
  <Header/>
  <Footer/>

</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
};
</script>