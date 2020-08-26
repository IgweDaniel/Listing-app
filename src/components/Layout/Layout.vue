<template>
  <div>
    <Header />
    <!-- <div class="page-rest"></div> -->
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: { Footer, Header }
};
</script>

<style scoped>
.page-rest {
  height: var(--nav-height);
}
</style>
