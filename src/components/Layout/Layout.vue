<template>
  <div>
    <Nav />
    <div class="page-rest"></div>
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
  components: { Footer, Nav }
};
</script>

<style scoped>
.page-rest {
  height: var(--nav-height);
}
</style>
