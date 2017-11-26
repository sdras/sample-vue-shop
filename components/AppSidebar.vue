<template>
  <aside>
    <app-range />
    <div class="sidearea">
      <h4>Show Sale</h4>
      
    </div>
  </aside>
</template>

<script>
import AppRange from './AppRange.vue';

export default {
  components: {
    AppRange
  }
};
</script>

<style scoped>
aside {
  background: white;
  height: 90vh;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  padding-bottom: 50px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}
</style>