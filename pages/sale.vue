<template>
  <main class="capsule">
    <div class="saleimg">
      <app-masthead img="bk-sale" title="Sale" bkcolor="#1ba079"/>
    </div>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice" :sale="true"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in sProducts"
          key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMasthead from './../components/AppMasthead.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMasthead,
    AppItem
  },
  data() {
    return {
      highprice: 300
    };
  },
  computed: {
    sProducts() {
      return this.$store.getters.sale.filter(el => el.price < this.highprice);
    }
  }
};
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
