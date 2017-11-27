<template>
  <main class="capsule">
    <app-masthead img="banner-ppl" title="Men's" bkcolor="#474598"/>
    <div class="contain">
      <app-sidebar :pricerange="highprice" @pricecap="highprice = $event"/>
      <transition-group name="items" tag="section" class="content">
        <app-item 
          v-for="(item, index) in mProducts"
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
    mProducts() {
      let temp = [];
      this.$store.getters.men.forEach(el => {
        if (el.price < this.highprice) {
          temp.push(el);
        }
      });
      return temp;
    }
  }
};
</script>
