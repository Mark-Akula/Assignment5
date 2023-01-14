<script setup>
import SiteHeader from "../components/SiteHeader.vue";
import SiteHero from "../components/SiteHero.vue";
import SiteFooter from "../components/SiteFooter.vue";
</script>
<script>
export default {
  name: "HomeView",
  components: {
    SiteHeader,
    SiteHero,
    SiteFooter,
  },
};
</script>

<template>
  <div class="main-container">
    <SiteHeader />
    <SiteHero />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
