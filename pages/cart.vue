<template>
  <div class="cart capsule">
    <h1>Cart</h1>
    <div class="cartitems" v-for="item in cart">
      <div class="carttext">
        <h4>{{ item.name }}</h4>
        <p>{{ item.price | usdollar }} x {{ item.count }}</p>
        <p>Total for this item: <strong>{{ item.price * item.count }}</strong></p>
      </div>
      <img class="cartimg" :src="`/${item.img}`" :alt="`Image of ${item.name}`">
    </div>
    <div class="total">
      <h3>Total: </h3>
    </div>
    <app-checkout></app-checkout>
  </div>
</template>

<script>
import AppCheckout from './../components/AppCheckout.vue';

export default {
  components: {
    AppCheckout
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  }
};
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
}

.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}
</style>