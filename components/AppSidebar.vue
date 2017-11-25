<template>
  <aside>
    <app-multiselect />
  </aside>
</template>

<script>
import AppMultiselect from './AppMultiselect.vue';

export default {
  components: {
    AppMultiselect
  }
};
</script>

<style scoped>
aside {
  background: white;
  height: 90vh;
  float: left;
}
</style>