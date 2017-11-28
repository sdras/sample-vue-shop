<template>
  <div>
    <div class="wrapper">
      <app-navigation />
      <nuxt/>
      <div class="clear"></div>
      <div class="push"></div>
    </div>
    <app-footer class="footer" />
  </div>
</template>

<script>
import AppNavigation from './../components/AppNavigation.vue';
import AppFooter from './../components/AppFooter.vue';

export default {
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

.clear {
  clear: both;
}

/* sticky footer stuff */
.wrapper {
  min-height: 100vh;
  margin-bottom: -60px;
}

.footer,
.push {
  height: 50px;
  margin-top: 10px;
}
</style>
