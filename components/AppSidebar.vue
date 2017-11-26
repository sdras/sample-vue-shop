<template>
  <aside>
    <app-range />
    <app-switch v-if="!sale" />
    <div class="sidearea callout">
      <h4>Special Sale!</h4>
      <p>Shop now because half our items are greatly reduced</p>
    </div>
    <div class="sidearea callout">
      <h4>Contact Us</h4>
      <p>Questions? Call us at 1-888-555-SHOP, we're happy to be of service.</p>
    </div>
  </aside>
</template>

<script>
import AppRange from './AppRange.vue';
import AppSwitch from './AppSwitch.vue'

export default {
  props: {
    sale: {
      type: Boolean,
      default: false
    },
  },
  components: {
    AppRange,
    AppSwitch
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}
</style>