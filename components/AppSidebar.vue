<template>
  <aside>
    <app-range />
    <app-switch />
  </aside>
</template>

<script>
import AppRange from './AppRange.vue';
import AppSwitch from './AppSwitch.vue'

export default {
  components: {
    AppRange,
    AppSwitch
  }
};
</script>

<style scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}
</style>